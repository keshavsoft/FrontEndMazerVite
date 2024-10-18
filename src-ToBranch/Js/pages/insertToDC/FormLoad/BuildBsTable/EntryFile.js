import optionsJson from './options.json' with {type: 'json'};

import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";
import { StartFunc as queryParams } from "./queryParams/EntryFile.js";
import { StartFunc as responseHandler } from "./responseHandler/EntryFile.js";
import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    optionsJson.onClickRow = onClickRow;
    optionsJson.queryParams = queryParams;
    optionsJson.responseHandler = responseHandler;

    let LocalFactoryName = localStorage.getItem("FactoryName");

    ForColumns({ inColumns: optionsJson.columns });

    // optionsJson.url = optionsJson.url.replace("$FactoryName", LocalFactoryName);

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };