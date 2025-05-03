// importando axios
import axios from 'axios';

// importando dotenv
// import dotenv from 'dotenv';  

// Criando uma const que exporta a base do axios
export const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    // headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/vnd.github.v3+json',
    // },
})

