import React from "react";
import {planetsAPI} from "../../services/sw-service";
import PlanetsPage from "./planetsPage";


class ConteinerPlanetsPage extends React.Component {
    state = {
        counter: 2,
        planet: null,
        imgPlanet: null,
};
    componentDidMount() {
        planetsAPI.getPlanetsInfo(this.state.counter)
            .then(({name, climate, terrain, population}) => {
            this.setState((state) => ({
                planet: {name, climate, terrain, population},
                counter: state.counter + 1,
            }));
        });
        planetsAPI.getPlanetIMG(this.state.counter)
            .then((data) => {
            this.setState(() => ({
                imgPlanet: data,
            }));
        })
    }

    handleNext = () => {
        planetsAPI.getPlanetsInfo(this.state.counter)
            .then(({name, climate, terrain, population}) => {
                this.setState((state) => ({
                    planet: {name, climate, terrain, population},
                    counter: state.counter + 1,
                }));
            })
            .catch(() => {
            this.setState((state) => ({
                counter: state.counter + 1,
            }));
        });
        planetsAPI.getPlanetIMG(this.state.counter)
            .then((data) => {
                this.setState((state) => ({
                    imgPlanet: data,
                }));
            })
    };

    render = () => {
        return (
            <PlanetsPage data={this.state} handleNext={this.handleNext}/>
        )
    }
};

export default ConteinerPlanetsPage;