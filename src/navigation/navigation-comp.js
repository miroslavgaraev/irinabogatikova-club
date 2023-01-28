import './navigation.css'
import img from '../assets/navigation-image.png'
import Main from "../main/main";
import {useEffect, useState} from "react";

function Navigation(props) {

    const [menuDisplay, setMenuDisplay] = useState('flex')
    const [navDisplay, setNavDisplay] = useState('none')
    const [menuAnimName, setMenuAnimName] = useState('none')
    const [navAnimName, setNavAnimName] = useState('none')

    const setDisplay = () => {
        setMenuDisplay('none')
        setNavDisplay('flex')
    }
    const setDisplay2 = () =>{
        setMenuDisplay('flex')
        setNavDisplay('none')
    }
    const navOpen = () => {
        setMenuAnimName('button-back')
        setNavAnimName('nav-return')
        setTimeout(() => {setDisplay()}, 480)
    }
    const navHide = () =>{
        setNavAnimName('nav-back')
        setMenuAnimName('button-return')
        setTimeout(() => {setDisplay2()}, 480)
    }

    return (
        <div className={'nav'}>
            <div className={'menu'} id={'menu'} style={{display:menuDisplay, animationName:menuAnimName}}>
                <button onClick={() => {navOpen()}}>МЕНЮ</button>
            </div>
            <div className={'navigation'} id={'navigation'} style={{display:navDisplay, animationName:navAnimName}}>
                <button onClick={() => {navHide()}}>Закрыть</button>
                <a href={'/'}><img className={'navigation-image'} src={img}/></a>
                <div className={'links'}>
                    <div className={'aboutclub'}>
                        <a href={'/aboutclub'} className={'a-aboutclub'}>О КЛУБЕ</a>
                        <div className={'level2'}>
                            <a href={'/IrinaBogatikova'}>Ирина Богатикова</a>
                            <a href={'/TeamAndOffice'}>Команда и офис</a>
                        </div>
                    </div>
                    <a href={"/ArtDesign"}>АРТ-ДИЗАЙН</a>
                    <a href="/Architecture">АРХИТЕКТУРА</a>
                    <a href="/Design">ДИЗАЙН</a>
                    <a href="/Decor">ДЕКОР</a>
                    <a href="/Anticvariat">АНТИКВАРИАТ</a>
                    <a href="/ExclusiveFurniture">ЭКСКЛЮЗИВНАЯ МЕБЕЛЬ</a>
                    <a href="/CompaniesGroup">ГРУППА КОМПАНИЙ</a>
                    <a href="/ForSmi">ДЛЯ СМИ</a>
                    <a href="/Contacts">КОНТАКТЫ</a>
                    <a href="/AboutSite">О САЙТЕ</a>
                </div>
            </div>
        </div>
    );
}

export default Navigation;