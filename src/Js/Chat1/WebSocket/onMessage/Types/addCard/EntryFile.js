let StartFunc = ({ inObject }) => {
    jFLocalAddCard({inMessage:inObject});
};

const jFLocalAddCard = ({ inMessage }) => {
    const template = document.querySelector("#chart");
    let jVarLocalChatContentId = document.querySelector('section');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);

    let h = clone.querySelector(".name .mb-0");

    console.log(`Hellasadsdo ${inMessage}`)

    console.log(`Hel Message ${inMessage.Message}`)

    h.innerText= inMessage.fromId || "KeshavSoft";
    h.dataset.uuid=inMessage.fromId || "KeshavSoft";

    // let b = clone.querySelector(".card-body .chat-content");
    // b.innerText= inMessage.Message ;
    // b.dataset.uuid=inMessage.Message;


    jVarLocalChatContentId.querySelector(".row").appendChild(clone);
};

export { StartFunc };