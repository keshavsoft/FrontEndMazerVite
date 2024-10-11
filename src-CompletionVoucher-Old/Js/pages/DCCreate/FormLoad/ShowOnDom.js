const StartFunc = () => {
    let jvarLocalFactoryName = localStorage.getItem("FactoryName");
    jFLocalToInputFactoryName(jvarLocalFactoryName);
    jFLocalToInputDate()
};

let jFLocalToInputFactoryName = (inValue) => {
    let jVarLocalHtmlId = 'FactoryName';
    let jVarLocalFactoryName = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalFactoryName === null === false) {
        jVarLocalFactoryName.value = inValue;
    };
};

let jFLocalToInputDate = () => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    let jVarLocalHtmlId = 'Date';
    let jVarLocalDate = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDate === null === false) {
        jVarLocalDate.value = formattedDate;
    };
};
export { StartFunc }