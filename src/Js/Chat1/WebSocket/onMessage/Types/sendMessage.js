let StartFunc = (inObject) => {
    let jVarLocalFromId = inObject.fromId;
    let jVarLocalDomSearch = document.querySelector(`section .card h6[data-uuid=${jVarLocalFromId}]`)
    console.log(jVarLocalDomSearch);
};

export { StartFunc };