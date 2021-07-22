import React from "react";
import {Button, Card} from "react-bootstrap";
import Preloader from "../../common/Preloader";


function HomePage(props) {

    const visible = React.useState(false);

    if (!props.data.person || !props.data.imgPerson) {
        return <div className={`text-center`}>
            <Preloader/>
        </div>
    }

    console.log(props.data.imgPerson);
    const {name, eye_color, gender, birth_year} = props.data.person;


    return (
            <Card style={{width: '25rem'}} bg={'secondary'} text={'white'}>
                <Button variant="secondary" isabled={visible} onClick={() => props.handleNext()}>Next</Button>
                <Card.Img variant="top" src={`${props.data.imgPerson}`}/>
                <Card.Body>
                    <Card.Title>
                        <h3>{name}</h3>
                    </Card.Title>
                    <Card.Text>Gender: {gender}</Card.Text>
                    <Card.Text>Birth Year: {birth_year}</Card.Text>
                    <Card.Text>Eye color: {eye_color}</Card.Text>
                </Card.Body>
            </Card>
    )
};

export default HomePage;