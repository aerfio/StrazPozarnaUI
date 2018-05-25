import {colourNodes} from './algorithm/DijkstraAlgorithm'
import {convertToNumberingScheme} from "../helperFunctions/namingCities";

const rootReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            let graph = Object.assign({}, state);
            let hasFireStation = action.firefighters;
            graph.nodes.push({
                id: convertToNumberingScheme(graph.nodes.length+1),
                label: convertToNumberingScheme(graph.nodes.length+1),
                size: 1,
                firefighters: action.firefighters,
                color: hasFireStation ? '#1ecc19' : 'red',

            });
            return graph;
        }
        case 'ADD_OR_UPDATE_EDGE': {
            let graph = Object.assign({}, state);
            let isThereAlreadySuchAnEdge = false;
            graph.edges.forEach(({source, target}) => {
                if ((source === action.source && target === action.target) || (source === action.target && target === action.source)) {
                    isThereAlreadySuchAnEdge = true;
                }
            });
            if (isThereAlreadySuchAnEdge) {
                graph.edges.find(({source, target}) => {
                    return (source === action.source && target === action.target) || (source === action.target && target === action.source)
                }).timeToTraverse = action.timeToTraverse;
            }
            else {
                graph.edges.push({
                    id: 'e' + (parseInt(graph.edges[graph.edges.length - 1].id.substring(1), 10) + 1),
                    source: action.source,
                    target: action.target,
                    timeToTraverse: action.timeToTraverse
                });
            }
            return graph;
        }
        case 'CHANGE_TIME': {
            let graph = Object.assign({}, state);
            graph.max_time = action.time;
            graph.key++;
            return graph;
        }
        case 'COLOUR_NODES': {
            let graph = Object.assign({}, state);
            let unColouredNodes=colourNodes(state);
            let redCities=unColouredNodes.citiesThatCannotBeReached;
            let blackCities=unColouredNodes.citiesThatCanBeReached;
            for(let element of redCities){
                graph.nodes.find(e=>{
                    return e.id===element
                }).color='red';
            }
            for(let element of blackCities){
                graph.nodes.find(e=>{
                    return e.id===element
                }).color='#000';
            }

            return graph;
        }
        case 'GET_NEW_STATE':{
            return Object.assign({},action.state);
        }
        default:
            return state
    }
};

export default rootReducer;
