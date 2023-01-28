import img1 from '../assets/teamImages/big/team.jpg'
import img2 from '../assets/teamImages/small/team2.jpg'
import img3 from '../assets/teamImages/small/team3.jpg'
import img4 from '../assets/teamImages/small/team4.jpg'
import img5 from '../assets/teamImages/small/team5.jpg'
import img6 from '../assets/teamImages/small/team6.jpg'
import img7 from '../assets/teamImages/small/team7.jpg'
import img8 from '../assets/teamImages/small/team8.jpg'
import img9 from '../assets/teamImages/small/team9.jpg'
import img10 from '../assets/teamImages/small/team10.jpg'
import img11 from '../assets/teamImages/small/team11.jpg'
import img12 from '../assets/teamImages/small/team12.jpg'
import img13 from '../assets/teamImages/small/team13.jpg'
import img14 from '../assets/teamImages/small/team14.jpg'
import img15 from '../assets/teamImages/small/team15.jpg'
import img16 from '../assets/teamImages/small/team16.jpg'
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

import '../animation.css'
import './teamAndOffice.css'
import BigImage from "./BigImage";
import {useState} from "react";

function TeamAndOffice() {
    const [onNextPage, setOnNextPage] = useState(false)
    const [imageName, setImageName] = useState(null)
    const previewImage = (imageName) =>{
        setOnNextPage(true)
        setImageName(imageName)
    }
    return (
        !onNextPage ?
        <div className={'animation'}>
           <img className={'first-image'} src={img1}/>
            <div className={'images'}>
                <button onClick={() => {previewImage(imgBig2)}} className={'button-with-img'}><img src={img2}/></button>
                <button onClick={() => {previewImage(imgBig3)}} className={'button-with-img'}><img src={img3}/></button>
                <button onClick={() => {previewImage(imgBig4)}} className={'button-with-img'}><img src={img4}/></button>
                <button onClick={() => {previewImage(imgBig5)}} className={'button-with-img'}><img src={img5}/></button>
                <button onClick={() => {previewImage(imgBig6)}} className={'button-with-img'}><img src={img6}/></button>
                <button onClick={() => {previewImage(imgBig7)}} className={'button-with-img'}><img src={img7}/></button>
                <button onClick={() => {previewImage(imgBig8)}} className={'button-with-img'}><img src={img8}/></button>
                <button onClick={() => {previewImage(imgBig9)}} className={'button-with-img'}><img src={img9}/></button>
                <button onClick={() => {previewImage(imgBig10)}} className={'button-with-img'}><img src={img10}/></button>
                <button onClick={() => {previewImage(imgBig11)}} className={'button-with-img'}><img src={img11}/></button>
                <button onClick={() => {previewImage(imgBig12)}} className={'button-with-img'}><img src={img12}/></button>
                <button onClick={() => {previewImage(imgBig13)}} className={'button-with-img'}><img src={img13}/></button>
                <button onClick={() => {previewImage(imgBig14)}} className={'button-with-img'}><img src={img14}/></button>
                <button onClick={() => {previewImage(imgBig15)}} className={'button-with-img'}><img src={img15}/></button>
                <button onClick={() => {previewImage(imgBig16)}} className={'button-with-img'}><img src={img16}/></button>
            </div>
        </div>
        :
        <div>
            <button className={'button'} onClick={() => {setOnNextPage(false)}}>&#129044;</button>
            <BigImage item={imageName}/>
        </div>
);
}

export default TeamAndOffice;