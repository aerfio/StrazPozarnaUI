import React from 'react';
import {connect} from 'react-redux'
import {changeMaxTime} from "../../../actions/actions";
import store from "../../../store";
import './SetMaximumTimeTravel.css'

class SetMaximumTravelTime extends React.Component {
    handleChange = (event) => {
        if (event.target.value < 0) {
            event.target.value = 0;
        }
        this.setState({inputValue: parseInt(event.target.value, 10)});
    };
    handleSubmit = (event) => {
        if (this.state.inputValue !== '') {
            store.dispatch(changeMaxTime(this.state.inputValue));
        }
        event.preventDefault();
    };

    constructor() {
        super();
        this.state = {
            text1: 'Select source node',
            inputValue: '',
        }
    }

    render() {
        return (
            <div id={'maxTimeContainer'}>
                <div className={'row justify-content-center'}>
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <div className="form-group mx-sm-3 mb-2">
                            <input type="number" className="form-control" id="inputPassword2"
                                   onChange={this.handleChange} min="1" max={Number.MAX_SAFE_INTEGER} value={this.state.inputValue}
                                   placeholder="Max travel time"/>
                        </div>
                        <button type="submit" disabled={this.state.text2 === 'Select target node'}
                                className="btn btn-danger mb-2">Change maximum travel time for firetrucks
                        </button>
                    </form>
                </div>

                <div className={'row justify-content-center'}>
                    <p>{'Current maximum travel time: ' + this.props.data.max_time}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state,
    };
}

export default connect(mapStateToProps)(SetMaximumTravelTime);