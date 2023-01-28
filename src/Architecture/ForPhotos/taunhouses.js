
import '../../secondMainStyle.css'
import '../../animation.css'

import img1 from '../../assets/architecture/moscow-taunhouses/small/1.jpg'
import img2 from '../../assets/architecture/moscow-taunhouses/small/2.jpg'
import img3 from '../../assets/architecture/moscow-taunhouses/small/3.jpg'
import img4 from '../../assets/architecture/moscow-taunhouses/small/4.jpg'
import img5 from '../../assets/architecture/moscow-taunhouses/small/5.jpg'
import img6 from '../../assets/architecture/moscow-taunhouses/small/6.jpg'

import bigImg1 from '../../assets/architecture/moscow-taunhouses/big/1.jpg'
import bigImg2 from '../../assets/architecture/moscow-taunhouses/big/2.jpg'
import bigImg3 from '../../assets/architecture/moscow-taunhouses/big/3.jpg'
import bigImg4 from '../../assets/architecture/moscow-taunhouses/big/4.jpg'
import bigImg5 from '../../assets/architecture/moscow-taunhouses/big/5.jpg'
import bigImg6 from '../../assets/architecture/moscow-taunhouses/big/6.jpg'

import {useState} from "react";

function TaunHouses(){
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
        [img6, bigImg6]
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
export default TaunHouses;