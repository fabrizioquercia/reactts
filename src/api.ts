// Url base delle chiamate API di SpaceX
const SPACEX_API_BASE_URL = "https://api.spacexdata.com/v3/";

let URI_CAPSULE_LIST = SPACEX_API_BASE_URL + 'capsules';

// Lista delle capsule/navicelle
export const getListaNavicelle = () => fetch(URI_CAPSULE_LIST);

// Chiama la lista delle
export async function getNavicelle() { 
    const call = await fetch(SPACEX_API_BASE_URL + 'capsules');
    const data = await call.json;
    return data;

};




