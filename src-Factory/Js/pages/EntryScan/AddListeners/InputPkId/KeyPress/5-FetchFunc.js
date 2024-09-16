import UrlJson from './Url.Json' with {type: 'json'};

import { StartFunc as StartFuncRowpk } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalRowPk = StartFuncRowpk();
    let jVarLocalFetchUrl = `${UrlJson.url}/${jVarLocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    return await response;

    // let jVarLocalResponse = await response.json();
    // return await jVarLocalResponse;

};

export { StartFunc };