import '../animation.css'
import imgMiami from '../assets/art-design/miami/big/1-.jpg'
import imgZHK from '../assets/art-design/zhk-marshala/big/image (1).jpg'
import imgArctica from './../assets/art-design/arctica/big/photo (6).jpg'
import imgSPB from './../assets/art-design/SPB/big/photo (1).jpg'
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
            <div className={'item'}>
                <a href={'/ArtDesign/Arctica'} className={'more-photo'}>
                    <img className={'item-img animation2'} src={imgArctica}/>
                </a>
                <div className={'desc animation'}>
                    <a href={'/ArtDesign/Arctica'} className={'desc-a'}>Проект АРКТИКА</a>
                </div>
            </div>
            <div className={'item'}>
                <a href={'/ArtDesign/SPB'} className={'more-photo'}>
                    <img className={'item-img animation2'} src={imgSPB}/>
                </a>
                <div className={'desc animation'}>
                    <a href={'/ArtDesign/SPB'} className={'desc-a'}>Проект в СПБ, улица Радищева</a>
                </div> 
            </div>
        </div>
    );
}
export default ArtDesign;