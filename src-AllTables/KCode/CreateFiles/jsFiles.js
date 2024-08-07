import path from "path";
import fs from "fs";
import { StartFunc as GetTableNames } from "../GetTableNames.js";
const CommonHtmlFiles = ["Index", "Login"];

const StartFunc = ({ inSrcPath }) => {
    fs.readdirSync(`${inSrcPath}/JsTemplate/pages`)
        .forEach(filename => {
            let TableNamesAsArray = GetTableNames();

            if (CommonHtmlFiles.includes(filename)) {
                fs.cpSync(`${inSrcPath}/JsTemplate/pages/${filename}`, `${inSrcPath}/Js/pages/${filename}`, { recursive: true });
                return true;
            };

            TableNamesAsArray.forEach(LoopTableName => {
                let srcFilePath = path.join(inSrcPath, 'JsTemplate', 'pages', filename);
                let destFilePath = path.join(inSrcPath, 'Js', 'pages', `${LoopTableName}${filename}`);

                fs.cpSync(srcFilePath, destFilePath, { recursive: true });
                jFLocalConfig({ srcFilePath, destFilePath, inTableName: LoopTableName });
            });
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