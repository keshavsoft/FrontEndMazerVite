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
                fs.cpSync(`${inSrcPath}/JsTemplate/pages/${filename}`, `${inSrcPath}/Js/pages/${LoopTableName}${filename}`, { recursive: true });
            });
        });
};

export { StartFunc };