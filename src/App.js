import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import RightContainer from './components/RightContainer/RightContainer'
import LeftContainer from './components/LeftContainer/LeftContainer'
class App extends Component {
    render() {
        return (
            <div id="container-fluid">
                <div className={'row'} >
                    <div className={'col-6'} >
                        <LeftContainer/>
                    </div>
                    <div className={'col'}>
                        <RightContainer/>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        state : state,
    };
}
export default connect(mapStateToProps)(App);
