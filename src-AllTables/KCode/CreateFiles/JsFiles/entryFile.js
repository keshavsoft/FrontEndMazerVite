// import path from "path";
import fs from "fs";
// import { StartFunc as GetTableNames } from "../GetTableNames.js";
import { StartFunc as forTableNames } from "./forTableNames.js";

const CommonHtmlFiles = ["Index", "Login"];

const StartFunc = ({ inSrcPath }) => {
    fs.readdirSync(`${inSrcPath}/JsTemplate/pages`)
        .forEach(filename => {
            if (CommonHtmlFiles.includes(filename)) {
                fs.cpSync(`${inSrcPath}/JsTemplate/pages/${filename}`, `${inSrcPath}/Js/pages/${filename}`, { recursive: true });
                return true;
            };

            forTableNames({ inSrcPath, inFilename: filename });
        });
};

export { StartFunc };