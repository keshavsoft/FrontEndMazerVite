import urlJson from '../../../../url.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalBranchName = localStorage.getItem('BranchName');
     
    let response = await fetch(urlJson.Url);
    
    return await response;
};

export { StartFunc };