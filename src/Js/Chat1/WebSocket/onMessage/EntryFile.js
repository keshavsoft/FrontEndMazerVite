import { StartFunc as sendMessage } from "./Types/EntryFile.js";

let StartFunc = (event) => {
    let jVarLocalJsonObject = JSON.parse(event.data);
    console.log("types",jVarLocalJsonObject);

    switch (jVarLocalJsonObject.Type) {
        case "sendMessage":
            sendMessage({ inObject: jVarLocalJsonObject });

            break;

        default:
            break;
    }
};

export { StartFunc };