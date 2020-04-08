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
  collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
  coverageReporters: ["html", "text-summary"],
}
