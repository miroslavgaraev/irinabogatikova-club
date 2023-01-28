import '../animation.css'
import imgMiami from '../assets/art-design/miami/big/1-.jpg'
import imgZHK from '../assets/art-design/zhk-marshala/big/image (1).jpg'
import '../mainStyle.css'
import {Route, Routes} from "react-router-dom";
function ArtDesign() {
    return (
        <div className={'projects'}>
            <div className={'item'}>
                <a href={'/ArtDesign/ArtMiami'} className={'more-photo'}>
                    <img className={'item-img animation'} src={imgMiami}/>
                </a>
                <div className={'desc animation'}>
                    <a href={'/ArtDesign/ArtMiami'} className={'desc-a'}>Проект Арт-Майами</a>
                </div>
            </div>
            <div className={'item'}>
                <a href={'/ArtDesign/ZHKMarshala'} className={'more-photo'}>
                    <img className={'item-img animation2'} src={imgZHK}/>
                </a>
                <div className={'desc animation'}>
                    <a href={'/ArtDesign/ZHKMarshala'} className={'desc-a'}>Проект ЖК Маршал</a>
                </div>
            </div>
        </div>
    );
}

export default ArtDesign;