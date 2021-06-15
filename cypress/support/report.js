const qa_name = 'Brimar Rodriguez';
const project = 'AFP-Capital/chernobyl-qa-test';
const cycle = 'C1';
const device = 'Virtual machine';
//------------------------------------------------------

const report = require('multiple-cucumber-html-reporter');
const moment = require('moment');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const dateTime = moment().format('MM/DD/YYYY HH:mm:ss');
const cucumberJsonDir = 'cypress/reports/cucumber-json/';
const cucumberReportFileMap = {};
const cucumberReportMap = {};
const jsonIndentLevel = 2;
const htmlReportDir = 'cypress/reports/cucumber-report';
const screenshotsDir = 'cypress/screenshots';
let hrs = '', min = '', sec = '', ms = '';
var pad = (n, z = 2) => ('00' + n).slice(-z);

getCucumberReportMaps();
addScreenshots();
calculateTotalDuration();
generateReport();

function getCucumberReportMaps() {
    try {
      const files = fs.readdirSync(cucumberJsonDir).filter(file => {
        return file.indexOf('.json') > -1;
      });
      files.forEach(file => {
        const json = JSON.parse(fs.readFileSync(path.join(cucumberJsonDir, file)));
        if (!json[0]) {
          return
        }
        const [feature] = json[0].uri.split('/').reverse();
        cucumberReportFileMap[feature] = file;
        cucumberReportMap[feature] = json;
      });

    } catch (error) {
        console.warn("There are no json files of the execution results.");
      } 
      }
      
      function addScreenshots() {
        try {
          // Prepend the given path segment
          const prependPathSegment = pathSegment => location => path.join(pathSegment, location);
          // fs.readdir but with relative paths
          const readdirPreserveRelativePath = location => fs.readdirSync(location).map(prependPathSegment(location));
          // Recursive fs.readdir but with relative paths
          const readdirRecursive = location => readdirPreserveRelativePath(location)
          .reduce((result, currentValue) => fs.statSync(currentValue).isDirectory()
            ? result.concat(readdirRecursive(currentValue))
            : result.concat(currentValue), []);
        const screenshots = readdirRecursive(path.resolve(screenshotsDir)).filter(file => {
          return file.indexOf('.png') > -1;
        });

        // Extract feature list from screenshot list
    const featuresList = Array.from(new Set(screenshots.map(x => x.match(/[\w-_.]+\.feature/g)[0])));
    featuresList.forEach(feature => {
      screenshots.forEach(screenshot => {
        const regex = /(?<=--\ ).+?((?=\ \(example\ #\d+\))|(?=\ \(failed\))|(?=\.\w{3}))/g;
        const [scenarioName] = screenshot.match(regex);
        console.info(chalk.blue('\n    Adding screenshot to cucumber-json report for'))
        console.info(chalk.blue(`    '${scenarioName}'`))

        const myScenarios = cucumberReportMap[feature][0].elements.filter(
          e => scenarioName.includes(e.name)
        );
        if (!myScenarios) { return }
        let foundFailedStep = false;
        myScenarios.forEach(myScenario => {
          if (foundFailedStep) { return }
          let myStep;
          if (screenshot.includes('(failed)')) {
            console.info(chalk.blue('\n    Adding failed screenshot  to cucumber-json report for'));
            console.info(chalk.blue(`    '${scenarioName}'`));
            myStep = myScenario.steps.find(step => step.result.status === 'failed');
          }
          if (!myStep) { return }
          const data = fs.readFileSync(path.resolve(screenshot));
          if (data) {
            const base64Image = Buffer.from(data, 'binary').toString('base64');
            if (!myStep.embeddings) {
              myStep.embeddings = [];
              myStep.embeddings.push({ data: base64Image, mime_type: 'image/png' });
              foundFailedStep = true;
            }
          }
        });

 //Write JSON with screenshot back to report file.
        fs.writeFileSync(
          path.join(cucumberJsonDir, cucumberReportFileMap[feature]),
          JSON.stringify(cucumberReportMap[feature], null, jsonIndentLevel)
        );
      });
    });
  } catch (error) {
    console.warn("There are not failed screenshots.");
  }
}

function calculateTotalDuration() {
  try {
    const files = fs.readdirSync(cucumberJsonDir).filter(file => {
      return file.indexOf('.json') > -1;
    });
    files.forEach(file => {
      const json = JSON.parse(fs.readFileSync(path.join(cucumberJsonDir, file)));

      if (!json[0]) { return }

      const [feature] = json[0].uri.split('/').reverse();
      cucumberReportFileMap[feature] = file;
      cucumberReportMap[feature] = json;

      cucumberReportMap[feature][0].elements.forEach(el => {
        //console.log(el.name);
        el.steps.forEach(step => {
          if (step.result.duration)
            //console.log(step.result.duration);
            msToTime(step.result.duration / 1000000);
        });
      });
    });
  } catch (error) {
    console.warn('There are no json files of the execution results for calculating the duration time.')
  }
}

function generateReport() {
    if (!fs.existsSync(cucumberJsonDir)) {
      console.warn(chalk.yellow(`WARNING: Folder './${cucumberJsonDir}' not found. REPORT CANNOT BE CREATED!`));
    }
    else {
      report.generate({
        jsonDir: cucumberJsonDir,
        reportPath: htmlReportDir,
        displayDuration: true,
        pageTitle: 'Automation Report',
        reportName: 'Automation Report - ' + dateTime,
        removeFolders: 'true',
        pageFooter: '',
        displayDuration: true,
      displayReportTime: true,
        metadata: {
          browser: {
            name: 'Chrome',
            version: '89'
          },
          device: device,
          platform: {
            name: 'Windows',
            version: '10'
          }
        },
     
       customData: {
          title: 'Report details',
          data: [
            { label: 'QA name', value: qa_name },
            { label: 'Project', value: project },
            { label: 'Cycle', value: cycle },
            { label: 'Execution Date', value: dateTime },
            { label: 'Total duration', value: pad(hrs) + ':' + pad(min) + ':' + pad(sec) + '.' + pad(ms, 3) }
          ]
        }
      });
      console.info(chalk.yellow('\n    Total duration ---> '+pad(hrs) + ':' + pad(min) + ':' + pad(sec) + '.' + pad(ms, 3)+ '\n'));
  }
}

function msToTime(duration) {
  ms = parseInt(ms + (duration % 1000));
  if (ms > 1000) {
    sec = parseInt(sec + (ms / 1000));
    ms = ms % 1000;
  }

  sec = parseInt(sec + ((duration / 1000) % 60))
  if (sec > 60) {
    min = parseInt(min +(sec / 60));
    sec = sec % 60;
  }
 min = parseInt(min +((duration / (1000 * 60)) % 60))
  if (min > 60) {
    hrs = parseInt( hrs + (min / 60));
    min = min % 60;
  }

  hrs = parseInt(hrs + ((duration / (1000 * 60 * 60)) % 24));
}