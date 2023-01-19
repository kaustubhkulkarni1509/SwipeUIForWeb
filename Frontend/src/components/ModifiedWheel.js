import React from 'react'
import photo1 from '../assets/img/NikeShoes.jpg'
import photo2 from '../assets/img/NikeShoes2.jpg'
import photo3 from '../assets/img/NikeShoes3.jpg'
import photo4 from '../assets/img/NikeShoes4.jpg'
import like from '../assets/img/transparant.png'
import dislike from '../assets/img/dislike_transparant.png'

export default class ModifiedWheel extends React.Component {

    componentDidMount = () => {

        document.getElementById("likedtags" + this.props.id).style.display = "none"
        document.getElementById("dislikebucket" + this.props.id).style.display = "none"
        document.getElementById("likebucket" + this.props.id).style.display = "none"
        document.getElementById("dislikedtags" + this.props.id).style.display = "none"


    }

    showbuckets = (e) => {

        document.getElementById("likedtags" + this.props.id).style.display = "block"
        document.getElementById("dislikebucket" + this.props.id).style.display = "flex"
        document.getElementById("dislikebucket" + this.props.id).style.flexDirection = "column"
        document.getElementById("dislikebucket" + this.props.id).style.justifyContent = "center"
        document.getElementById("likebucket" + this.props.id).style.display = "flex"
        document.getElementById("likebucket" + this.props.id).style.flexDirection = "column"
        document.getElementById("likebucket" + this.props.id).style.justifyContent = "center"
        document.getElementById("dislikedtags" + this.props.id).style.display = "block"
        document.getElementById("container" + this.props.id).style.width = "100%"
    }


    hidebuckets = (e) => {
        document.getElementById("container" + this.props.id).style.width = "200px"
        document.getElementById("likedtags" + this.props.id).style.display = "none"
        document.getElementById("dislikebucket" + this.props.id).style.display = "none"
        document.getElementById("likebucket" + this.props.id).style.display = "none"
        document.getElementById("dislikedtags" + this.props.id).style.display = "none"
    }
    render() {
        return (
            <div className="modified-wheel-wrapper" >
                <div className="modified-wheel-container1" id={"likedtags" + this.props.id}>
                    Liked tags --- why user may like product
                </div>

                <div className="modified-wheel-container2" id={"container" + this.props.id}>

                    <div className="modified-wheel-container2-part1" id={"dislikebucket" + this.props.id}>
                        <img src={dislike} width="100px" />
                    </div>

                    <div className="modified-wheel-container2-part2" onMouseEnter={this.showbuckets} onMouseLeave={this.hidebuckets}>


                        <img src={photo1} width="180px" height="210px" />

                        <p className="brandname">Brand Name</p>
                        <div className="modified-wheel-product-name">
                            <center><p >Product name which might be this much longer or even longer than this</p></center>
                            <p> <b>$20 </b></p>
                            <p>Free Shipping</p>
                        </div>


                    </div>

                    <div className="modified-wheel-container2-part3" id={"likebucket" + this.props.id}>

                        <img src={like} width="100px" />
                    </div>
                </div>


                <div className="modified-wheel-container3" id={"dislikedtags" + this.props.id}>
                    Disliked Tags --- why user may not like product
                </div>
            </div>
        )
    }
}