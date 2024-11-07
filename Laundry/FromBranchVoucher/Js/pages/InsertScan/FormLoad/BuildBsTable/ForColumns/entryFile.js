import { StartFunc as ColumnOperate } from "./ColumnOperate/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "operate");

    ColumnOperate({ inFindColumn: LocalColumnOperateFine });
};

export { StartFunc };