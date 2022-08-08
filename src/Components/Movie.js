import { Component } from "react";
import { Card } from "react-bootstrap";

class Movie extends Component{
    render(){
        return(
            <Card className="bg-dark text-white" style={{overflowY: "scroll"}}>
                <Card.Img src={this.props.mov.image_url} alt={`${this.props.mov.title} poster`} style={{maxWidth: "100%", opacity: "0.3"}}/>
                <Card.ImgOverlay style={{margin: "0.2rem"}}>
                    <Card.Title>{this.props.mov.title}</Card.Title>
                    <Card.Text>Released: {this.props.mov.released_on}</Card.Text>
                    <Card.Text>{this.props.mov.overview}</Card.Text>
                    <Card.Text>
                        Popularity: {this.props.mov.popularity}. 
                        Avg Vote: {this.props.mov.average_votes}. 
                        Total Votes: {this.props.mov.total_votes}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export default Movie;