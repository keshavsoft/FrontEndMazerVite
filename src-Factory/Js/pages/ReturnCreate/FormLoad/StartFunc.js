import { StartFunc as ShowOnDom } from "./ShowOnDom.js";
import { StartFunc as AddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = () => {
    ShowOnDom();
    AddListeners();
};

export { StartFunc };
