import {run} from './partialFunctions'

let isInAnyEdge = (node, edges) => {
    for (let edge of edges) {
    if(edge.includes(node.id))
        return true;
    }
    return false;
};
export const colourNodes = ({nodes, edges, max_time}) => {
    let graph = [];
    for (let edge of edges) {
        graph.push(edge.source + edge.target + edge.timeToTraverse);
    }
    let hasFireStation = [];
    let noFireStation = [];

    for (let node of nodes) {
        if(!isInAnyEdge(node,graph)){
            continue;
        }
        if (node.firefighters) {
            hasFireStation.push(node.id)
        }
        else {
            noFireStation.push(node.id)
        }
    }
    let citiesThatCanBeReached = [];
    let citiesThatCannotBeReached = [];
    for (let element of noFireStation) {
        let arr = Array.of();
        for (let secondElement of hasFireStation) {
            arr.push(run(graph, element, secondElement))
        }
        if (Math.min(...arr) <= max_time) {
            citiesThatCanBeReached.push(element);
        }
        else {
            citiesThatCannotBeReached.push(element);
        }
    }

    return {
        citiesThatCanBeReached: citiesThatCanBeReached,
        citiesThatCannotBeReached: citiesThatCannotBeReached,
    };
};
