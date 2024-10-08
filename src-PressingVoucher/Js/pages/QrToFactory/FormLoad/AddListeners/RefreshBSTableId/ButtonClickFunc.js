import { StartFunc as Receipts } from "./Receipts/Entry.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let response = await Receipts();
    jVarGlobalPresentViewData = [...response];
    StartFuncAfterFetch();

};

export { StartFunc }