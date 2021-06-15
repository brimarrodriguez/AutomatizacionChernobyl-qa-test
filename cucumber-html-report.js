const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
reportPath: "./reports/cucumber-htmlreport.html",
metadata: {
browser: {
name: "chrome",
version: "91",
},
device: "Virtual machine",
platform: {
name: "Reporte",
version: "1.0.0",
},
},
});