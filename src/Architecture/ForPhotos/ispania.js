
import '../../secondMainStyle.css'
import img1 from '../../assets/architecture/Ispania-home/small/1.jpg'
import img2 from '../../assets/architecture/Ispania-home/small/2.jpg'
import img3 from '../../assets/architecture/Ispania-home/small/3.jpg'


import bigImg1 from '../../assets/architecture/Ispania-home/big/1.jpg'
import bigImg2 from '../../assets/architecture/Ispania-home/big/2.jpg'
import bigImg3 from '../../assets/architecture/Ispania-home/big/3.jpg'

import {useState} from "react";

function Ispania(){
    const [onNextPage, setOnNextPage] = useState(false)
    const [imageName, setImageName] = useState(null)
    const previewImage = (imageName) =>{
        setOnNextPage(true)
        setImageName(imageName)
    }
    const images = [
        [img1, bigImg1],
        [img2, bigImg2],
        [img3, bigImg3]
    ]
    const items = images.map((item) =>{
        return (
            <button className={'button-with-img animation2'} onClick={() => {previewImage(item[1])}}><img className={'gallery-image'} src={item[0]}/></button>
        )
    })


    return(
        !onNextPage ?
            <div className={'gallery'}>
                <a className={'back'} href={'/Architecture'}>&#129044;</a>
                {items}
            </div>
            :
            <div className={'full-size-photo'}>
                <button className={'button'} onClick={() => {setOnNextPage(false)}}>&#129044;</button>
                <img className={'opacity'} src={imageName}/>
            </div>
    )
}
export default Ispania;