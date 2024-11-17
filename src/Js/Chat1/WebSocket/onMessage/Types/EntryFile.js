import { StartFunc as addCard  } from "./addCard/EntryFile.js";
import { StartFunc as sendMessage } from "./SendMessage/EntryFile.js";

let StartFunc = ({ inObject }) => {
    let jVarLocalFromId = inObject.fromId;
    let jVarLocalDomSearch = document.querySelector(`section .card h6[data-uuid='${jVarLocalFromId}']`)
    console.log(jVarLocalDomSearch);
    
    if (jVarLocalDomSearch === null) {
        addCard({inObject});
    }
    else{
        sendMessage({inObject});
    }
    
};

export { StartFunc };