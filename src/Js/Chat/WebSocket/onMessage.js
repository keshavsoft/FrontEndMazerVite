let StartFunc = (event) => {
    console.log("event : ", event.data);

    try {
        let jVarLocalParse = JSON.parse(event.data);

        switch (jVarLocalParse?.Type) {
            case "IsStudent":
                jFLocalShowForStudent();
                break;

            default:
                break;
        };
    } catch (error) {

    };

    // jFLocalShowMessage({ inMessage: event.data });
};

const jFLocalShowMessage = ({ inMessage }) => {
    const template = document.querySelector("#RecieveMessageId");
    let jVarLocalChatContentId = document.getElementById('ChatContentId');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    clone.querySelector(".chat-message").innerHTML = inMessage;

    jVarLocalChatContentId.appendChild(clone);
};

const jFLocalShowForStudent = () => {
    const template = document.querySelector("#RecieveMessageBoolId");
    let jVarLocalChatContentId = document.getElementById('ChatContentId');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    // clone.querySelector(".chat-message").innerHTML = inMessage;

    jVarLocalChatContentId.appendChild(clone);
};

export { StartFunc };