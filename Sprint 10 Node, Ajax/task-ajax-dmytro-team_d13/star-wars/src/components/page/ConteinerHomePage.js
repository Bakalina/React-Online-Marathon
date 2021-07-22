import React from "react";
import HomePage from "./homePage";
import {usersAPI} from "../../services/sw-service";


class ConteinerHomePage extends React.Component {
    state = {
        counter: 1,
        person: null,
        imgPerson: null,
};
    componentDidMount() {
        usersAPI.getPersonInfo(this.state.counter)
            .then(({name ,eye_color, gender, birth_year}) => {
            this.setState((state) => ({
                person: {name, eye_color, gender, birth_year},
                counter: state.counter + 1
            }));
        })
        usersAPI.getPersonIMG(this.state.counter)
            .then((data) => {
                this.setState(() => ({
                    imgPerson: data,
                }));
            })
    }
    handleNext = () => {
        usersAPI.getPersonInfo(this.state.counter)
            .then(({name ,eye_color, films, gender, birth_year, url}) => {
                this.setState((state) => ({
                    person: {name, eye_color, films, gender, birth_year},
                    counter: state.counter + 1
                }));
            })
            .catch(error => {
                console.log(error);
                this.setState((state) => ({
                    counter: state.counter + 1
                }));
            });
        usersAPI.getPersonIMG(this.state.counter)
            .then((data) => {
                this.setState(() => ({
                    imgPerson: data,
                }));
            })
    };

    render = () => {
        return (
            <HomePage data={this.state} handleNext={this.handleNext}/>
        )
    }

};

export default ConteinerHomePage;