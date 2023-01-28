
import '../../secondMainStyle.css'
import img1 from '../../assets/architecture/neonatalniy-center/small/1.jpg'
import img2 from '../../assets/architecture/neonatalniy-center/small/2.jpg'


import bigImg1 from '../../assets/architecture/neonatalniy-center/big/1.jpg'
import bigImg2 from '../../assets/architecture/neonatalniy-center/big/2.jpg'
import {useState} from "react";

function NeonCenter(){
    const [onNextPage, setOnNextPage] = useState(false)
    const [imageName, setImageName] = useState(null)
    const previewImage = (imageName) =>{
        setOnNextPage(true)
        setImageName(imageName)
    }
    const images = [
        [img1, bigImg1],
        [img2, bigImg2]
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
export default NeonCenter;