import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import '../assets/css/style.css'

export default class draganddrop extends React.Component {
    state = {
        productID: 100,
        dislike: false,
        like: false
    }


    handleHit1 = (event) => {

        this.setState(() => ({ dislike: true, like: false }))
    }

    handleHit2 = (event) => {

        this.setState(() => ({ like: true, dislike: false }))
    }
    render() {
        return (
            <div>
                {this.state.dislike && <p>Item is disliked</p>}
                {this.state.like && <p>Item is liked</p>}
                <DragDropContainer
                    dragData={this.state.productID}

                    targetKey="foo"
                >
                    <div style={{ }}>Drag Me!</div>
                </DragDropContainer>

                <DropTarget
                    targetKey="foo"

                    onHit={this.handleHit1}
                >
                    <div style={{ backgroundColor: 'red' }}>
                        <p>Dislike</p>
                    </div>

                </DropTarget>

                <DropTarget
                    targetKey="foo"
                    onHit={this.handleHit2}
                >
                    <div style={{ backgroundColor: 'green' }}>
                        <p>Like</p>
                    </div>

                </DropTarget>
            
                <div className="main-wrapper">
                    <div className="container container-1">

                    </div>

                    <div className="container container-2">
                        
                    </div>

                    <div className="container container-3">
                        
                    </div>

                    <div className="container container-4">
                        
                    </div>

                    <div className="container container-5">
                        
                    </div>
                </div>
            </div>
        )
    }
}