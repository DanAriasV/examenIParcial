import getEnvVars from "../../environment";
const {apiUrl} = getEnvVars();



const fetchRickMorty = async () => {

    const endpoint = `${apiUrl}i/?limit=150`;
    const response = await fetch(endpoint); 
    const data = await response.json();

    return data;
};

export default fetchRickMorty;