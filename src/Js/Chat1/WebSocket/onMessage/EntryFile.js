import { StartFunc as sendMessage } from "./Types/sendMessage.js";

let StartFunc = (event) => {
    let jVarLocalJsonObject = Json.parse(event.data);

    switch (jVarLocalJsonObject.type) {
        case "sendMessage":
            sendMessage({ inObject: jVarLocalJsonObject });

            // sendMessage{

            // }
            break;

        default:
            break;
    }
};

export { StartFunc };