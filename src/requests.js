import axios from 'axios';

const ACCESS_TOKEN = 2065705510271503;

export const getBasicHeroInfoById = async (id) => {
    const { data:powerStats } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/powerstats`);
    const { data:image } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/image`);
    return { name:powerStats.name, powerStats, imgUrl:image.url, id:powerStats.id }
}

export const searchHeroesByName = async (name) => {
    return axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/search/${name}`);
}

export const getTotalHeroInfoById = async (id) => {
   return await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}`);
}