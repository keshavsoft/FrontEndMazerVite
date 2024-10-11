import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
// import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./FormLoadBeforeAdmin/EntryFile.js";

const StartFunc = () => {
    StartFuncFormLoad();

    // StartFuncFormLoadBeforeAdmin();

    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom({}).then();
    };
};

StartFunc();