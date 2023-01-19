import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import ModifiedWheel from './ModifiedWheel'

export default class Products extends React.Component {
    render() {
        return (
            <div className="products-page-wrapper">
                <DropTarget
                    targetKey="bucket"
                    onHit={this.handleDislike}
                >
                    <div className="container container-1">
                        
                        
                        Dislike Bucket
                        
                        {/* {this.state.dislikedWords.map((dislikedWord, index) => <p key={index}>{dislikedWord}</p>)} */}
                    </div>
                </DropTarget>
                <div className="test">
                    <ModifiedWheel id="1" />

                    <ModifiedWheel id="2" />
                    <ModifiedWheel id="3" />
                    <ModifiedWheel id="4" />

                </div>
                <div className="test">
                    <ModifiedWheel id="5" />

                    <ModifiedWheel id="6" />
                    <ModifiedWheel id="7" />
                    <ModifiedWheel id="8" />

                </div>

                <DropTarget
                    targetKey="bucket"
                    onHit={this.handleDislike}
                >
                    <div className="container container-1">
                        
                        
                        Dislike Bucket
                        
                        {/* {this.state.dislikedWords.map((dislikedWord, index) => <p key={index}>{dislikedWord}</p>)} */}
                    </div>
                </DropTarget>
            </div>
        )
    }
}