let StartFunc = () => {
    console.log("gaaaaaaaaaaa : ");
    jFLocalSendMessage();

};

const jFLocalSendMessage = () => {
    let jVarLocalSendMessageInputId = document.getElementById('SendMessageInputId');
    const template = document.querySelector("#SendMessageId");
    let jVarLocalChatContentId = document.getElementById('ChatContentId');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    clone.querySelector(".chat-message").innerHTML = jVarLocalSendMessageInputId.value;

    jVarLocalChatContentId.appendChild(clone);
};

export { StartFunc };