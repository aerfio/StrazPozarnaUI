import React from 'react';
import {connect} from 'react-redux'
import Graph from './Graph/Graph'
import './LeftContainer.css'
class LeftContainer extends React.Component {
    render() {
        return (
            <div id={'leftContainer'}>
                <Graph graphData={this.props.state}/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        state : state,
    };
}
export default connect(mapStateToProps)(LeftContainer);
