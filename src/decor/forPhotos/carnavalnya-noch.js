import '../../secondMainStyle.css'
import '../../animation.css'

import img1 from '../../assets/decor/karnavalnaya-noch/small/1.jpg'
import img2 from '../../assets/decor/karnavalnaya-noch/small/2.jpg'
import img3 from '../../assets/decor/karnavalnaya-noch/small/3.jpg'
import img4 from '../../assets/decor/karnavalnaya-noch/small/4.jpg'
import img5 from '../../assets/decor/karnavalnaya-noch/small/5.jpg'
import img6 from '../../assets/decor/karnavalnaya-noch/small/6.jpg'
import img7 from '../../assets/decor/karnavalnaya-noch/small/7.jpg'
import img8 from '../../assets/decor/karnavalnaya-noch/small/8.jpg'
import img9 from '../../assets/decor/karnavalnaya-noch/small/9.jpg'
import img10 from '../../assets/decor/karnavalnaya-noch/small/10.jpg'
import img11 from '../../assets/decor/karnavalnaya-noch/small/11.jpg'
import img12 from '../../assets/decor/karnavalnaya-noch/small/12.jpg'
import img13 from '../../assets/decor/karnavalnaya-noch/small/13.jpg'
import img14 from '../../assets/decor/karnavalnaya-noch/small/14.jpg'
import img15 from '../../assets/decor/karnavalnaya-noch/small/15.jpg'
import img16 from '../../assets/decor/karnavalnaya-noch/small/16.jpg'
import img17 from '../../assets/decor/karnavalnaya-noch/small/17.jpg'
import img18 from '../../assets/decor/karnavalnaya-noch/small/18.jpg'
import img19 from '../../assets/decor/karnavalnaya-noch/small/19.jpg'
import img20 from '../../assets/decor/karnavalnaya-noch/small/20.jpg'
import img21 from '../../assets/decor/karnavalnaya-noch/small/21.jpg'
import img22 from '../../assets/decor/karnavalnaya-noch/small/22.jpg'
import img23 from '../../assets/decor/karnavalnaya-noch/small/23.jpg'
import img24 from '../../assets/decor/karnavalnaya-noch/small/24.jpg'
import img25 from '../../assets/decor/karnavalnaya-noch/small/25.jpg'


import bigImg1 from '../../assets/decor/karnavalnaya-noch/big/1.jpg'
import bigImg2 from '../../assets/decor/karnavalnaya-noch/big/2.jpg'
import bigImg3 from '../../assets/decor/karnavalnaya-noch/big/3.jpg'
import bigImg4 from '../../assets/decor/karnavalnaya-noch/big/4.jpg'
import bigImg5 from '../../assets/decor/karnavalnaya-noch/big/5.jpg'
import bigImg6 from '../../assets/decor/karnavalnaya-noch/big/6.jpg'
import bigImg7 from '../../assets/decor/karnavalnaya-noch/big/7.jpg'
import bigImg8 from '../../assets/decor/karnavalnaya-noch/big/8.jpg'
import bigImg9 from '../../assets/decor/karnavalnaya-noch/big/9.jpg'
import bigImg10 from '../../assets/decor/karnavalnaya-noch/big/10.jpg'
import bigImg11 from '../../assets/decor/karnavalnaya-noch/big/11.jpg'
import bigImg12 from '../../assets/decor/karnavalnaya-noch/big/12.jpg'
import bigImg13 from '../../assets/decor/karnavalnaya-noch/big/13.jpg'
import bigImg14 from '../../assets/decor/karnavalnaya-noch/big/14.jpg'
import bigImg15 from '../../assets/decor/karnavalnaya-noch/big/15.jpg'
import bigImg16 from '../../assets/decor/karnavalnaya-noch/big/16.jpg'
import bigImg17 from '../../assets/decor/karnavalnaya-noch/big/17.jpg'
import bigImg18 from '../../assets/decor/karnavalnaya-noch/big/18.jpg'
import bigImg19 from '../../assets/decor/karnavalnaya-noch/big/19.jpg'
import bigImg20 from '../../assets/decor/karnavalnaya-noch/big/20.jpg'
import bigImg21 from '../../assets/decor/karnavalnaya-noch/big/21.jpg'
import bigImg22 from '../../assets/decor/karnavalnaya-noch/big/22.jpg'
import bigImg23 from '../../assets/decor/karnavalnaya-noch/big/23.jpg'
import bigImg24 from '../../assets/decor/karnavalnaya-noch/big/24.jpg'
import bigImg25 from '../../assets/decor/karnavalnaya-noch/big/25.jpg'


import {useState} from "react";

function KarnavalnayaNoch(){
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
        [img23, bigImg23],
        [img24, bigImg24],
        [img25, bigImg25],
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
export default KarnavalnayaNoch;