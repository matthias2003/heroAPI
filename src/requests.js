import axios from 'axios';

const ACCESS_TOKEN = 2065705510271503;

export const getBasicHeroInfoById = async (id) => {
    const { data:powerstats } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/powerstats`);
    const { data:image } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/image`);
    return { name:powerstats.name, powerstats, imgUrl:image.url, id:powerstats.id }
}

export const searchHeroesByName = async (name) => {
    return axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/search/${name}`);
}

export const getTotalHeroInfoById = async (id) => {
    const { data } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}`);
    return data;
}