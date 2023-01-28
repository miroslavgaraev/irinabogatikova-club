
import '../../secondMainStyle.css'
import '../../animation.css'

import img1 from '../../assets/design/office-ardeko-left/small/1.jpg'
import img2 from '../../assets/design/office-ardeko-left/small/2.jpg'
import img3 from '../../assets/design/office-ardeko-left/small/3.jpg'
import img4 from '../../assets/design/office-ardeko-left/small/4.jpg'
import img5 from '../../assets/design/office-ardeko-left/small/5.jpg'
import img6 from '../../assets/design/office-ardeko-left/small/6.jpg'
import img7 from '../../assets/design/office-ardeko-left/small/7.jpg'
import img8 from '../../assets/design/office-ardeko-left/small/8.jpg'
import img9 from '../../assets/design/office-ardeko-left/small/9.jpg'
import img10 from '../../assets/design/office-ardeko-left/small/10.jpg'
import img11 from '../../assets/design/office-ardeko-left/small/11.jpg'
import img12 from '../../assets/design/office-ardeko-left/small/12.jpg'
import img13 from '../../assets/design/office-ardeko-left/small/13.jpg'
import img14 from '../../assets/design/office-ardeko-left/small/14.jpg'
import img15 from '../../assets/design/office-ardeko-left/small/15.jpg'
import img16 from '../../assets/design/office-ardeko-left/small/16.jpg'
import img17 from '../../assets/design/office-ardeko-left/small/17.jpg'
import img18 from '../../assets/design/office-ardeko-left/small/18.jpg'
import img19 from '../../assets/design/office-ardeko-left/small/19.jpg'
import img20 from '../../assets/design/office-ardeko-left/small/20.jpg'
import img21 from '../../assets/design/office-ardeko-left/small/21.jpg'
import img22 from '../../assets/design/office-ardeko-left/small/22.jpg'
import img23 from '../../assets/design/office-ardeko-left/small/23.jpg'

import bigImg1 from '../../assets/design/office-ardeko-left/big/1.jpg'
import bigImg2 from '../../assets/design/office-ardeko-left/big/2.jpg'
import bigImg3 from '../../assets/design/office-ardeko-left/big/3.jpg'
import bigImg4 from '../../assets/design/office-ardeko-left/big/4.jpg'
import bigImg5 from '../../assets/design/office-ardeko-left/big/5.jpg'
import bigImg6 from '../../assets/design/office-ardeko-left/big/6.jpg'
import bigImg7 from '../../assets/design/office-ardeko-left/big/7.jpg'
import bigImg8 from '../../assets/design/office-ardeko-left/big/8.jpg'
import bigImg9 from '../../assets/design/office-ardeko-left/big/9.jpg'
import bigImg10 from '../../assets/design/office-ardeko-left/big/10.jpg'
import bigImg11 from '../../assets/design/office-ardeko-left/big/11.jpg'
import bigImg12 from '../../assets/design/office-ardeko-left/big/12.jpg'
import bigImg13 from '../../assets/design/office-ardeko-left/big/13.jpg'
import bigImg14 from '../../assets/design/office-ardeko-left/big/14.jpg'
import bigImg15 from '../../assets/design/office-ardeko-left/big/15.jpg'
import bigImg16 from '../../assets/design/office-ardeko-left/big/16.jpg'
import bigImg17 from '../../assets/design/office-ardeko-left/big/17.jpg'
import bigImg18 from '../../assets/design/office-ardeko-left/big/18.jpg'
import bigImg19 from '../../assets/design/office-ardeko-left/big/19.jpg'
import bigImg20 from '../../assets/design/office-ardeko-left/big/20.jpg'
import bigImg21 from '../../assets/design/office-ardeko-left/big/21.jpg'
import bigImg22 from '../../assets/design/office-ardeko-left/big/22.jpg'
import bigImg23 from '../../assets/design/office-ardeko-left/big/23.jpg'


import {useState} from "react";

function OfficeInStyleArDekoLeft(){
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
        [img20, bigImg20],
        [img21, bigImg21],
        [img22, bigImg22],
        [img23, bigImg23]
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
export default OfficeInStyleArDekoLeft;