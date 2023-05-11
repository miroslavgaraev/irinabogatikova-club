import '../../animation.css'
import '../../secondMainStyle.css'
import {useState} from "react";

import img1 from '../../assets/art-design/arctica/small/photo (1).jpg'
import img2 from '../../assets/art-design/arctica/small/photo (2).jpg'
import img3 from '../../assets/art-design/arctica/small/photo (3).jpg'
import img4 from '../../assets/art-design/arctica/small/photo (4).jpg'
import img5 from '../../assets/art-design/arctica/small/photo (5).jpg'
import img6 from '../../assets/art-design/arctica/small/photo (6).jpg'
import img7 from '../../assets/art-design/arctica/small/photo (7).jpg'
import img8 from '../../assets/art-design/arctica/small/photo (8).jpg'
import img9 from '../../assets/art-design/arctica/small/photo (9).jpg'
import img10 from '../../assets/art-design/arctica/small/photo (10).jpg'
import img11 from '../../assets/art-design/arctica/small/photo (11).jpg'
import img12 from '../../assets/art-design/arctica/small/photo (12).jpg'
import img13 from '../../assets/art-design/arctica/small/photo (13).jpg'
import img14 from '../../assets/art-design/arctica/small/photo (14).jpg'
import img15 from '../../assets/art-design/arctica/small/photo (15).jpg'
import img16 from '../../assets/art-design/arctica/small/photo (16).jpg'
import img17 from '../../assets/art-design/arctica/small/photo (17).jpg'
import img18 from '../../assets/art-design/arctica/small/photo (18).jpg'
import img19 from '../../assets/art-design/arctica/small/photo (19).jpg'

import bigImg1 from '../../assets/art-design/arctica/big/photo (1).jpg'
import bigImg2 from '../../assets/art-design/arctica/big/photo (2).jpg'
import bigImg3 from '../../assets/art-design/arctica/big/photo (3).jpg'
import bigImg4 from '../../assets/art-design/arctica/big/photo (4).jpg'
import bigImg5 from '../../assets/art-design/arctica/big/photo (5).jpg'
import bigImg6 from '../../assets/art-design/arctica/big/photo (6).jpg'
import bigImg7 from '../../assets/art-design/arctica/big/photo (7).jpg'
import bigImg8 from '../../assets/art-design/arctica/big/photo (8).jpg'
import bigImg9 from '../../assets/art-design/arctica/big/photo (9).jpg'
import bigImg10 from '../../assets/art-design/arctica/big/photo (10).jpg'
import bigImg11 from '../../assets/art-design/arctica/big/photo (11).jpg'
import bigImg12 from '../../assets/art-design/arctica/big/photo (12).jpg'
import bigImg13 from '../../assets/art-design/arctica/big/photo (13).jpg'
import bigImg14 from '../../assets/art-design/arctica/big/photo (14).jpg'
import bigImg15 from '../../assets/art-design/arctica/big/photo (15).jpg'
import bigImg16 from '../../assets/art-design/arctica/big/photo (16).jpg'
import bigImg17 from '../../assets/art-design/arctica/big/photo (17).jpg'
import bigImg18 from '../../assets/art-design/arctica/big/photo (18).jpg'
import bigImg19 from '../../assets/art-design/arctica/big/photo (19).jpg'

function Arctica() {
    const [onNextPage, setOnNextPage] = useState(false)
    const [imageName, setImageName] = useState(null)
    const previewImage = (imageName) =>{
        setOnNextPage(true)
        setImageName(imageName)
    }
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19]
    const bigImages = [bigImg1, bigImg2, bigImg3, bigImg4, bigImg5, bigImg6, bigImg7, bigImg8, bigImg9, bigImg10, bigImg11, bigImg12, bigImg13, bigImg14, bigImg15, bigImg16, bigImg17, bigImg18, bigImg19]

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

export default Arctica;