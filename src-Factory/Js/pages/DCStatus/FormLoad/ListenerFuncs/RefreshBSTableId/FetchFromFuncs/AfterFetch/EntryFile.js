let StartFunc = async ({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;

    var $table = $('#table');
    $table.bootstrapTable("load", jVarLocalDataToShow);

};

export { StartFunc }