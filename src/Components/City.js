import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Weather from './Weather';

const axios = require('axios').default;


class City extends Component {
   constructor(props) {
      super(props);
      this.state = {
        searchQuery: '',
        location: '',
        show: 'none',
        icon: '',
        mapImage: '',
        errorMessage: '',
        showAlert: false,
        weather: []
      }
   }

  handleCitySearch = (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    axios.get(url).then(
      response => {
        console.log(url);
        let obj = response.data[0];
        this.setState({
          show: 'show',
          location: obj.display_name,
          lat: obj.lat,
          lon: obj.lon,
          icon: obj.icon,
          mapImage: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${obj.lat},${obj.lon}&zoom=12&size=400x400&format=png`
        })
      })
      .catch((error) => {
        const errorMessage = `${error.response.data.error}. ${error.message} (${error.code}).`;
        this.setState({showAlert: true, errorMessage: errorMessage})
      })
  }

  handleWeather = (searchQuery, lat, lon) => {
    searchQuery.preventDefault();
    const url = `http://localhost:3001/weather?city_name=${this.state.searchQuery}&lat=${this.state.lat}&lon=${this.state.lon}`;
    axios.get(url).then(
      response => {
        console.log(response, 'response');
        this.setState({
          weather: response.data,
        })
      })
      .catch((error) => {
        const errorMessage = `${error.response.data.error}. ${error.message} (${error.code}).`;
        this.setState({showAlert: true, errorMessage: errorMessage})
      })
  }

   handleChange = (e) => {
    let { value } = e.target;
    value.toLowerCase();
    this.setState({ searchQuery: value })
    console.log(value);
   }

   render() {
    return (
      <Container className='searchAndCard'>
        <Form onSubmit = {this.handleCitySearch} className='search'>
          <Form.Control type='text' onChange={this.handleChange} placeholder='Input city name' />
          <Button type='submit' className='submit'>Explore!</Button>
        </Form>
        <Card className='mapCard' style={{ width: '40rem'}}>
          <Card.Img variant ="top" src={this.state.mapImage} />
          <Card.Body>
            <Card.Title>{this.state.location}</Card.Title>
            <div className='latlon'>
              <Card.Text>Latitude: {this.state.lat}</Card.Text>
              <Card.Text>Longitude: {this.state.lon}</Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Weather weather={this.state.weather}/>
            <Form onSubmit = {this.handleWeather}>
                <Button type='submit' className='submit'>Weather!</Button>
            </Form>
        <Alert show={this.state.showAlert} variant="danger" onClose={() => this.setState({ showAlert: false })} dismissible>
          <Alert.Heading>
            Please check your spelling and try again!
          </Alert.Heading>
          {this.state.errorMessage}
        </Alert>
      </Container>
    )
   }
}

export default City;