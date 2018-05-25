import React from 'react';
import {connect} from 'react-redux'
import {addEdge} from '../../../actions/actions'
import store from '../../../store'
import './AddEdge.css'

class AddEdge extends React.Component {
    handleChange = (event) => {
        if (event.target.value < 0) {
            event.target.value = 0;
        }
        this.setState({inputValue: parseInt(event.target.value, 10)});
    };
    handleSubmit = (event) => {
        if (this.state.inputValue !== '') {
            store.dispatch(addEdge(this.state.text1, this.state.text2, this.state.inputValue));
        }
        else {
            store.dispatch(addEdge(this.state.text1, this.state.text2, 5,));
        }
        event.preventDefault();
    };

    constructor() {
        super();
        this.state = {
            text1: 'Select source node',
            text2: 'Select target node',
            inputValue: '',
        }
    }

    render() {
        return (
            <div className="flex-column align-items-center targetSourceButtonsBar">

                <div className={'d-flex flex-column'}>
                    <div className="d-flex flex-row">
                        <div className="p-2 w-50 flex-column align-items-center">
                            <div className="d-flex justify-content-center">
                                <div className={'d-flex flex-column align-items-center'}>
                                    <p>Source</p>
                                    <div className="dropdown">
                                        <button className="btn btn-danger dropdown-toggle" type="button"
                                                id="dropdownMenuButton"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.state.text1}
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            {this.props.state.nodes.filter(({id}) => {
                                                return id !== this.state.text2
                                            }).map(({id}, index) => {
                                                return <a className="dropdown-item" key={index} onClick={() => {
                                                    this.setState({text1: id})
                                                }}>{id}</a>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 w-50 flex-column align-items-center">
                            <div className="d-flex justify-content-center">
                                <div className={'d-flex flex-column align-items-center'}>
                                    <p>Target</p>
                                    <div className="dropdown">
                                        <button className="btn btn-danger dropdown-toggle"
                                                disabled={this.state.text1 === 'Select source node'} type="button"
                                                id="dropdownMenuButton"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.state.text2}
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            {this.props.state.nodes.filter(({id}) => {
                                                return id !== this.state.text1
                                            }).map(({id}, index) => {
                                                return <a className="dropdown-item" key={index} onClick={() => {
                                                    this.setState({text2: id})
                                                }}>{id}</a>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row justify-content-center targetSourceButtonsBar'}>
                    <div className={'row justify-content-center'}>
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <div className="form-group mx-sm-3 mb-2">
                                <input type="number" className="form-control" id="inputPassword2"
                                       onChange={this.handleChange} min="1" max={Number.MAX_SAFE_INTEGER} value={this.state.inputValue}
                                       placeholder="Travel time (Default: 5)"/>
                            </div>
                            <button type="submit" disabled={this.state.text2 === 'Select target node'}
                                    className="btn btn-danger mb-2">Add/update edge
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state,
    };
}

export default connect(mapStateToProps)(AddEdge);
