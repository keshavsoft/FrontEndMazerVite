import path from "path";
import fs from "fs";
import { StartFunc as GetTableNames } from "../../GetTableNames.js";

const StartFunc = ({ inSrcPath, inFilename }) => {
    let TableNamesAsArray = GetTableNames();
    // console.log("aaaaaaaaaa : ", TableNamesAsArray);

    TableNamesAsArray.forEach(LoopTableName => {
        let srcFilePath = path.join(inSrcPath, 'JsTemplate', 'pages', inFilename);
        let destFilePath = path.join(inSrcPath, 'Js', 'pages', `${LoopTableName}${inFilename}`);

        fs.cpSync(srcFilePath, destFilePath, { recursive: true });
        jFLocalConfig({ srcFilePath, destFilePath, inTableName: LoopTableName });
    });
};

const jFLocalConfig = ({ srcFilePath, destFilePath, inTableName }) => {
    let srcConfigPath = path.join(srcFilePath, 'config.json');
    let destConfigPath = path.join(destFilePath, 'config.json');

    if (fs.existsSync(srcConfigPath)) {
        let config = JSON.parse(fs.readFileSync(srcConfigPath, 'utf-8'));
        config.tableName = inTableName;

        fs.writeFileSync(destConfigPath, JSON.stringify(config, null, 2), 'utf-8');
    };
};

export { StartFunc };