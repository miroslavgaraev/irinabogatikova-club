import '../../animation.css'
import '../../secondMainStyle.css'
import {useState} from "react";

import img1 from '../../assets/art-design/SPB/small/photo (1).jpg'
import img2 from '../../assets/art-design/SPB/small/photo (2).jpg'
import img3 from '../../assets/art-design/SPB/small/photo (3).jpg'
import img4 from '../../assets/art-design/SPB/small/photo (4).jpg'
import img5 from '../../assets/art-design/SPB/small/photo (5).jpg'
import img6 from '../../assets/art-design/SPB/small/photo (6).jpg'
import img7 from '../../assets/art-design/SPB/small/photo (7).jpg'
import img8 from '../../assets/art-design/SPB/small/photo (8).jpg'

import bigImg1 from '../../assets/art-design/SPB/big/photo (1).jpg'
import bigImg2 from '../../assets/art-design/SPB/big/photo (2).jpg'
import bigImg3 from '../../assets/art-design/SPB/big/photo (3).jpg'
import bigImg4 from '../../assets/art-design/SPB/big/photo (4).jpg'
import bigImg5 from '../../assets/art-design/SPB/big/photo (5).jpg'
import bigImg6 from '../../assets/art-design/SPB/big/photo (6).jpg'
import bigImg7 from '../../assets/art-design/SPB/big/photo (7).jpg'
import bigImg8 from '../../assets/art-design/SPB/big/photo (8).jpg'


function Spb() {
    const [onNextPage, setOnNextPage] = useState(false)
    const [imageName, setImageName] = useState(null)
    const previewImage = (imageName) =>{
        setOnNextPage(true)
        setImageName(imageName)
    }
    const images = [img1, img2, img3, img4, img5, img6, img7, img8]
    const bigImages = [bigImg1, bigImg2, bigImg3, bigImg4, bigImg5, bigImg6, bigImg7, bigImg8]

    const imageArray = images.map((image, index) => {
        return (
            <div className={"item "}>
                <button className={'button-with-img animation2'} onClick={() => previewImage(bigImages[index])}>
                    <img className={'image'} src={image}/>
                </button>
            </div>
        )
    })
    return (
        !onNextPage ?
        <div className={'cont-images'}>
            <a className={'back'} href={'/ArtDesign'}>&#129044;</a>
            {imageArray}
        </div>
        :
        <div >
            <button className={'button'} onClick={() => {setOnNextPage(false)}}>&#129044;</button>
            <img className={'big-photo animation2'} src={imageName}/>
        </div>
    );
}

export default Spb;