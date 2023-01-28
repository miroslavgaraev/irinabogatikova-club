import '../../secondMainStyle.css'
import '../../animation.css'

import img1 from '../../assets/decor/rayskiy-sad/small/1.jpg'
import img2 from '../../assets/decor/rayskiy-sad/small/2.jpg'
import img3 from '../../assets/decor/rayskiy-sad/small/3.jpg'
import img4 from '../../assets/decor/rayskiy-sad/small/4.jpg'
import img5 from '../../assets/decor/rayskiy-sad/small/5.jpg'
import img6 from '../../assets/decor/rayskiy-sad/small/6.jpg'
import img7 from '../../assets/decor/rayskiy-sad/small/7.jpg'
import img8 from '../../assets/decor/rayskiy-sad/small/8.jpg'
import img9 from '../../assets/decor/rayskiy-sad/small/9.jpg'
import img10 from '../../assets/decor/rayskiy-sad/small/10.jpg'
import img11 from '../../assets/decor/rayskiy-sad/small/11.jpg'
import img12 from '../../assets/decor/rayskiy-sad/small/12.jpg'
import img13 from '../../assets/decor/rayskiy-sad/small/13.jpg'


import bigImg1 from '../../assets/decor/rayskiy-sad/big/1.jpg'
import bigImg2 from '../../assets/decor/rayskiy-sad/big/2.jpg'
import bigImg3 from '../../assets/decor/rayskiy-sad/big/3.jpg'
import bigImg4 from '../../assets/decor/rayskiy-sad/big/4.jpg'
import bigImg5 from '../../assets/decor/rayskiy-sad/big/5.jpg'
import bigImg6 from '../../assets/decor/rayskiy-sad/big/6.jpg'
import bigImg7 from '../../assets/decor/rayskiy-sad/big/7.jpg'
import bigImg8 from '../../assets/decor/rayskiy-sad/big/8.jpg'
import bigImg9 from '../../assets/decor/rayskiy-sad/big/9.jpg'
import bigImg10 from '../../assets/decor/rayskiy-sad/big/10.jpg'
import bigImg11 from '../../assets/decor/rayskiy-sad/big/11.jpg'
import bigImg12 from '../../assets/decor/rayskiy-sad/big/12.jpg'
import bigImg13 from '../../assets/decor/rayskiy-sad/big/13.jpg'


import {useState} from "react";

function RjayskiySad(){
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
        [img13, bigImg13]
    ]
    const items = images.map((item) =>{
        return (
            <button className={'button-with-img animation2'} onClick={() => {previewImage(item[1])}}><img className={'gallery-image'} src={item[0]}/></button>
        )
    })


    return(
        !onNextPage ?
            <div className={'gallery'}>
                <a className={'back'} href={'/Decor'}>&#129044;</a>
                {items}
            </div>
            :
            <div className={'full-size-photo'}>
                <button className={'button'} onClick={() => {setOnNextPage(false)}}>&#129044;</button>
                <img className={'opacity'} src={imageName}/>
            </div>
    )
}
export default RjayskiySad;