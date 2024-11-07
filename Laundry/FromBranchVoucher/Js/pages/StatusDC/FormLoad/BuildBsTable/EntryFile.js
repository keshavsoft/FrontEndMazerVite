import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";
import { StartFunc as queryParams } from "./queryParams/EntryFile.js";
import { StartFunc as responseHandler } from "./responseHandler/EntryFile.js";
let jVarLocalFactoryName = localStorage.getItem("FactoryName");

const StartFunc = () => {
    var $table = $('#table');
    optionsJson.onClickRow = onClickRow;
    optionsJson.queryParams = queryParams;
    optionsJson.responseHandler = responseHandler;

    optionsJson.url = optionsJson.url.replace("$FactoryName", jVarLocalFactoryName);

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };