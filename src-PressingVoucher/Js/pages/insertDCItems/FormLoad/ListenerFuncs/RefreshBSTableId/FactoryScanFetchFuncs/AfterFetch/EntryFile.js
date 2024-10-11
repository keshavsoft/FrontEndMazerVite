let StartFunc = ({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;
    jFLocalHideSpinner();

    var $table = $('#table');
    $table.bootstrapTable("load", jVarLocalDataToShow);
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

export { StartFunc }