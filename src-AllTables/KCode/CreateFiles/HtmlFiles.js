import fs from "fs";
import { resolve } from 'path';
import { StartFunc as GetTableNames } from "../GetTableNames.js";
const CommonHtmlFiles = ["index", "login"];

const LocalFuncGetFiles = ({ inSrcPath }) => {
    const root = `${inSrcPath}/HtmlTemplateFiles`;
    let files = {}

    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.html'))
        .forEach(filename => {
            files[filename.slice(0, -5)] = resolve(root, filename)
        });

    return files;
};

const StartFunc = ({ inSrcPath }) => {
    const root = inSrcPath;

    if (!fs.existsSync(root)) {
        fs.mkdirSync(root);
    }

    let TableNamesAsArray = GetTableNames();
    let LocalHtmlFiles = LocalFuncGetFiles({ inSrcPath });
    // console.log("LocalHtmlFiles : ", LocalHtmlFiles, root);
    TableNamesAsArray.forEach(LoopTableName => {
        for (const [key, value] of Object.entries(LocalHtmlFiles)) {
            let LocalFileData = fs.readFileSync(value, "utf8");

            if (CommonHtmlFiles.includes(key)) {
                fs.writeFileSync(`${root}/${key}.html`, LocalFileData);
                continue;
            };

            fs.writeFileSync(`${root}/${LoopTableName}${key}.html`, LocalFileData);
        };
    });
};

export { StartFunc };