let StartFunc = ({inObject}) => {
    let jVarLocalFromId = inObject.fromId;
    let jVarLocalDomSearch = document.querySelector(`section .card h6[data-uuid='${jVarLocalFromId}']`)
    let jVarLocalClosestCard = jVarLocalDomSearch.closest(".card")

    jFLocalSendMessage({inMessage:inObject, inHtmlCard:jVarLocalClosestCard})
};

// A flag to toggle between SendMessageId and RecieveMessageId
let isSendMessage = true;

const jFLocalSendMessage = ({ inMessage, inHtmlCard}) => {
    const templateId = isSendMessage ? "#SendMessageId" : "#RecieveMessageId";
    const template = document.querySelector(templateId);
    let jVarLocalinHtmlCard=inHtmlCard;
    console.log(jVarLocalinHtmlCard);
    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);

    let b = clone.querySelector(".chat-message");
    b.innerText= inMessage.Message;


    jVarLocalinHtmlCard.querySelector(".chat-content").appendChild(clone);

    isSendMessage = !isSendMessage;  // Toggle the flag for next message
};


export { StartFunc };