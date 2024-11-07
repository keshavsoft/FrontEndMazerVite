import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();
        jFLocalLeftSide();
       
    };
};

const jFLocalLeftSide = () => {
    document.querySelector(".revenue-card").querySelector("h6").innerHTML = "16";
};

StartFunc();