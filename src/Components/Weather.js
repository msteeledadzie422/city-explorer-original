import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Weather extends Component{
    constructor(props){
        super(props);
        console.log(this.props.weather);
    }

    render(){
        return(
            <ListGroup numbered>
                <h2>Weather:</h2>
                {this.props.weather.map(element => 
                    <ListGroup.Item key={element.date}>
                        <p>Date: {element.date}</p> 
                        <p>Description: {element.description}</p>
                    </ListGroup.Item>
                )}
            </ListGroup>
        );
    }
}

export default Weather;