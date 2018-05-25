import {createStore} from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer,{
    nodes: [{
        id: "A", label: "A", size: 1,
        color: '#1ecc19',firefighters: true
    }, {
        id: "B", label: "B", size: 1,
        color: 'red',firefighters: false
    }],
    edges: [{id: "e1", source: "A", target: "B", timeToTraverse:5},],
    max_time:10,
    key:1
});
export default store;