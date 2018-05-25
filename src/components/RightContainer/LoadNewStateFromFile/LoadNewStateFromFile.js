import React from 'react';
import {connect} from 'react-redux'
import {getNewState} from '../../../actions/actions'
import store from '../../../store'

class LoadNewStateFromFile extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        reader.onload = function () {
            let text = reader.result;
            store.dispatch(getNewState(JSON.parse(text)));
        };
        try{
            reader.readAsText(this.fileInput.files[0]);
        }
        catch(err){
            console.log(err);
        }
    };

    render() {
        return (
            <div className="d-flex">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Upload file:
                        <input
                            type="file"
                            accept=".txt,.json"
                            className="form-control-file" id="exampleFormControlFile1"
                            ref={input => {
                                this.fileInput = input;
                            }}
                        />
                    </label>
                    <br/>
                    <button type="submit">Load graph from file</button>
                </div>
            </form>
        </div>)
    }
}

export default connect()(LoadNewStateFromFile);