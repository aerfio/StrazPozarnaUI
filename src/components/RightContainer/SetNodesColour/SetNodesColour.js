import React from 'react';
import {connect} from 'react-redux'
import {colourNodes} from '../../../actions/actions'
import store from '../../../store'
import './SetNodesColour.css'

class SetNodesColour extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center" id={'setNodeColourContainer'}>
                <button type="button" onClick={()=>store.dispatch(colourNodes())} className="btn btn-danger btn-block btn-lg">Colour Nodes Properly</button>
            </div>
        );
    }

}

export default connect()(SetNodesColour);
