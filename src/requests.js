import axios from 'axios';


export const getBasicHeroInfoById = async (id) => {
    // const { data } = await axios.get(`https://hero-app-server-proxy.vercel.app`);
    const { data } = await axios.get(`http://127.0.0.1:3001`);
    return data;
}

export const searchHeroesByName = async (name) => {
    return axios.get(`http://127.0.0.1:3001/search/${name}`);
    // const { data } = await axios.get(`https://hero-app-server-proxy.vercel.app/search/${name}`);
    //return axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/search/${name}`);
}

export const getTotalHeroInfoById = async (id) => {
    const { data } = await axios.get(`http://127.0.0.1:3001/details/${id}`);
    //const { data } = await axios.get(`https://hero-app-server-proxy.vercel.app/details/${name}`)
    return data;
}