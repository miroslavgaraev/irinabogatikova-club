
import '../../secondMainStyle.css'
import '../../animation.css'

import img1 from '../../assets/design/fyuzhn-aparts/small/1.jpg'
import img2 from '../../assets/design/fyuzhn-aparts/small/2.jpg'
import img3 from '../../assets/design/fyuzhn-aparts/small/3.jpg'
import img4 from '../../assets/design/fyuzhn-aparts/small/4.jpg'
import img5 from '../../assets/design/fyuzhn-aparts/small/5.jpg'
import img6 from '../../assets/design/fyuzhn-aparts/small/6.jpg'
import img7 from '../../assets/design/fyuzhn-aparts/small/7.jpg'
import img8 from '../../assets/design/fyuzhn-aparts/small/8.jpg'
import img9 from '../../assets/design/fyuzhn-aparts/small/9.jpg'
import img10 from '../../assets/design/fyuzhn-aparts/small/10.jpg'
import img11 from '../../assets/design/fyuzhn-aparts/small/11.jpg'
import img12 from '../../assets/design/fyuzhn-aparts/small/12.jpg'
import img13 from '../../assets/design/fyuzhn-aparts/small/13.jpg'
import img14 from '../../assets/design/fyuzhn-aparts/small/14.jpg'
import img15 from '../../assets/design/fyuzhn-aparts/small/15.jpg'
import img16 from '../../assets/design/fyuzhn-aparts/small/16.jpg'
import img17 from '../../assets/design/fyuzhn-aparts/small/17.jpg'
import img18 from '../../assets/design/fyuzhn-aparts/small/18.jpg'
import img19 from '../../assets/design/fyuzhn-aparts/small/19.jpg'
import img20 from '../../assets/design/fyuzhn-aparts/small/20.jpg'

import bigImg1 from '../../assets/design/fyuzhn-aparts/big/1.jpg'
import bigImg2 from '../../assets/design/fyuzhn-aparts/big/2.jpg'
import bigImg3 from '../../assets/design/fyuzhn-aparts/big/3.jpg'
import bigImg4 from '../../assets/design/fyuzhn-aparts/big/4.jpg'
import bigImg5 from '../../assets/design/fyuzhn-aparts/big/5.jpg'
import bigImg6 from '../../assets/design/fyuzhn-aparts/big/6.jpg'
import bigImg7 from '../../assets/design/fyuzhn-aparts/big/7.jpg'
import bigImg8 from '../../assets/design/fyuzhn-aparts/big/8.jpg'
import bigImg9 from '../../assets/design/fyuzhn-aparts/big/9.jpg'
import bigImg10 from '../../assets/design/fyuzhn-aparts/big/10.jpg'
import bigImg11 from '../../assets/design/fyuzhn-aparts/big/11.jpg'
import bigImg12 from '../../assets/design/fyuzhn-aparts/big/12.jpg'
import bigImg13 from '../../assets/design/fyuzhn-aparts/big/13.jpg'
import bigImg14 from '../../assets/design/fyuzhn-aparts/big/14.jpg'
import bigImg15 from '../../assets/design/fyuzhn-aparts/big/15.jpg'
import bigImg16 from '../../assets/design/fyuzhn-aparts/big/16.jpg'
import bigImg17 from '../../assets/design/fyuzhn-aparts/big/17.jpg'
import bigImg18 from '../../assets/design/fyuzhn-aparts/big/18.jpg'
import bigImg19 from '../../assets/design/fyuzhn-aparts/big/19.jpg'
import bigImg20 from '../../assets/design/fyuzhn-aparts/big/20.jpg'


import {useState} from "react";

function FyuszhnApartaments(){
    const [onNextPage, setOnNextPage] = useState(false)
    const [imageName, setImageName] = useState(null)
    const previewImage = (imageName) =>{
        setOnNextPage(true)
        setImageName(imageName)
    }
    const images = [
        [img1, bigImg1],
        [img2, bigImg2],
        [img3, bigImg3],
        [img4, bigImg4],
        [img5, bigImg5],
        [img6, bigImg6],
        [img7, bigImg7],
        [img8, bigImg8],
        [img9, bigImg9],
        [img10, bigImg10],
        [img11, bigImg11],
        [img12, bigImg12],
        [img13, bigImg13],
        [img14, bigImg14],
        [img15, bigImg15],
        [img16, bigImg16],
        [img17, bigImg17],
        [img18, bigImg18],
        [img19, bigImg19],
        [img20, bigImg20]
    ]
    const items = images.map((item) =>{
        return (
            <button className={'button-with-img animation2'} onClick={() => {previewImage(item[1])}}><img className={'gallery-image'} src={item[0]}/></button>
        )
    })


    return(
        !onNextPage ?
            <div className={'gallery'}>
                <a className={'back'} href={'/Design'}>&#129044;</a>
                {items}
            </div>
            :
            <div className={'full-size-photo'}>
                <button className={'button'} onClick={() => {setOnNextPage(false)}}>&#129044;</button>
                <img className={'opacity'} src={imageName}/>
            </div>
    )
}
export default FyuszhnApartaments;