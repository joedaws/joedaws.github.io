const fs = require('fs');
const path = require('path');
const { HtmlValidate } = require('html-validate')

async function validateHtmlFile(filePath) {
  try {
    const absolutePath = path.resolve(filePath);
    const html = fs.readFileSync(absolutePath, 'utf8');

    // Load .htmlvalidate.json configuration
    const htmlvalidate = new HtmlValidate();

    // Validate HTML
    const report = htmlvalidate.validateString(html, absolutePath);

    // Output results
    if (report.valid) {
      console.log(`✔ No issues found in ${absolutePath}`);
    } else {
      console.log(`✖ Issues found in ${absolutePath}`);
      console.log(report.results);
    }
  } catch (error) {
    console.error(`Error validating ${filePath}:\n`, error.message);
  }
}

// does not drill down into child directories of docs
const sourceDir = './'
fs.readdirSync(sourceDir)
  .filter((file) => path.extname(file) === '.html')
  .forEach((file) => validateHtmlFile(path.join(sourceDir, file)));
