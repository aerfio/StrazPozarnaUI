export const addNode = (firefighters) => ({
    type: 'ADD_CITY',
    firefighters: firefighters,
});
export const addEdge = (source, target, timeToTraverse) => ({
    type: 'ADD_OR_UPDATE_EDGE',
    source: source,
    target: target,
    timeToTraverse: timeToTraverse
});
export const changeMaxTime = (time) => ({
    type: 'CHANGE_TIME',
    time: time,
});
export const colourNodes = () => ({
    type: 'COLOUR_NODES',
});
export const getNewState = (state) => ({
    type: 'GET_NEW_STATE',
    state: state,
});
