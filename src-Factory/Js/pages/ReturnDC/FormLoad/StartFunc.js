import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncListenerFuncs } from "./ListenerFuncs/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";

const StartFunc = () => {
    StartFuncBuildBsTable();
    StartFuncFromUrlParams();
    StartFuncListenerFuncs();
};

export { StartFunc };
