import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncAddlisteners } from "./ListenerFuncs/StartFunc.js";

const StartFunc = () => {
    StartFuncBuildBsTable();
    StartFuncFromUrlParams();
    StartFuncAddlisteners();

};

export { StartFunc };
