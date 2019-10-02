import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



class App extends React.Component {
    constructor(props) {
        super(props)
        // this.state = { lat: 'loading', errorMessage: '' }
    }
    state = { lat: null, errorMessage: '' }
    componentDidMount() {

        //do this here, not inside construction
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: 'Geolocation services denied!' })
        )
    }



    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
        }
        return <div><Spinner /></div>
    }
}














ReactDOM.render(<App />, document.querySelector("#root"));