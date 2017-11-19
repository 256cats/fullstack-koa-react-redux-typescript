const elastic = require('elasticsearch');
const data = require('./initialData.json');

const client = new elastic.Client({
  host: '10.5.0.6:9200',
  log: 'trace'
});

const indexName = 'matches';

function deleteIndex() {
  return client.indices.delete({
    index: indexName,
    ignore: [404]
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
    type: 'matches',
    body: {
      _all : { enabled : false },
      properties: {
        display_name: { type: 'string' },
        age: { type: 'integer' },
        job_title: { type: 'string' },
        height_in_cm: { type: 'integer' },
        city: {
          // type: 'nested',
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
    d.city.location = { lat: d.city.lat, lon: d.city.lon };
    delete d.city.lat;
    delete d.city.lon;
    body.push({ index: { _index: indexName, _type: 'matches' } });
    body.push(d);
  });
  
  return client.bulk({ body: body });
}

console.log('started');

async function delay(timeout) {
  return new Promise(resolve => setTimeout(() => resolve(), timeout))
}

async function main() {
  let connected = false;
  while(!connected) {
    try {
      await deleteIndex();
      connected = true;
    } catch (e) {
      console.log('error', e);
      await delay(2000)
    }
  }

  await initIndex
  await initMapping
  await bulkAdd(data.matches)
  console.log('done, added', data.matches.length);
  process.exit();
}

main();