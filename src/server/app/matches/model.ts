// just fyi
const Schema = {
  display_name: { type: 'string' },
  age: { type: 'integer' },
  job_title: { type: 'string' },
  height_in_cm: { type: 'integer' },
  city: {
    name: { type: 'string' },
    location: { type: 'geo_point'}
  },
  main_photo: { type: 'string' },
  compatibility_score: { type: 'float' },
  contacts_exchanged: { type: 'integer' },
  favourite: { type: 'boolean' },
  religion: { type: 'string' }
}
