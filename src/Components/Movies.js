import { Component } from "react";
import Row from 'react-bootstrap/Row';
import Movie from "./Movie";


class Movies extends Component{
    render(){
        return(
            <Row sm={1} md={2} lg={3} xl={4} xxl={5}>
                {this.props.movies.map(mov => 
                    <Movie key={mov.title + mov.image_url} mov={mov}/>
                )}
            </Row>
        )
    }
}

export default Movies;