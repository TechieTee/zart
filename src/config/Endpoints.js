

export const BASE_URL = '/rest/';

export const ApiEndpoints = {
    // Principals
    FETCH_APPLICATIONS : `adminconsole/applications`,
    FETCH_APPLICATION_ROLES : (applicationId) => `adminconsole/application/${applicationId}/roles`,
    FETCH_PRINCIPALS: (limit=30) => `adminconsole/assignments?limit=${limit}`,
    FETCH_PRINCIPALS_DIRECTORY: (limit=1000) => `adminconsole/principals?limit=${limit}`,
    FETCH_PRINCIPAL_BY_ID: (prinicpalId) => `adminconsole/principals/${prinicpalId}`,

    // Roles
    CREATE_ROLE: (applicationId) => `adminconsole/application/${applicationId}/roles`,
    UPDATE___DELETE_ROLE: (applicationId, roleId) => `adminconsole/application/${applicationId}/roles/${roleId}`,
    CREATE_ASSET:`adminconsole/assets`,
    FETCH_PERMISSIONS: (assetTypeId=null) => `adminconsole/permissions`,
    ASSIGN_PERMISSIONS_ROLE: (applicationId, roleId) => `adminconsole/application/${applicationId}/roles/${roleId}/grant`,
    FETCH_PRINCIPALS_IN_ROLE: (applicationId, roleId) => `adminconsole/application/${applicationId}/roles/${roleId}/principals`,
    FETCH_APPLICAION_ASSET_TYPES: (applicationId) => `adminconsole/application/${applicationId}/assettypes`,
    FETCH_ASSETS_PERMISSIONS_ROLE: (roleId) => `adminconsole/roles/${roleId}`,
    ASSIGN_ROLE_PRINCIPAL:  `adminconsole/assignments`,

    //Configuration Service
    GET_ZONES: `configuration/zonalcommands`,
    GET_STATE_COMMAND: (zoneId, limit=1000) => `configuration/zonalcommands/${zoneId}/statecommands?limit=${limit}`,
    GET_AREA_COMMAND: (stateId) => `configuration/statecommands/${stateId}/areacommands`,
    GET_DIVISIONAL_COMMAND: (areaId) => `configuration/areacommands/${areaId}/divisionalcommands`,
    GET_STATION_COMMAND: (divisionId, limit=1000) => `configuration/divisionalcommands/${divisionId}/stations?limit=${limit}`,

    
    FETCH_PRINCIPAL: (id) => `adminconsole/principals/${id}`,

};


