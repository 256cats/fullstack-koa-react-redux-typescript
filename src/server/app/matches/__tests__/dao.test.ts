import { queryBodyBuilder } from '../dao/queryBuilder'

const esQueryFixtures = require('./dao.fixtures.json')

describe('api/matches/dao', () => {
  it('Query is built correctly', () => {
    for (let i = 0; i < esQueryFixtures.length; i++) {
      const fixture = esQueryFixtures[i]
      expect(queryBodyBuilder(fixture.input)).toEqual(fixture.output)
    }
  })
})
