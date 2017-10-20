const elastic = require('elasticsearch');
const data = require('./initialData.json');
const client = new elastic.Client({
  host: 'localhost:9200',
  log: 'trace'
});

const indexName = 'matches';

function deleteIndex() {
  return client.indices.delete({
    index: indexName
  });
}

function initIndex() {
  return client.indices.create({
    index: indexName
  });
}

function initMapping() {
  return client.indices.putMapping({
    index: indexName,
    type: 'match',
    body: {
      _all : { enabled : false },
      properties: {
        display_name: { type: 'string' },
        age: { type: 'integer' },
        job_title: { type: 'string' },
        height_in_cm: { type: 'integer' },
        city: {
          type: 'nested',
          properties: {
            name: { type: 'string' },
            location: { type: 'geo_point'}
          }
        },
        main_photo: { type: 'string' },
        compatibility_score: { type: 'float' },
        contacts_exchanged: { type: 'integer' },
        favourite: { type: 'boolean' },
        religion: { type: 'string' }
      }
    }
  });
}

function bulkAdd(documents) {
  const body = [];
  documents.forEach(d => {
    d.city.location = [ d.city.lat, d.city.lon ];
    delete d.city.lat;
    delete d.city.lon;
    body.push({ index: { _index: indexName, _type: 'match' } });
    body.push(d);
    
  });
  
  return client.bulk({ body: body });
}

console.log('started');
deleteIndex()
  .then(initIndex, function () {})
  .then(initMapping)
  .then(function () {
    return bulkAdd(data.matches);
  })
  .then(function () {
    console.log('done, added', data.matches.length);
    process.exit();
  })