/* eslint-disable comma-dangle, prettier/prettier */

export default {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['json-summary', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  snapshotSerializers: ['jest-serializer-path'],
  testRegex: '/__tests__/.*-test\\.js$'
}
