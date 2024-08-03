import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalTableName = ConfigJson.tableName;
    let jVarLocalRoutePath = ConfigJson.routePath;

    let jVarLocalFetchUrl = `/${jVarLocalRoutePath}/${jVarLocalTableName}/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

