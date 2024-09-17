
let StartFunc = ({ inQrCodeData, ScanedQrCodeData }) => {

    let jVarLocalBranchName = localStorage.getItem("FactoryName");

    let LocalFilterQrCodeData = inQrCodeData.filter(e => e.DCFactory == jVarLocalBranchName);
    let LocalFilterScanedQrData = ScanedQrCodeData.filter(e => e.FactorySelected == jVarLocalBranchName);

    let LocalFilterScanedData = jFLocalFilerFunc({ inQrCodeData: LocalFilterQrCodeData, ScanedQrCodeData: LocalFilterScanedQrData })
    if ((LocalFilterScanedData.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });
    let LocalArrayReverseData = LocalFilterScanedData.slice().reverse();
    console.log("LocalArrayReverseData:", LocalArrayReverseData);

    jFLocalHideSpinner();
    var $table = $('#table');

    $table.bootstrapTable("load", LocalArrayReverseData);

};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

const jFLocalFilerFunc = ({ inQrCodeData, ScanedQrCodeData }) => {
    console.log("inQrCodeData:", inQrCodeData, ScanedQrCodeData);

    let StatusData = inQrCodeData.map(element => {
        element.Status = false
        element.TimeSpan="NoDate"
        let someData = ScanedQrCodeData.filter(e => {
            element.VoucherNumber = e.VoucherNumber;
            element.DCFactory = e.DCFactory;
            element.OrderNumber = e.OrderNumber;
            element.OrderDate = e.OrderDate;
            element.DeliveryDate = e.DeliveryDate;
            if (e.QrCodeId == element.QrCodeId) {
                element.Status = "Scaned"
               
                element.TimeSpan = jFLocalKInterval({ inCurrentdateandtime: e.DateTime });

                return element;
            }
        });
        return element;
    });
    return StatusData

};

let jFLocalKInterval = ({ inCurrentdateandtime }) => {
    if (inCurrentdateandtime === undefined) {
        return "";
    }
    var diffMs = (new Date() - new Date(inCurrentdateandtime)); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...";

    // console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...");
};
export { StartFunc }