import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnScan } from "./ColumnScan/entryFile.js";
import { StartFunc as ColumnWashCancel } from "./ColumnWashCancel/entryFile.js";
import { StartFunc as ColumnRewash } from "./ColumnRewash/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    let LocalColumnRate = LocalColumns.find(element => element.field === "Sent");

    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };
    
    let LocalColumnReceived = LocalColumns.find(element => element.field === "Receved");

    if (LocalColumnReceived=== undefined === false) {
        ColumnScan({ inFindColumn: LocalColumnReceived });
    };

    let LocalColumnWashCancel = LocalColumns.find(element => element.field === "WashCancel");

    if (LocalColumnWashCancel=== undefined === false) {
        ColumnWashCancel({ inFindColumn: LocalColumnWashCancel });
    };

    let LocalColumnRewash = LocalColumns.find(element => element.field === "ReWash");

    if (LocalColumnRewash=== undefined === false) {
        ColumnRewash({ inFindColumn: LocalColumnRewash });
    };
};

export { StartFunc };