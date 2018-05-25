import React from 'react';
import {connect} from 'react-redux'
import {addNode} from '../../../actions/actions'
import './AddNodeButton.css'
import store from '../../../store'
import {convertToNumberingScheme} from "../../../helperFunctions/namingCities";

class AddNodeButton extends React.Component {
    handleInputChange = (event) => {
        const value = event.target.checked;
        this.setState({
            cityHasFirefightersStation: value
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            cityHasFirefightersStation: false
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-center" id={'addCityContainer'}>
                <div>
                    <button type="button" className="btn btn-danger" onClick={() => {
                        store.dispatch(addNode(this.state.cityHasFirefightersStation));
                        this.setState({cityHasFirefightersStation : false})
                    }}>Add City: {convertToNumberingScheme(this.props.data)}
                    </button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className={'checkboxContainer'}>
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.cityHasFirefightersStation}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <h5>Does city have firefighters station?</h5>
                    </div>

                </div>
            </div>
        );
    }

}
function mapStateToProps(state) {
    return {
        data : state.nodes.length+1,
    };
}

export default connect(mapStateToProps)(AddNodeButton);
