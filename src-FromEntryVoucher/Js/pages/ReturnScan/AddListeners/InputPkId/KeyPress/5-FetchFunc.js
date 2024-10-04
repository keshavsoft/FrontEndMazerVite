// import UrlJson from './Url.json' with {type: 'json'};
import { StartFunc as StartFuncRowpk } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalRowPk = StartFuncRowpk();
    let jVarLocalFetchUrl = `/Custom/Clients/Laundry/Factory/Process/Washing/Scan/QrCode/RowQrData/${jVarLocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    return await response;
};

export { StartFunc };