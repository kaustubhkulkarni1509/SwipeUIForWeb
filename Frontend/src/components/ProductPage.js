import React from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import '../assets/css/style.css'
import ProductPhoto from '../assets/img/product-photo.png'
import ProductPhoto2 from '../assets/img/product-photo-2.png'
import ProductPhoto3 from '../assets/img/product-photo-3.png'
import ProductPhoto4 from '../assets/img/product-photo-4.png'

export default class ProductPage extends React.Component {

    state = {
        tags: ['Jordan', 'Shoes'],

        description: `The Air Jordan 12 “University Gold” is a refreshing new colorway of Michael Jordan’s
        late-90s signature shoe. Adopting the familiar two-toned appearance of some of the
        greatest Jordan 12s, the “University Gold” look displays a buttery black leather
        upper and contrasting yellow lizard-patterned leather mudguard. The rest of the
        design is kept understated as black laces, silver hardware, and a black leather
        tongue allow for the embroidered yellow Jumpman and “Two 3” branding on the tongue
        to garner attention. A carbon fiber midfoot plate, black Jumpman, and two black
        traction pods on the yellow outsole follow the styling cadence of the original
        Air Jordan 12s from 1997. Release date: July 18, 2020.`,

        descriptionWords: [],

        title: `Air Jordan 12 Retro University Gold`,

        titleWords: [],

        productPhotos: [ProductPhoto, ProductPhoto2, ProductPhoto3, ProductPhoto4],
        currentPhoto: 0,

        likedWords: [],
        dislikedWords: []
    }

    componentDidMount = () => {
        document.getElementById(0).style.border = '2px solid orange'

        let descriptionWords = this.state.description.split(' ')

        descriptionWords = descriptionWords.filter((descriptionWord) => {
            if (descriptionWord !== "") return descriptionWord
        })

        let titleWords = this.state.title.split(' ')

        titleWords = titleWords.filter((titleWord) => {
            if (titleWord !== '') return titleWord
        })

        this.setState(() => ({ descriptionWords, titleWords }))
    }

    changePicture = (e) => {
        e.preventDefault()
        e.persist()
        document.getElementById(this.state.currentPhoto).style.border = 'none'
        document.getElementById(e.target.id).style.border = '2px solid orange'
        this.setState(() => ({ currentPhoto: e.target.id }))
    }

    handleDislike = (e) => {

        let dislikedWords = this.state.dislikedWords
        let likedWords = this.state.likedWords

        if (e.dragData === 'product') {
            this.state.tags.forEach(tag => {
                if (!dislikedWords.includes(tag)) {
                    dislikedWords.push(tag)
                }

                likedWords = likedWords.filter((likedWord) => {
                    if (likedWord !== tag) return likedWord
                })
            });
        } else {
            if (!dislikedWords.includes(e.dragData)) {
                dislikedWords.push(e.dragData)

                likedWords = likedWords.filter((likedWord) => {
                    if (likedWord !== e.dragData) return likedWord
                })
            }
        }

        this.setState(() => ({ dislikedWords, likedWords }))
    }

    handleLike = (e) => {

        let likedWords = this.state.likedWords
        let dislikedWords = this.state.dislikedWords

        if (e.dragData === 'product') {
            this.state.tags.forEach(tag => {
                if (!likedWords.includes(tag)) {
                    likedWords.push(tag)
                }

                dislikedWords = dislikedWords.filter((dislikedWord) => {
                    if (dislikedWord !== tag) return dislikedWord
                })
            });
        } else {
            if (!likedWords.includes(e.dragData)) {
                likedWords.push(e.dragData)

                dislikedWords = dislikedWords.filter((dislikedWord) => {
                    if (dislikedWord !== e.dragData) return dislikedWord
                })
            }
        }

        this.setState(() => ({ likedWords, dislikedWords }))
    }

    render() {
        return (
            <div className="wrapper">
                <DropTarget
                    targetKey="bucket"
                    onHit={this.handleDislike}
                >
                    <div className="container container-1">

                        <center>Dislike Bucket</center>

                        {this.state.dislikedWords.map((dislikedWord, index) => <p key={index}>{dislikedWord}</p>)}
                    </div>
                </DropTarget>

                <div className="product">
                    <div className="container container-2">
                        <DragDropContainer
                            dragData="product"
                            targetKey="bucket"
                        >
                            <img src={this.state.productPhotos[this.state.currentPhoto]} alt="ProductPhoto" width="600px" />
                        </DragDropContainer>

                        <div className="product-photos">
                            {this.state.productPhotos.map((productPhoto, index) => <img id={index} key={index} src={productPhoto} alt={productPhoto} width="90px" onPointerEnter={this.changePicture} />)}
                        </div>
                    </div>

                    <div className="container container-3">

                        <div className="product-title">
                            {this.state.titleWords.map((titleWord, index) =>
                                <DragDropContainer
                                    dragData={titleWord}
                                    targetKey="bucket"
                                    key={index}
                                >
                                    <p>{titleWord}&nbsp;</p>
                                </DragDropContainer>

                            )}
                        </div>

                        <br />

                        <div className="product-description">

                            {this.state.descriptionWords.map((descriptionWord, index) =>
                                <DragDropContainer
                                    dragData={descriptionWord}
                                    targetKey="bucket"
                                    key={index}
                                >
                                    <p>{descriptionWord}&nbsp;</p>
                                </DragDropContainer>

                            )}
                        </div>

                        <br />

                        <div className="product-tags">
                            Tags: &nbsp;
                            {this.state.tags.map((tag) =>

                            <DragDropContainer
                                dragData={tag}
                                targetKey="bucket"
                                key={tag}
                            >
                                <div style={{ backgroundColor: "cyan", marginRight: "10px" }}>{tag}</div>
                            </DragDropContainer>
                        )}
                        </div>
                    </div>

                    <div className="container container-4">
                        Cart and stock

                        <button className="btn btn-success">Add to Cart</button>
                        <button className="btn btn-warning">Buy Now</button>
                    </div>
                </div>

                <DropTarget
                    targetKey="bucket"
                    onHit={this.handleLike}
                >
                    <div className="container container-5">
                        <center>Like Bucket</center>
                        {this.state.likedWords.map((likedWord, index) => <p key={index}>{likedWord}</p>)}
                    </div>
                </DropTarget>
            </div>
        )
    }
}