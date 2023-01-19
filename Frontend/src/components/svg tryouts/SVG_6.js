import React, { useState, useEffect } from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

const SVG_6 = (props) => {

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

        document.getElementById(props.new_id + "upper_image").style.position = "absolute"

    }, [])

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

    return (
        <div >
            <svg
                id={props.new_id}
                height={`${outerRadius * 2}px`}
                width={`${outerRadius * 2}px`}
                className="SVG_Class"
                style={{ left: props.left - (outerRadius - (props.width / 2)), top: props.top - (outerRadius - (props.height / 2)), backgroundColor: 'red' }}
                onPointerLeave={props.handleHideSVG}
            >

                {/* Show buckets */}
                <g id="g1" onPointerLeave={props.handleHideSVG} onPointerEnter={props.handleShowSVG} style={{ opacity: '0' }} onMouseUp={()=>console.log('mouse up on g1')}>
                    <path
                        d={`M 0 ${outerRadius} A ${outerRadius} ${outerRadius} 0 0 1 ${outerRadius / 2} ${outerRadius * (1 - (Math.sqrt(3) / 2))}  L ${outerRadius - (innerRadius / 2)} ${outerRadius - (innerRadius * (Math.sqrt(3) / 2))} A ${innerRadius} ${innerRadius} 0 0 0 ${outerRadius - innerRadius} ${outerRadius} z`}
                        fill="#ffeead"
                    />

                    <animate attributeType="CSS" attributeName="opacity"
                        from="0" to="1" dur="0.3s" fill="freeze" begin="0" />

                    <foreignObject
                        x={0}
                        y={outerRadius * (1 - (Math.sqrt(3) / 2))}
                        width={innerRadius}
                        height={outerRadius - (outerRadius * (1 - (Math.sqrt(3) / 2)))}
                        style={{ backgroundColor: "yellow", overflow: 'hidden' }}
                    >

                        <DropTarget
                            targetKey="foo"
                            onHit={() => console.log('dropped')}
                        >
                            <div className="drop-container-6bucket-g1" onPointerEnter={() => console.log("1 works")} style={{backgroundColor:'orange'}}>

                            </div>

                        </DropTarget>

                    </foreignObject>
                </g>

                <g id="g2" onPointerLeave={props.handleHideSVG} onPointerEnter={props.handleShowSVG} style={{ opacity: '0' }} onMouseUp={()=>console.log('mouse up on g2')}>
                    <path
                        d={`M ${outerRadius / 2} ${outerRadius * (1 - (Math.sqrt(3) / 2))} A ${outerRadius} ${outerRadius} 0 0 1 ${outerRadius * 1.5} ${outerRadius * (1 - (Math.sqrt(3) / 2))}  L ${outerRadius + (innerRadius / 2)} ${outerRadius - (innerRadius * (Math.sqrt(3) / 2))} A ${innerRadius} ${innerRadius} 0 0 0 ${outerRadius - (innerRadius / 2)} ${outerRadius - (innerRadius * (Math.sqrt(3) / 2))} z`}
                        fill="#ff6f69"
                    />

                    <animate attributeType="CSS" attributeName="opacity"
                        from="0" to="1" dur="0.3s" fill="freeze" begin="0.3" />

                    <foreignObject
                        x={outerRadius - (innerRadius / 2)}
                        y={innerRadius}
                        width={innerRadius}
                        height={innerRadius}
                        style={{ backgroundColor: "", overflow: 'hidden',transform:'rotate(-30deg)',position:'absolute' }}
                    >
                        <DropTarget
                            targetKey="foo"
                            onHit={() => console.log('dropped in 2')}
                        >
                        <div className="drop-container-6bucket-g2" onPointerEnter={() => console.log("2 works")} style={{backgroundColor:''}}>

                        </div>
                        </DropTarget>
                    </foreignObject>

                    <foreignObject
                        x={innerRadius - innerRadius/2 + 10}
                        y={10}
                        width={'200px'}
                        height={'200px'}
                        style={{ backgroundColor: "", overflow: 'hidden',transform:'rotate(-30deg)',position:'absolute' }}
                    >
                        <DropTarget
                            targetKey="foo"
                            onHit={() => console.log('dropped in 2')}
                        >
                        <div className="drop-container-6bucket-g2" onPointerEnter={() => console.log("2 works")} style={{backgroundColor:''}}>

                        </div>
                        </DropTarget>
                    </foreignObject>

                    <foreignObject
                        x={outerRadius - (innerRadius / 2)}
                        y={0}
                        width={'200px'}
                        height={'200px'}
                        style={{ backgroundColor: "", overflow: 'hidden',transform:'',position:'absolute' }}
                    >
                        <DropTarget
                            targetKey="foo"
                            onHit={() => console.log('dropped in 2')}
                        >
                        <div className="drop-container-6bucket-g2" onPointerEnter={() => console.log("2 works")} style={{backgroundColor:''}}>

                        </div>
                        </DropTarget>
                    </foreignObject>    
                </g>

                <g id="g3" onPointerLeave={props.handleHideSVG} onPointerEnter={props.handleShowSVG} style={{ opacity: '0' }}>
                    <path
                        d={`M ${outerRadius * 1.5} ${outerRadius * (1 - (Math.sqrt(3) / 2))} A ${outerRadius} ${outerRadius} 0 0 1 ${2 * outerRadius} ${outerRadius}  L ${outerRadius + innerRadius} ${outerRadius} A ${innerRadius} ${innerRadius} 0 0 0 ${outerRadius + (innerRadius / 2)} ${outerRadius - (innerRadius * (Math.sqrt(3) / 2))} z`}
                        fill="purple"
                    />

                    <animate attributeType="CSS" attributeName="opacity"
                        from="0" to="1" dur="0.3s" fill="freeze" begin="0.6" />

                    <foreignObject
                        x={outerRadius + (innerRadius / 2)+10}
                        y={outerRadius * (1 - (Math.sqrt(3) / 2)) -240}
                        width={100}
                        height={150}
                        style={{ backgroundColor: "black", overflow: 'hidden',transform:'rotate(30deg)' }}
                    >
                        
                        
                        <div className="drop-container-6bucket-g3" onPointerEnter={() => console.log("3 works")} style={{backgroundColor:"", position: 'absolute'}}>

                        </div>
                      

                       
                    </foreignObject>
                </g>

                <g id="g4" onPointerLeave={props.handleHideSVG} onPointerEnter={props.handleShowSVG} style={{ opacity: '0' }}>
                    <path
                        d={`M ${2 * outerRadius} ${outerRadius} A ${outerRadius} ${outerRadius} 0 0 1 ${outerRadius * 1.5} ${outerRadius * (1 + (Math.sqrt(3) / 2))} L ${outerRadius + (innerRadius / 2)} ${outerRadius + (innerRadius * (Math.sqrt(3) / 2))} A ${innerRadius} ${innerRadius} 0 0 0 ${outerRadius + innerRadius} ${outerRadius} z`}
                        fill="orange"
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

                <g id="g5" onPointerLeave={props.handleHideSVG} onPointerEnter={props.handleShowSVG} style={{ opacity: '0' }}>
                    <path
                        d={`M ${outerRadius * 1.5} ${outerRadius * (1 + (Math.sqrt(3) / 2))} A ${outerRadius} ${outerRadius} 0 0 1 ${outerRadius / 2} ${outerRadius * (1 + (Math.sqrt(3) / 2))}  L ${outerRadius - (innerRadius / 2)} ${outerRadius + (innerRadius * (Math.sqrt(3) / 2))} A ${innerRadius} ${innerRadius} 0 0 0 ${outerRadius + (innerRadius / 2)} ${outerRadius + (innerRadius * (Math.sqrt(3) / 2))} z`}
                        fill="#88d8b0"
                    />

                    <animate attributeType="CSS" attributeName="opacity"
                        from="0" to="1" dur="0.3s" fill="freeze" begin="1.2" />

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

                <g id="g6" onPointerLeave={props.handleHideSVG} onPointerEnter={props.handleShowSVG} style={{ opacity: '0' }} onMouseUp={()=>console.log('mouse up on g6')}>
                    <path
                        d={`M ${outerRadius / 2} ${outerRadius * (1 + (Math.sqrt(3) / 2))} A ${outerRadius} ${outerRadius} 0 0 1 0 ${outerRadius}  L ${outerRadius - innerRadius} ${outerRadius} A ${innerRadius} ${innerRadius} 0 0 0 ${outerRadius - (innerRadius / 2)} ${outerRadius + (innerRadius * (Math.sqrt(3) / 2))} z`}
                        fill="black"
                    />

                    <animate attributeType="CSS" attributeName="opacity"
                        from="0" to="1" dur="0.3s" fill="freeze" begin="1.5" />
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
                        fill="rgba(236,193,193)"
                    />
                </g>

                <g>
                    <path
                        d={`M ${outerRadius} 0 A ${outerRadius} ${outerRadius} 0 0 1 ${2 * outerRadius} ${outerRadius} L ${2 * outerRadius} 0  z`}
                        fill="rgba(236,193,193)"
                    />
                </g>

                <g>
                    <path
                        d={`M ${2 * outerRadius} ${outerRadius} A ${outerRadius} ${outerRadius} 0 0 1 ${outerRadius} ${2 * outerRadius} L ${2 * outerRadius} ${2 * outerRadius}  z`}
                        fill="rgba(236,193,193)"
                    />
                </g>

                <g>
                    <path
                        d={`M ${outerRadius} ${2 * outerRadius} A ${outerRadius} ${outerRadius} 0 0 1 0 ${outerRadius} L 0 ${2 * outerRadius}  z`}
                        fill="rgba(236,193,193)"
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
                        </div>
                    </DragDropContainer>
                    <p className="brandname">{props.product.brand_name}</p>
                    <center><p >{props.product.product_name}</p></center>
                    <p> <b>${props.product.price} </b></p>
                    <p>{props.product.shipping}</p>

                </div>
            </div>
        </div>
    )
}

export default SVG_6