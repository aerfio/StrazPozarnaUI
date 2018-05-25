import React from 'react';
import AddNodeButton from './AddNodeButton/AddNodeButton'
import AddEdge from './AddEdge/AddEdge'
import Legend from './Legend/Legend'
import SetMaximumTravelTime from './SetMaximumTravelTime/SetMaximumTravelTime'
import {connect} from 'react-redux'
import SetNodeColour from './SetNodesColour/SetNodesColour'
import LoadNewStateFromFile from './LoadNewStateFromFile/LoadNewStateFromFile'


class RightContainer extends React.Component {

    render() {
        return (
            <div>
                <Legend/>
                <AddNodeButton/>
                <AddEdge/>
                <SetMaximumTravelTime/>
                <SetNodeColour/>
                <LoadNewStateFromFile/>
                <div> {this.props.data.edges.map(({source, target, timeToTraverse}, index) => {
                        return <h5 key={index}>{
                            <b>{parseInt(index, 10) + 1}: </b>}{timeToTraverse + ' units of time are needed to travel from city ' + source + ' to city ' + target}</h5>
                    }
                )}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state,
    };
}

export default connect(mapStateToProps)(RightContainer);
