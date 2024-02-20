import axios from 'axios';

export const getBasicHeroInfoById = async (id) => {
    const { data } = await axios.get(`https://hero-app-server-proxy.maciejkloda.pl`);
    return data;
}

export const searchHeroesByName = async (name) => {
    return axios.get(`https://hero-app-server-proxy.maciejkloda.pl/search/${name}`);
}

export const getTotalHeroInfoById = async (id) => {
    const { data } = await axios.get(`https://hero-app-server-proxy.maciejkloda.pl/details/${id}`)
    return data;
}