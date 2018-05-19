module.exports = {
  "verbose": true,
//uncomment the next line to get the coverage report
//  "collectCoverage": true,
  "collectCoverageFrom": [
	    "app/*.{js,jsx}",
	    "!**/node_modules/**",
	    "!**/vendor/**"
	    ],
  "coverageDirectory":"test/reports/coverage",
};