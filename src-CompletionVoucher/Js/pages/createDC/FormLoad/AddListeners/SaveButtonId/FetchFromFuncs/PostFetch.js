import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    console.log("jVarLocalFetchHeaders:",jVarLocalFetchHeaders);
    
    let jVarLocalFetchUrl = ConfigJson.PostUrl;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

