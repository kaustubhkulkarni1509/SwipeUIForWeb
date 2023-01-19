import React, { useState, useEffect } from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

const SVG = (props) => {

    const [showWheel, setShowWheel] = useState(true)
    const [innerRadius, setInnerRadius] = useState('0')
    const [outerRadius, setOuterRadius] = useState('0')
    const [wheelWidth, setWheelWidth] = useState(100)
    const [cx, setCx] = useState('0')
    const [cy, setCy] = useState('0')

    useEffect(() => {
        let cx = props.left + (props.width / 2)
        let cy = props.top + (props.height / 2)

        let innerRadius = (Math.sqrt(Math.pow(props.height, 2) + Math.pow(props.width, 2))) / 2
        let outerRadius = innerRadius + wheelWidth

        setInnerRadius(innerRadius)
        setOuterRadius(outerRadius)
        setCx(cx)
        setCy(cy)

        wheelAnimation()

        document.getElementById(props.new_id + "upper_image").style.position = "absolute"



    }, [])


    const wheelAnimation = async () => {
        const gArray = ["g1", "g2", "g3", "g4"]
        for (let i = 0; i < gArray.length; i++) {
            let element = document.getElementById(gArray[i])
            if (element) {
                element.style.display = 'block'
                await delay()
            }
        }
    }

    const handleShowWheel = (e) => {
        e.preventDefault()
        setShowWheel(true)
        return false
    }

    const handleHideWheel = () => {
        document.getElementById(props.new_id).style.display = 'none'
    }

    const handleConditionalVisibility = () => {
        props.handleShowSVG()
    }

    const delay = () => {
        return new Promise((resolve) => setTimeout(resolve, 500))
    }

    return (
        <div >
            <svg
                id={props.new_id}
                height={`${outerRadius * 2}px`}
                width={`${outerRadius * 2}px`}
                className="SVG_Class"
                style={{ left: props.left - (outerRadius - (props.width / 2)), top: props.top - (outerRadius - (props.height / 2)) }}
                onPointerLeave={props.handleHideSVG}
            >

                {/* Show buckets */}
                <g id="g1" onPointerLeave={props.handleHideSVG} onPointerEnter={props.handleShowSVG} style={{ opacity: '0' }}>
                    <path
                        d={`M 0 ${outerRadius} A ${outerRadius} ${outerRadius} 0 0 1 ${outerRadius} 0  L ${outerRadius} ${outerRadius - innerRadius} A ${innerRadius} ${innerRadius} 0 0 0 ${outerRadius - innerRadius} ${outerRadius} z`}
                        fill="#ffeead"
                    />

                    <animate attributeType="CSS" attributeName="opacity"
                        from="0" to="1" dur="0.3s" fill="freeze" begin="0" />

                    <foreignObject
                        x={0}
                        y={0}
                        width={outerRadius}
                        height={outerRadius}
                        style={{ backgroundColor: "", overflow: 'hidden' }}
                    >

                        <DropTarget
                            targetKey="foo"
                            onHit={() => console.log('dropped')}
                        >
                            <div className="drop-container" onPointerEnter={() => console.log("1 works")} >

                            </div>

                        </DropTarget>

                    </foreignObject>
                </g>

                <g id="g2" onPointerLeave={props.handleHideSVG} onPointerEnter={props.handleShowSVG} style={{ opacity: '0' }}>
                    <path
                        d={`M ${outerRadius} 0 A ${outerRadius} ${outerRadius} 0 0 1 ${2 * outerRadius} ${outerRadius}  L ${outerRadius + innerRadius} ${outerRadius} A ${innerRadius} ${innerRadius} 0 0 0 ${outerRadius} ${outerRadius - innerRadius} z`}
                        fill="#ff6f69"
                    />

                    <animate attributeType="CSS" attributeName="opacity"
                        from="0" to="1" dur="0.3s" fill="freeze" begin="0.3"/>

                    <foreignObject
                        x={outerRadius}
                        y={0}
                        width={outerRadius}
                        height={outerRadius}
                        style={{ backgroundColor: "", overflow: 'hidden' }}
                    >
                        <div className="drop-container" onPointerEnter={() => console.log("2 works")}>

                        </div>
                    </foreignObject>
                </g>

                <g id="g3" onPointerLeave={props.handleHideSVG} onPointerEnter={props.handleShowSVG} style={{ opacity: '0' }}>
                    <path
                        d={`M ${2 * outerRadius} ${outerRadius} A ${outerRadius} ${outerRadius} 0 0 1 ${outerRadius} ${2 * outerRadius}  L ${outerRadius} ${outerRadius + innerRadius} A ${innerRadius} ${innerRadius} 0 0 0 ${outerRadius + innerRadius} ${outerRadius} z`}
                        fill="#88d8b0"
                    />

                    <animate attributeType="CSS" attributeName="opacity"
                        from="0" to="1" dur="0.3s" fill="freeze" begin="0.6" />

                    <foreignObject
                        x={outerRadius}
                        y={outerRadius}
                        width={outerRadius}
                        height={outerRadius}
                        style={{ backgroundColor: "", overflow: 'hidden' }}
                    >
                        <div className="drop-container" onPointerEnter={() => console.log("3 works")}>

                        </div>
                    </foreignObject>
                </g>

                <g id="g4" onPointerLeave={props.handleHideSVG} onPointerEnter={props.handleShowSVG} style={{ opacity: '0' }}>
                    <path
                        d={`M ${outerRadius} ${2 * outerRadius} A ${outerRadius} ${outerRadius} 0 0 1 0 ${outerRadius}  L ${outerRadius - innerRadius} ${outerRadius} A ${innerRadius} ${innerRadius} 0 0 0 ${outerRadius} ${outerRadius + innerRadius} z`}
                        fill="#ffcc5c"
                    />

                    <animate attributeType="CSS" attributeName="opacity"
                        from="0" to="1" dur="0.3s" fill="freeze" begin="0.9" />
                    <foreignObject
                        x={0}
                        y={outerRadius}
                        width={outerRadius}
                        height={outerRadius}
                        style={{ backgroundColor: "", overflow: 'hidden' }}
                    >
                        <div className="drop-container" onPointerEnter={() => console.log("4 works")}>

                        </div>
                    </foreignObject>
                </g>


                {/* Hide extra drop area */}
                <g>
                    <path
                        d={`M 0 ${outerRadius} A ${outerRadius} ${outerRadius} 0 0 1 ${outerRadius} 0 L 0 0  z`}
                        fill="rgba(236,193,193,0.0)"
                    />
                </g>

                <g>
                    <path
                        d={`M ${outerRadius} 0 A ${outerRadius} ${outerRadius} 0 0 1 ${2 * outerRadius} ${outerRadius} L ${2 * outerRadius} 0  z`}
                        fill="rgba(236,193,193,0.0)"
                    />
                </g>

                <g>
                    <path
                        d={`M ${2 * outerRadius} ${outerRadius} A ${outerRadius} ${outerRadius} 0 0 1 ${outerRadius} ${2 * outerRadius} L ${2 * outerRadius} ${2 * outerRadius}  z`}
                        fill="rgba(236,193,193,0.0)"
                    />
                </g>

                <g>
                    <path
                        d={`M ${outerRadius} ${2 * outerRadius} A ${outerRadius} ${outerRadius} 0 0 1 0 ${outerRadius} L 0 ${2 * outerRadius}  z`}
                        fill="rgba(236,193,193,0.0)"
                    />
                </g>

                {/* Prepare product area */}
                <foreignObject
                    id={`foreignObject` + props.id}
                    x={wheelWidth}
                    y={wheelWidth}
                    width={innerRadius * 2}
                    height={innerRadius * 2}
                    className="ForeignObject_Class"
                >

                    <div className="svg-content" onPointerEnter={props.handleShowSVG}></div>

                </foreignObject>
            </svg>

            {/* Dragabble product */}
            <div id={props.new_id + "upper_image"} onPointerEnter={props.handleShowSVG}>
                <div className="product-wrapper">
                    <DragDropContainer
                        dragData="drag data"
                        targetKey="foo"

                    >
                        <div className="DragDropContainerClass">
                            <img src={props.product.image} width="200px" height="220px" />
                            <p className="brandname">{props.product.brand_name}</p>
                            <center><p >{props.product.product_name}</p></center>
                            <p> <b>${props.product.price} </b></p>
                            <p>{props.product.shipping}</p>
                        </div>
                    </DragDropContainer>


                </div>
            </div>
        </div>
    )
}

export default SVG