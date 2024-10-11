let StartFunc = () => {

    return true;
};

let jFLocalFromDomInputFactorySelectedId = () => {
    let jVarLocalHtmlDCFactoryTextId = 'InputFactorySelectedId';
    let jVarHtmlDCFactoryTextId = document.getElementById(jVarLocalHtmlDCFactoryTextId);
    let jVarHtmlDCFactoryTextIdValue = jVarHtmlDCFactoryTextId.value.trim();
    return jVarHtmlDCFactoryTextIdValue;
};

let jFLocalFromDomDCFactoryTextId = () => {
    let jVarLocalHtmlDCFactoryTextId = 'DCFactoryTextId';
    let jVarHtmlDCFactoryTextId = document.getElementById(jVarLocalHtmlDCFactoryTextId);
    let jVarHtmlDCFactoryTextIdValue = jVarHtmlDCFactoryTextId.value.trim();
    return jVarHtmlDCFactoryTextIdValue;
};

export { StartFunc };