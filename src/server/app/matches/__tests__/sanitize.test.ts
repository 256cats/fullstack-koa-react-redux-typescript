import sanitize from '../sanitize'
const fixtures = require('./sanitize.fixtures.json')

describe('api/matches/sanitize', () => {
  it('Sanitizing works correctly', () => {
    for (let i = 0; i < fixtures.length; i++) {
      const fixture = fixtures[i]
      expect(sanitize(fixture.input)).toEqual(fixture.output)
    }
  })
})
