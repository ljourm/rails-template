module.exports = {
  roots: [
    "app/javascript"
  ],
  moduleDirectories: [
    "../../node_modules",
    "app/javascript"
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "vue",
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "$1"
  },
  collectCoverage: true,
  coverageDirectory: 'coverage/jest',
  collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**", "!**/__stories__/**"],
  coverageReporters: ["html", "text-summary"],
}
