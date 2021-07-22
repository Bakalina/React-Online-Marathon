import React from "react";
import Navigation from "../navigation";
import {Col, Container, Row} from "react-bootstrap";
import {Switch, Route} from "react-router-dom";
import ConteinerHomePage from "../page/ConteinerHomePage";
import ConteinerPlanetsPage from "../page/ConteinerPlanetsPage";
import ConteinerStarShipsPage from "../page/ConteinerStarShipsPage";


function App() {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={3}>
                        <Navigation/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-md-center">
                    <Switch>
                        <Route path="/starshipsPage">
                            <ConteinerStarShipsPage/>
                        </Route>
                        <Route path="/planetsPage">
                            <ConteinerPlanetsPage/>
                        </Route>
                        <Route path="/">
                            <ConteinerHomePage/>
                        </Route>
                    </Switch>
                </Row>
            </Container>
        </div>
    );
}

export default App;
