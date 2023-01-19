import React from 'react'
import photo1 from '../../assets/img/NikeShoes.jpg'
import SVG from './SVG_6'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

export default class SVG_Product extends React.Component {
    state = {
        showSVG: false,
        top: '0px',
        left: '0px',
        height: '0px',
        width: '0px',
        image_position: {},
        draggable: false,
        product: {
            image: photo1,
            brand_name: 'Brand Name',
            product_name: 'Product Name',
            price: '20',
            shipping: 'Free Shipping'
        }
    }

    setDraggableTrue = (e) => {
        e.preventDefault()
        this.setState(() => ({ draggable: true }))
    }

    setDraggableFalse = (e) => {
        e.preventDefault()
        setTimeout(() => {
            this.setState(() => ({ draggable: false }))
        }, 0.1);
    }

    handleShowSVG = () => {
        this.setState(() => ({ showSVG: true }))
    }

    handleHideSVG = () => {
        this.setState(() => ({ showSVG: false }))
    }

    handleRightClick = (e) => {
        e.preventDefault()

        let left = document.getElementById("product" + this.props.id).getBoundingClientRect().left
        let top = document.getElementById("product" + this.props.id).getBoundingClientRect().top
        let height = document.getElementById("product" + this.props.id).getBoundingClientRect().height
        let width = document.getElementById("product" + this.props.id).getBoundingClientRect().width

        this.setState(() => ({ top, left, height, width }))
        this.setState(() => ({ showSVG: true }))

    }

    render() {
        return (
            <div>
                {this.state.showSVG && <SVG new_id={"SVG" + this.props.id}  {...this.state} handleShowSVG={this.handleShowSVG} handleHideSVG={this.handleHideSVG} product={this.state.product} />}
                <div className="product-wrapper" onContextMenu={this.handleRightClick} id={"product" + this.props.id}>

                    {
                        this.state.draggable &&
                        <div onMouseUp={this.setDraggableFalse}>
                            <DragDropContainer
                                dragData="drag data"
                                targetKey="foo"
                            >
                                <img src={this.state.product.image} width="200px" height="220px" />
                            </DragDropContainer>

                        </div>
                    }
                    {
                        !this.state.draggable &&
                        <img src={this.state.product.image} width="200px" height="220px" onPointerEnter={this.setDraggableTrue} onPointerLeave={this.setDraggableFalse} />
                    }

                    {
                        this.state.draggable &&
                        <div onMouseUp={this.setDraggableFalse}>
                            <DragDropContainer
                                dragData="drag data"
                                targetKey="foo"
                            >
                                <p className="brandname">{this.state.product.brand_name}</p>
                            </DragDropContainer>
                        </div>
                    }

                    {
                        !this.state.draggable &&
                        <div onPointerEnter={this.setDraggableTrue} onPointerLeave={this.setDraggableFalse}>
                            <p className="brandname">{this.state.product.brand_name}</p>
                        </div>
                    }

                    <center><p >{this.state.product.product_name}</p></center>
                    <p> <b>${this.state.product.price} </b></p>
                    <p>{this.state.product.shipping}</p>
                </div>
            </div>
        )
    }
}