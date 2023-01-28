import React from "react";
import '../secondMainStyle.css'
import '../animation.css'
import imgBig2 from '../assets/teamImages/big/team2.jpg'
import imgBig3 from '../assets/teamImages/big/team3.jpg'
import imgBig4 from '../assets/teamImages/big/team4.jpg'
import imgBig5 from '../assets/teamImages/big/team5.jpg'
import imgBig6 from '../assets/teamImages/big/team6.jpg'
import imgBig7 from '../assets/teamImages/big/team7.jpg'
import imgBig8 from '../assets/teamImages/big/team8.jpg'
import imgBig9 from '../assets/teamImages/big/team9.jpg'
import imgBig10 from '../assets/teamImages/big/team10.jpg'
import imgBig11 from '../assets/teamImages/big/team11.jpg'
import imgBig12 from '../assets/teamImages/big/team12.jpg'
import imgBig13 from '../assets/teamImages/big/team13.jpg'
import imgBig14 from '../assets/teamImages/big/team14.jpg'
import imgBig15 from '../assets/teamImages/big/team15.jpg'
import imgBig16 from '../assets/teamImages/big/team16.jpg'

function BigImage(props){
    const src_img = props.item
    return(
        <div className={'full-size'}>
            <img className={'opacity'} src={src_img}/>
        </div>
    )
}
export default BigImage