import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import UrlJson from './Url.json' with {type: 'json'};
let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFactoryName = localStorage.getItem("FactoryName")
    let jVarLocalFetchUrl = `${UrlJson.url}/${jVarLocalFactoryName}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};

export { StartFunc };