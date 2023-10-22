import api from '../../Backend'
import { useQuery } from "react-query";
import { ApiEndpoints } from 'src/config/Endpoints';
import { queryKeys } from 'src/config/Config';


async function fetchZones(){
    const response = await api.get(ApiEndpoints.GET_ZONES);
    return response
}

async function fetchStateCommand({queryKey}){
    const [, { id }] = queryKey;
    const response = await api.get(ApiEndpoints.GET_STATE_COMMAND(id));
    return response
}

async function fetchAreaCommand({queryKey}){
    const [, { id }] = queryKey;
    const response = await api.get(ApiEndpoints.GET_AREA_COMMAND(id));
    return response
}

async function fetchDivisionCommand({queryKey}){
    const [, { id }] = queryKey;
    const response = await api.get(ApiEndpoints.GET_DIVISIONAL_COMMAND(id));
    return response
}

async function fetchStations({queryKey}){
    const [, { id }] = queryKey;
    const response = await api.get(ApiEndpoints.GET_STATION_COMMAND(id));
    return response
}


export default {
    useFetchZones : (...args) => useQuery(queryKeys.configuration.zones, fetchZones, ...args),
    useFetchStateCommand : (id, ...args) => useQuery([queryKeys.configuration.stateCommand, {id}], fetchStateCommand, ...args),
    useFetchAreaCommand : (id, ...args) => useQuery([queryKeys.configuration.areaCommand, {id}], fetchAreaCommand, ...args),
    useFetchDivisionalCommand : (id, ...args) => useQuery([queryKeys.configuration.division, {id}], fetchDivisionCommand, ...args),
    useFetchStationCommand : (id, ...args) => useQuery([queryKeys.configuration.station, {id}], fetchStations, ...args)
}

