import axios from 'axios';

const ACCESS_TOKEN = 2065705510271503;

export const getBasicHeroInfoById = async (id) => {
    const { data } = await axios.get(`https://hero-app-server-proxy.vercel.app`);
    return data;
}

export const searchHeroesByName = async (name) => {
    return axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/search/${name}`);
}

export const getTotalHeroInfoById = async (id) => {
    const { data } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}`);
    return data;
}