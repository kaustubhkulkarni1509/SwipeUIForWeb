import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

export default class SingleProduct extends React.Component {
    render() {
        return (
            <div>

                <DragDropContainer
                    dragData="drag data"
                    targetKey="foo"
                >
                    <img src={this.props.product.image} width="200px" height="220px" />
                </DragDropContainer>

                <p className="brandname">{this.props.product.brand_name}</p>

                <center><p >{this.props.product.product_name}</p></center>

                <p> <b>${this.props.product.price}</b></p>
                <p>{this.props.product.shipping}</p>
            </div>
        )
    }
}