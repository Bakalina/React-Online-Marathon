import * as axios from "axios";

let instance = axios.create({
    baseURL: "https://swapi.dev/api/"
});

export const usersAPI = {
    getPersonInfo(counter) {
        counter = (!counter? 1 : counter);
        return instance.get(`people/${counter}`)
            .then((res) => res.data)
            .catch(error => error.message());
    },
    getPersonIMG(counter) {
        counter = (!counter? 1 : counter);
        return axios.get(`https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`)
            .then((res) => res.config.url)
            .catch(error => error.message);
    },
};

export const planetsAPI = {
    getPlanetsInfo(counter) {
        counter = (!counter? 1 : counter);
        return instance.get(`planets/${counter}`)
            .then((res) => res.data);
    },
    getPlanetIMG(counter) {
        counter = (!counter? 1 : counter);
        return axios.get(`https://starwars-visualguide.com/assets/img/planets/${counter}.jpg`)
            .then((res) => res.config.url)
            .catch(error => error);
    },
};

export const starShipsAPI = {
    getStarShipsInfo(counter) {
        counter = (!counter? 1 : counter);
        return instance.get(`starships/${counter}`)
            .then((res) => res.data);
    },
    getStarShipIMG(counter) {
        counter = (!counter? 1 : counter);
        return axios.get(`https://starwars-visualguide.com/assets/img/starships/${counter}.jpg`)
            .then((res) => res.config.url)
            .catch(error => error.message);
    },
};
