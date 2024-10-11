import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalVoucherRef = getUrlQueryParams({ inGetKey: "VoucherRef" });

    let jVarLocalFactoryName = localStorage.getItem("FactoryName")
    let jVarLocalFetchUrl = `${ConfigJson.GetUrl}/${jVarLocalVoucherRef}/${jVarLocalFactoryName}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };