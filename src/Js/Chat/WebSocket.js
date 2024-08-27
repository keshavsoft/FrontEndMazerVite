let jVarLocalHostName = window.location.host;
let jVarLocalUrlForWS;

if (location.protocol === "https:") {
    jVarLocalUrlForWS = "wss://" + jVarLocalHostName;
}
if (location.protocol === "http:") {
    jVarLocalUrlForWS = "ws://" + jVarLocalHostName;
}
let StartFunc = () => {
    jFLocalEstablishWebSocket();
};

let jFLocalEstablishWebSocket = () => {
    webSocket = new WebSocket(jVarLocalUrlForWS);

    webSocket.onopen = (event) => {
        let jVarLocalStatusId = document.getElementById('StatusId');
        jVarLocalStatusId.classList.remove("bg-warning");
        jVarLocalStatusId.classList.add("bg-success");
        webSocket.send("k1");
    };

    webSocket.onmessage = (event) => {
        console.log("event : ", event.data);
    };;

    webSocket.onclose = function (e) {
    };
};


StartFunc();