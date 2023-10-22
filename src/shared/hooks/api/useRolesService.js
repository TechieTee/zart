import api from '../../Backend'
import { useMutation, useQuery } from "react-query";
import { ApiEndpoints } from 'src/config/Endpoints';
import { queryKeys } from 'src/config/Config';


async function fetchApplications(){
    const response = await api.get(ApiEndpoints.FETCH_APPLICATIONS);
    return response
}

async function fetchApplicationRoles({queryKey}){
    const [, { id }] = queryKey;
    const response = await api.get(ApiEndpoints.FETCH_APPLICATION_ROLES(id));
    return response
}

async function createRole(data){
    const {applicationId} = data
    const response = await api.post(ApiEndpoints.CREATE_ROLE(applicationId), data);
    return response
}

async function updateRole(data){
    const {applicationId, roleId} = data
    const response = await api.put(ApiEndpoints.UPDATE___DELETE_ROLE(applicationId, roleId), data);
    return response
}

async function deleteRole(data){
    const {applicationId, roleId} = data
    const response = await api.delete(ApiEndpoints.UPDATE___DELETE_ROLE(applicationId, roleId), data);
    return response
}

async function fetchPermissions(){
    const response = await api.get(ApiEndpoints.FETCH_PERMISSIONS());
    return response
}

async function createAsset(data){
    const response = await api.post(ApiEndpoints.CREATE_ASSET, data);
    return response
}

async function assignPermissionRole(data){
    const [applicationId, roleId, payload] = data
    const response = await api.post(ApiEndpoints.ASSIGN_PERMISSIONS_ROLE(applicationId, roleId), payload);
    return response
}

async function fetchPrincipalsInRole({queryKey}){
    const [, { id, roleId }] = queryKey;
    const response = await api.get(ApiEndpoints.FETCH_PRINCIPALS_IN_ROLE(id, roleId));
    return response
}

async function fetchApplicationAssetTypes({queryKey}){
    const [, { id }] = queryKey;
    const response = await api.get(ApiEndpoints.FETCH_APPLICAION_ASSET_TYPES(id));
    return response
}

async function fetchAssetsPermissionsInRole({queryKey}){
    const [, { id }] = queryKey;
    const response = await api.get(ApiEndpoints.FETCH_ASSETS_PERMISSIONS_ROLE(id));
    return response
}

async function assignRoleToPrincipal(data){
    const response = await api.post(ApiEndpoints.ASSIGN_ROLE_PRINCIPAL, data);
    return response
}

export default {
    useFetchApplications : (...args) => useQuery(queryKeys.appRoles, fetchApplications, ...args),
    useFetchApplicationRoles : (id) => useQuery([queryKeys.appRoles, {id}], fetchApplicationRoles, {enabled: !!id }),
    useCreateRole : (...args) => useMutation(createRole, ...args),
    useUpdateRole : (...args) => useMutation(updateRole, ...args),
    useDeleteRole : (...args) => useMutation(deleteRole, ...args),
    useFetchPermissions : (...args) => useQuery(queryKeys.permission, fetchPermissions, ...args),
    useCreateAsset : (...args) => useMutation(createAsset, ...args),
    useAssignPermissionRole : (...args) => useMutation(assignPermissionRole, ...args),
    useFetchPrincipalsInRole : (id, roleId, ...args) => useQuery([queryKeys.rolePrincipals, {id, roleId}], fetchPrincipalsInRole, ...args),
    useFetchApplicationAssetTypes: (id, ...args) => useQuery([queryKeys.applicationAssetType, {id}], fetchApplicationAssetTypes, ...args),
    useFetchAssetsPermissionsInRole: (id, ...args) => useQuery([queryKeys.rolesAssets, {id}], fetchAssetsPermissionsInRole, ...args),
    useCreatePrincipalAssignment : (...args) => useMutation(assignRoleToPrincipal, ...args),
}

