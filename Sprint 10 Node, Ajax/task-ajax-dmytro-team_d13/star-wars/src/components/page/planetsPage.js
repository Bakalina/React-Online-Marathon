import React from "react";
import {Button, Card} from "react-bootstrap";
import Preloader from "../../common/Preloader";
import noImg from "../../assets/noImg.jpg"



function PlanetsPage (props) {

    if (!props.data.planet || !props.data.imgPlanet) {
        return <div className={`text-center`}>
            <Preloader/>
        </div>
    }

    const {name, climate, terrain, population} = props.data.planet;

    return (
            <Card style={{width: '25rem'}} bg={'secondary'} text={'white'}>
                <Button  variant="secondary" onClick={() => props.handleNext()}>Next</Button>
                <Card.Img variant="top" src={ typeof props.data.imgPlanet === "object"? noImg : `${props.data.imgPlanet}`}/>
                <Card.Body>
                    <Card.Title>
                        <h3>{name}</h3>
                    </Card.Title>
                    <Card.Text>Climate: {climate}</Card.Text>
                    <Card.Text>Terrain: {terrain}</Card.Text>
                    <Card.Text>Population: {population}</Card.Text>
                </Card.Body>
            </Card>
    )
};

export default PlanetsPage;