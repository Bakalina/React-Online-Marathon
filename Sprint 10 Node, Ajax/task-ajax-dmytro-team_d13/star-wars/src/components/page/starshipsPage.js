import React from "react";
import {Button, Card} from "react-bootstrap";
import Preloader from "../../common/Preloader";
import noImg from "../../assets/noImg.jpg"


function StarshipsPage(props) {

    const [visible, setVisible] = React.useState(false);

    if (!props.data.star || !props.data.imgStarShip) {
        return <div className={`text-center`}>
            <Preloader/>
        </div>
    }
    const {name, manufacturer, model, max_atmosphering_speed} = props.data.star;

    return (
        <Card style={{width: '25rem'}} bg={'secondary'} text={'white'}>
            <Button disabled={visible} variant="secondary" onClick={() => props.handleNext()}>Next</Button>
            <Card.Img variant="top" src={props.data.error ? noImg : `${props.data.imgStarShip}`}/>
            <Card.Body>
                <Card.Title>
                    <h3>{name}</h3>
                </Card.Title>
                <Card.Text>Model: {model}</Card.Text>
                <Card.Text>Manufacturer: {manufacturer}</Card.Text>
                <Card.Text>Max_atmosphering_speed: {max_atmosphering_speed}</Card.Text>
            </Card.Body>
        </Card>
    )
};

export default StarshipsPage;