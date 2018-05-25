import React from 'react'
import './Legend.css'
class Legend extends React.Component {

    render() {
        return (<div className="d-flex flex-column">
            <div className={'d-flex flex-row'}>
                <h5 id={'green'}>&#11044;</h5><h5> Green dots represent cities that have fire station</h5>
            </div>
            <div className={'d-flex flex-row'}>
                <h5 id={'black'}>&#11044;</h5><h5> Black dots represent cities that have no firestation, but firetruck can arrive there in time.</h5>
            </div>
            <div className={'d-flex flex-row'}>
                <h5 id={'red'}>&#11044;</h5><h5> Red dots represent cities that have no firestation and firetruck can not arrive there on time.</h5>
            </div>
        </div>)
    }
}

export default Legend;