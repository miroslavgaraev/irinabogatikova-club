import '../../animation.css'
import '../../secondMainStyle.css'
import {useState} from "react";


import img1 from '../../assets/art-design/miami/small/1-.jpg'
import img2 from '../../assets/art-design/miami/small/2-.jpg'
import img3 from '../../assets/art-design/miami/small/3-.jpg'
import img4 from '../../assets/art-design/miami/small/4-.jpg'
import img5 from '../../assets/art-design/miami/small/5-.jpg'
import img6 from '../../assets/art-design/miami/small/6-.jpg'
import img7 from '../../assets/art-design/miami/small/7-.jpg'
import img8 from '../../assets/art-design/miami/small/8-.jpg'
import img9 from '../../assets/art-design/miami/small/9-.jpg'
import img10 from '../../assets/art-design/miami/small/10-.jpg'
import img11 from '../../assets/art-design/miami/small/11-.jpg'
import img12 from '../../assets/art-design/miami/small/12-.jpg'
import img13 from '../../assets/art-design/miami/small/13-.jpg'
import img14 from '../../assets/art-design/miami/small/14-.jpg'
import img15 from '../../assets/art-design/miami/small/15-.jpg'
import img16 from '../../assets/art-design/miami/small/16.jpg'
import img17 from '../../assets/art-design/miami/small/17-.jpg'
import img18 from '../../assets/art-design/miami/small/17.jpg'
import img19 from '../../assets/art-design/miami/small/18.jpg'
import img20 from '../../assets/art-design/miami/small/19.jpg'
import img21 from '../../assets/art-design/miami/small/20.jpg'
import img22 from '../../assets/art-design/miami/small/21.jpg'
import img23 from '../../assets/art-design/miami/small/22.jpg'
import img24 from '../../assets/art-design/miami/small/24.jpg'
import img25 from '../../assets/art-design/miami/small/25.jpg'
import img26 from '../../assets/art-design/miami/small/26.jpg'
import img27 from '../../assets/art-design/miami/small/27.jpg'

import bigImg1 from '../../assets/art-design/miami/big/1-.jpg'
import bigImg2 from '../../assets/art-design/miami/big/2-.jpg'
import bigImg3 from '../../assets/art-design/miami/big/3-.jpg'
import bigImg4 from '../../assets/art-design/miami/big/4-.jpg'
import bigImg5 from '../../assets/art-design/miami/big/5-.jpg'
import bigImg6 from '../../assets/art-design/miami/big/6-.jpg'
import bigImg7 from '../../assets/art-design/miami/big/7-.jpg'
import bigImg8 from '../../assets/art-design/miami/big/8-.jpg'
import bigImg9 from '../../assets/art-design/miami/big/9-.jpg'
import bigImg10 from '../../assets/art-design/miami/big/10-.jpg'
import bigImg11 from '../../assets/art-design/miami/big/11-.jpg'
import bigImg12 from '../../assets/art-design/miami/big/12-.jpg'
import bigImg13 from '../../assets/art-design/miami/big/13-.jpg'
import bigImg14 from '../../assets/art-design/miami/big/14-.jpg'
import bigImg15 from '../../assets/art-design/miami/big/15-.jpg'
import bigImg16 from '../../assets/art-design/miami/big/16.jpg'
import bigImg17 from '../../assets/art-design/miami/big/17-.jpg'
import bigImg18 from '../../assets/art-design/miami/big/17.jpg'
import bigImg19 from '../../assets/art-design/miami/big/18.jpg'
import bigImg20 from '../../assets/art-design/miami/big/19.jpg'
import bigImg21 from '../../assets/art-design/miami/big/20.jpg'
import bigImg22 from '../../assets/art-design/miami/big/21.jpg'
import bigImg23 from '../../assets/art-design/miami/big/22.jpg'
import bigImg24 from '../../assets/art-design/miami/big/24.jpg'
import bigImg25 from '../../assets/art-design/miami/big/25.jpg'
import bigImg26 from '../../assets/art-design/miami/big/26.jpg'
import bigImg27 from '../../assets/art-design/miami/big/27.jpg'


function MiamiPage() {
    const [onNextPage, setOnNextPage] = useState(false)
    const [imageName, setImageName] = useState(null)
    const previewImage = (imageName) =>{
        setOnNextPage(true)
        setImageName(imageName)
    }
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25,
        img26, img27,]
    const bigImages = [bigImg1, bigImg2, bigImg3, bigImg4, bigImg5, bigImg6, bigImg7, bigImg8, bigImg9, bigImg10, bigImg11, bigImg12, bigImg13, bigImg14, bigImg15, bigImg16, bigImg17, bigImg18, bigImg19, bigImg20, bigImg21, bigImg22, bigImg23, bigImg24, bigImg25,
        bigImg26, bigImg27,]

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

export default MiamiPage;