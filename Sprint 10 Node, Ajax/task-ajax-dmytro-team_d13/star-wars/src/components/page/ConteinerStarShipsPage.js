import React from "react";
import {starShipsAPI} from "../../services/sw-service";
import StarshipsPage from "./starshipsPage";


class ConteinerStarShipsPage extends React.Component {
    state = {
        counter: 2,
        star: null,
        imgStarShip: null,
        error: false,
};
    componentDidMount() {
        starShipsAPI.getStarShipsInfo(this.state.counter)
            .then(({name, manufacturer, model, max_atmosphering_speed}) => {
            this.setState((state) => ({
                star: {name, manufacturer, model, max_atmosphering_speed},
                counter: state.counter + 1
            }));
        });
        starShipsAPI.getStarShipIMG(this.state.counter)
            .then((data) => {
                this.setState((state) => ({
                    imgStarShip: data,
                    error: false,
                }))
                .catch(error => {
                        this.setState(() => ({
                            error: true,
                        }));
                 });
            })
            .catch(error => {
                this.setState((state) => ({
                    counter: state.counter + 1,
                    error: true,
                }))
            });
    }

    handleNext = () => {
        starShipsAPI.getStarShipsInfo(this.state.counter)
            .then(({name, manufacturer, model, max_atmosphering_speed}) => {
                this.setState((state) => ({
                    star: {name, manufacturer, model, max_atmosphering_speed},
                    counter: state.counter + 1,
                    error: false,
                }));
            })
            .catch(error => {
                this.setState((state) => ({
                    counter: state.counter + 1,
                    error: true,
                }))
            });

        starShipsAPI.getStarShipIMG(this.state.counter)
            .then((data) => {
                this.setState(() => ({
                    imgStarShip: data,
                    error: false,
                }));
            }).catch(error => {
            this.setState(() => ({
                error: true,
            }));
        })
    };

    render = () => {
        return (
            <StarshipsPage data={this.state} handleNext={this.handleNext}/>
        )
    }

};

export default ConteinerStarShipsPage;