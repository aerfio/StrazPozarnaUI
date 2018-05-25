import React, {Component} from 'react';
import {Sigma, RandomizeNodePositions, NOverlap, RelativeSize, EdgeShapes} from 'react-sigma';
import './Graph.css'
export default class Graph extends Component {
    render() {
        return (
            <div id={'graphContainer'}>
                <Sigma graph={this.props.graphData} style={{height:'100vh',width:'100%'}} key={Math.floor(Math.random() * 1000)} renderer={'canvas'} settings={{
                    labelThreshold: 0,
                    edgeColor: 'black',
                }}>
                    <NOverlap nodeMargin={2}/>
                    <EdgeShapes default="curve"/>
                    <RelativeSize initialSize={100}/>
                    <RandomizeNodePositions/>
                </Sigma>
            </div>

        );
    }
};