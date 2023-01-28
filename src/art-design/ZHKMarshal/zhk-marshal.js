import {useState} from "react";
import '../../animation.css'
import '../../secondMainStyle.css'

import img1 from '../../assets/art-design/zhk-marshala/small/image (1).jpg'
import img2 from '../../assets/art-design/zhk-marshala/small/image (2).jpg'
import img3 from '../../assets/art-design/zhk-marshala/small/image (3).jpg'
import img4 from '../../assets/art-design/zhk-marshala/small/image (4).jpg'
import img5 from '../../assets/art-design/zhk-marshala/small/image (5).jpg'
import img6 from '../../assets/art-design/zhk-marshala/small/image (6).jpg'
import img7 from '../../assets/art-design/zhk-marshala/small/image (7).jpg'
import img8 from '../../assets/art-design/zhk-marshala/small/image (8).jpg'
import img9 from '../../assets/art-design/zhk-marshala/small/image (9).jpg'
import img10 from '../../assets/art-design/zhk-marshala/small/image (10).jpg'
import img11 from '../../assets/art-design/zhk-marshala/small/image (11).jpg'
import img12 from '../../assets/art-design/zhk-marshala/small/image (12).jpg'

import bigImg1 from '../../assets/art-design/zhk-marshala/big/image (1).jpg'
import bigImg2 from '../../assets/art-design/zhk-marshala/big/image (2).jpg'
import bigImg3 from '../../assets/art-design/zhk-marshala/big/image (3).jpg'
import bigImg4 from '../../assets/art-design/zhk-marshala/big/image (4).jpg'
import bigImg5 from '../../assets/art-design/zhk-marshala/big/image (5).jpg'
import bigImg6 from '../../assets/art-design/zhk-marshala/big/image (6).jpg'
import bigImg7 from '../../assets/art-design/zhk-marshala/big/image (7).jpg'
import bigImg8 from '../../assets/art-design/zhk-marshala/big/image (8).jpg'
import bigImg9 from '../../assets/art-design/zhk-marshala/big/image (9).jpg'
import bigImg10 from '../../assets/art-design/zhk-marshala/big/image (10).jpg'
import bigImg11 from '../../assets/art-design/zhk-marshala/big/image (11).jpg'
import bigImg12 from '../../assets/art-design/zhk-marshala/big/image (12).jpg'


function ZhkPage() {
    const [onNextPage, setOnNextPage] = useState(false)
    const [imageName, setImageName] = useState(null)
    const previewImage = (imageName) =>{
        setOnNextPage(true)
        setImageName(imageName)
    }
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
    const bigImages = [bigImg1, bigImg2, bigImg3, bigImg4, bigImg5, bigImg6, bigImg7, bigImg8, bigImg9, bigImg10, bigImg11, bigImg12]

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
            <div>
                <button className={'button'} onClick={() => {setOnNextPage(false)}}>&#129044;</button>
                <img className={'big-photo animation2'} src={imageName}/>
            </div>
    );
}

export default ZhkPage;