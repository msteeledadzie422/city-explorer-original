import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import WeatherDay from "./WeatherDay";

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
                    <WeatherDay 
                        date={element.date}
                        description={element.description}
                    />)}
            </ListGroup>
        );
    }
}

export default Weather;