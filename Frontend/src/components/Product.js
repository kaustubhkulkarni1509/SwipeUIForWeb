import React, { useState } from 'react'
import WeaponWheel from './weaponwheel'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container'

const Product = (props) => {

    const [wheelVisible, setWheelVisible] = useState(false)
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)
    const [bottom, setBottom] = useState(0)
    const handleMouseOver = (e) => {
        e.preventDefault()
      
        setWheelVisible(true)
    }

    const handleMouseOut = (e) => {
        e.preventDefault()
        setWheelVisible(false)
    }

  

    return (
        <div>
            <DragDropContainer targetKey="foo1"
            >
                <div className="product" id={props.id} onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}>

                </div>
            </DragDropContainer>

            
            {setWheelVisible && <WeaponWheel/>}

        </div>
    )
}

export default Product