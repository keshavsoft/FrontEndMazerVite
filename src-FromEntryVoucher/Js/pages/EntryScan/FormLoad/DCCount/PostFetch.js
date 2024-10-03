let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "VoucherRef" });
    let jVarLocalFactory = localStorage.getItem("FactoryName");
    let jVarLocalFetchUrl = `/Custom/Clients/Laundry/Factory/Inward/Scan/QrCode/RowCount/${jVarLocalFilterString}/${jVarLocalFactory}`;
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