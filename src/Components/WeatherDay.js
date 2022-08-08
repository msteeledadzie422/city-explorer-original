import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class WeatherDay extends Component{
    render(){
        return(
            <ListGroup.Item style={{backgroundColor: "lightgrey"}}>
                <h4 style={{fontWeight: "bold"}}>{this.props.date}</h4>
                <p style={{fontWeight: "bold"}}>{this.props.description}</p>
            </ListGroup.Item>
        )
    }
}

export default WeatherDay;