import api from '../../Backend'
import { useQuery } from "react-query";
import { ApiEndpoints } from 'src/config/Endpoints';
import { queryKeys } from 'src/config/Config';


async function fetchPrincipals(){
    const response = await api.get(ApiEndpoints.FETCH_PRINCIPALS(100));
    return response
}

async function fetchPrincipalsDirectory(){
    const response = await api.get(ApiEndpoints.FETCH_PRINCIPALS_DIRECTORY());
    return response
}

async function fetchPrincipalById({queryKey}){
    const [, { id }] = queryKey;
    const response = await api.get(ApiEndpoints.FETCH_PRINCIPAL_BY_ID(id));
    return response
}




// async function fetchPrincipalById({queryKey}){
//     const [, {id}] = queryKey
//     const response = await api.get(ApiEndpoints.FETCH_PRINCIPAL(id));
//     return response
//}


export default {
    useFetchPrincipals : (...args) => useQuery(queryKeys.principals, fetchPrincipals, ...args),
    useFetchPrincipalsDirectory : (...args) => useQuery(queryKeys.principalsDirectory, fetchPrincipalsDirectory, ...args),
    useFetchPrincipalById : (id, ...args) => useQuery([queryKeys.principals, {id}], fetchPrincipalById, ...args),
    
}

