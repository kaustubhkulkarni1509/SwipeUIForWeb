import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import img from '../images/like.png'
import '../App.css';

export default class WeaponWheel extends React.Component {
    state={
        path:undefined,
        like:false
    }
    handleHit1 = () => {
        console.log('item dropped 1')
        this.setState(()=>({like:true}))
        this.setState(()=>({path:undefined}))
    }

    handleHit2 = () => {
        console.log('item dropped 2')
    }

    highlight = () => {
        this.setState(()=>({path:'path1'}))
    }

    unHighlight = () => {
        this.setState(()=>({path:undefined}))
    }

    render() {

        return (
            <div>
                {this.state.like && <p>You have liked nike air jordan shoe</p>}
                <svg height="620px" width="620px">
                    <g >
                        <path className={this.state.path === "path1" ? 'active' : ''} id="path1" d="M 610 310 A 300 300 0 0 1 522.1320343559643 522.1320343559643  L 451.4213562373095 451.4213562373095 A 200 200 0 0 0 510 310  z" fill="rgba(255,255,255,0.3)" />
                        <image href={img} x="300" y="500" height="110px" width="110px" />
                        <text x="300" y="620" font-size="18" fill="white">Like</text>
                        <foreignObject x="470" y="310" width="370" height="220" transform="rotate(4deg)" style={{ backgroundColor: '' }}>
                            <DropTarget
                                targetKey="foo1"
                                onHit={this.handleHit1}
                                onDragEnter={this.highlight}
                                onDragLeave={this.unHighlight}
                            >
                                <div style={{ backgroundColor: '',width:'100px',height:'150px',margin:'20px',transform:'rotate(40deg)' }}>
                                    
                                </div>

                            </DropTarget>
                        </foreignObject>
                    </g>
                    <g >
                        <path
                            d="M 522.1320343559643 522.1320343559643 A 300 300 0 0 1 310 610  L 310 510 A 200 200 0 0 0 451.4213562373095 451.4213562373095  z"
                            fill="rgba(255,255,255,0.3)" />
                        <image
                            href="https://vignette.wikia.nocookie.net/gtawiki/images/e/e0/Fist-GTAVPC-HUD.png/revision/latest?cb=20150425182638"
                            x="140" y="620" height="60px" width="60px" />

                            <foreignObject x="320" y="470" width="200" height="250"  style={{ backgroundColor: '' }}>
                            <DropTarget
                                targetKey="foo1"
                                onHit={this.handleHit2}
                            >
                                <div style={{ backgroundColor: '',width:'150px',height:'120px',margin:'10px',transform:'rotate(-20deg)' }}>
                                    
                                </div>

                            </DropTarget>
                        </foreignObject>

                    </g>

                    <g >
                        <path
                            d="M 310 610 A 300 300 0 0 1 97.86796564403576 522.1320343559643  L 168.57864376269052 451.4213562373095 A 200 200 0 0 0 310 510  z"
                            fill="rgba(255,255,255,0.3)" />
                        <image
                            href="https://vignette.wikia.nocookie.net/gtawiki/images/b/b4/SawedoffShotgun-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419121516"
                            x="-50" y="510" height="120px" width="120px" />
                        <text x="0" y="620" font-size="18" fill="white">1 / 2</text>
                    </g>

                    <g >
                        <path
                            d="M 97.86796564403576 522.1320343559643 A 300 300 0 0 1 10 310.00000000000006  L 110 310 A 200 200 0 0 0 168.57864376269052 451.4213562373095  z"
                            fill="rgba(255,255,255,0.3)" />
                        <image
                            href="https://vignette.wikia.nocookie.net/gtawiki/images/2/27/Minigun-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419122509"
                            x="-150" y="330" height="150px" width="150px" />
                        <text x="-100" y="460" font-size="18" fill="white">77 / 100</text>
                    </g>

                    <g >
                        <path
                            d="M 10 310.00000000000006 A 300 300 0 0 1 97.8679656440357 97.86796564403576  L 168.57864376269046 168.57864376269052 A 200 200 0 0 0 110 310  z"
                            fill="rgba(255,255,255,0.3)" />
                        <image
                            href="https://vignette.wikia.nocookie.net/gtawiki/images/7/73/JerryCan-GTAVPC-HUD.png/revision/latest?cb=20150425183426"
                            x="-35" y="180" height="70px" width="70px" />
                        <text x="-40" y="280" font-size="18" fill="white">6</text>
                    </g>

                    <g >
                        <path
                            d="M 97.8679656440357 97.86796564403576 A 300 300 0 0 1 309.99999999999994 10  L 309.99999999999994 110 A 200 200 0 0 0 168.57864376269046 168.57864376269052  z"
                            fill="rgba(255,255,255,0.3)" />
                        <image
                            href="https://vignette.wikia.nocookie.net/gtawiki/images/8/8f/Pistol-GTAVPC-HUD.png/revision/latest?cb=20150419121059"
                            x="130" y="90" height="100px" width="90px" />
                        <text x="150" y="190" font-size="18" fill="white">6 / 12</text>
                    </g>

                    <g >
                        <path
                            d="M 309.99999999999994 10 A 300 300 0 0 1 522.1320343559642 97.8679656440357  L 451.4213562373095 168.57864376269046 A 200 200 0 0 0 309.99999999999994 110  z"
                            fill="rgba(255,255,255,0.3)" />
                        <image
                            href="https://vignette.wikia.nocookie.net/gtawiki/images/5/5e/SMG-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419121752"
                            x="280" y="170" height="130px" width="130px" />
                        <text x="350" y="280" font-size="18" fill="white">12 / 30</text>
                    </g>

                    <g >
                        <path
                            d="M 522.1320343559642 97.8679656440357 A 300 300 0 0 1 610 309.99999999999994  L 510 309.99999999999994 A 200 200 0 0 0 451.4213562373095 168.57864376269046  z"
                            fill="rgba(255,255,255,0.3)" />

                        <image
                            href="https://vignette.wikia.nocookie.net/gtawiki/images/7/7a/CarbineRifle-GTAVPC-HUD.png/revision/latest/scale-to-width-down/185?cb=20150419121949"
                            x="360" y="340" height="130px" width="130px" />
                        <text x="390" y="460" font-size="18" fill="white">30 / 30</text>
                    </g>
                </svg>
            </div>
        )
    }
}