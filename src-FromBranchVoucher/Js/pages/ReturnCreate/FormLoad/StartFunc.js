import { StartFunc as ShowOnDom } from "./ShowOnDom.js";
import { StartFunc as AddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncFromUrlParams} from "./FromUrlParams/EntryFile.js";


const StartFunc = () => {
    StartFuncFromUrlParams();
    ShowOnDom();
    AddListeners();
};

export { StartFunc };
