var fs = require("fs");

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const createCompoentFile = (filePath, componentName) => {
  const componentTemplate = `import sytles from './${componentName}.module.css';

const ${componentName} = () => {
    return (
        <div> ${componentName} Component </div>
    );
};

export default ${componentName};
`;

  const fileName = filePath + componentName + ".js";

  let writeStream = fs.createWriteStream(fileName);
  writeStream.write(componentTemplate);
  writeStream.end();
};

const createCssFile = (filePath, componentName) => {
  const fileName = filePath + componentName + ".module.css";

  let writeStream = fs.createWriteStream(fileName);
  writeStream.end();
};

const createFiles = (componentNameWithPath) => {
  let filePath = componentNameWithPath.substring(
    0,
    componentNameWithPath.lastIndexOf("/") + 1
  );
  let componentName = componentNameWithPath.substring(
    componentNameWithPath.lastIndexOf("/") + 1,
    componentNameWithPath.length
  );

  fs.mkdir(filePath, { recursive: true }, (err) => {
    if (err) return;
  });

  componentName = capitalizeFirstLetter(componentName);
  console.log("Creating Component : ", componentName);

  createCompoentFile(filePath, componentName);
  createCssFile(filePath, componentName);
};

// createFiles("bin/testonefile");

module.exports = { createFiles };
