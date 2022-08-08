import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';


class Movies extends Component{
    render(){
        return(
            <Carousel >
                {this.props.movies.map(mov => 
                    <Carousel.Item key={mov.title + mov.image_url} style={{backgroundColor: "black"}}>
                        <img src={mov.image_url} alt={mov.title + ' poster'} style={{width: "100%", maxHeight: "50vh", opacity: "0.3"}} />
                        <Carousel.Caption>
                            <h3 style={{fontWeight: "bold", fontSize: "150%"}}>{mov.title}</h3>
                            <h4 style={{fontWeight: "bold", fontSize: "150%"}}>Released: {mov.released_on}</h4>
                            <p style={{fontWeight: "bold", fontSize: "150%"}}>{mov.overview}</p>
                            <p style={{fontWeight: "bold", fontSize: "150%"}}>Popularity: {mov.popularity}. Avg Vote: {mov.average_votes}. Total Votes: {mov.total_votes}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        )
    }
}

export default Movies;