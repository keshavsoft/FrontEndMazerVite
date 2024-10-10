import { StartFunc as StartFuncRowpk } from "./FetchHeaders/EntryFile.js";
import ConfigJson from '../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalRowPk = StartFuncRowpk();

    let response = await fetch(`${ConfigJson.GetUrl}/${jVarLocalRowPk}`);

    return await response;
};

export { StartFunc };