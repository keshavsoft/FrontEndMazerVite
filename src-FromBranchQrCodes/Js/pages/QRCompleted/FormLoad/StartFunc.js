import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncAddlisteners } from "./ListenerFuncs/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";

const StartFunc = () => {
    StartFuncBuildBsTable();
    StartFuncFromUrlParams();
    StartFuncAddlisteners();
};

export { StartFunc };
