import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    var formData = new FormData(jVarLocalForm);

    let formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    KeysJson.body = JSON.stringify(formObject);

    return KeysJson;
};

export { StartFunc }