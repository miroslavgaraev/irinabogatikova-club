import {useState} from "react";
import './contacts.css'
import '../secondMainStyle.css'
import img1 from "../assets/contacts/small/1.jpg";
import bigImg1 from "../assets/contacts/big/1.jpg";
import img2 from "../assets/contacts/small/2.jpg";
import bigImg2 from "../assets/contacts/big/2.jpg";
import img3 from "../assets/contacts/small/3.jpg";
import bigImg3 from "../assets/contacts/big/3.jpg";
import img4 from "../assets/contacts/small/4.jpg";
import bigImg4 from "../assets/contacts/big/4.jpg";
import img5 from "../assets/contacts/small/5.jpg";
import bigImg5 from "../assets/contacts/big/5.jpg";
import img6 from "../assets/contacts/small/6.jpg";
import bigImg6 from "../assets/contacts/big/6.jpg";
import img7 from "../assets/contacts/small/7.jpg";
import bigImg7 from "../assets/contacts/big/7.jpg";
import img8 from "../assets/contacts/small/8.jpg";
import bigImg8 from "../assets/contacts/big/8.jpg";
import img9 from "../assets/contacts/small/9.jpg";
import bigImg9 from "../assets/contacts/big/9.jpg";
import img10 from "../assets/contacts/small/10.jpg";
import bigImg10 from "../assets/contacts/big/10.jpg";
import img11 from "../assets/contacts/small/11.jpg";
import bigImg11 from "../assets/contacts/big/11.jpg";
import img12 from "../assets/contacts/small/12.jpg";
import bigImg12 from "../assets/contacts/big/12.jpg";
import img13 from "../assets/contacts/small/13.jpg";
import bigImg13 from "../assets/contacts/big/13.jpg";
import img14 from "../assets/contacts/small/14.jpg";
import bigImg14 from "../assets/contacts/big/14.jpg";
import img15 from "../assets/contacts/small/15.jpg";
import bigImg15 from "../assets/contacts/big/15.jpg";
import img16 from "../assets/contacts/small/16.jpg";
import bigImg16 from "../assets/contacts/big/16.jpg";
import img17 from "../assets/contacts/small/17.jpg";
import bigImg17 from "../assets/contacts/big/17.jpg";
import img18 from "../assets/contacts/small/18.jpg";
import bigImg18 from "../assets/contacts/big/18.jpg";
import img19 from "../assets/contacts/small/19.jpg";
import bigImg19 from "../assets/contacts/big/19.jpg";
import img20 from "../assets/contacts/small/18.jpg";
import bigImg20 from "../assets/contacts/big/18.jpg";
import img21 from "../assets/contacts/small/19.jpg";
import bigImg21 from "../assets/contacts/big/19.jpg";

function Contacts(){
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
    ]
    const items = images.map((item) =>{
        return (
            <button className={'button-with-img animation2'} onClick={() => {previewImage(item[1])}}><img className={'gallery-image'} src={item[0]}/></button>
        )
    })
    return(
        !onNextPage ?
        <div className={'contacts-page'}>
            <div className={'contacts-text'}>
                <p className={'contacts-title'}>КЛУБ ИРИНЫ БОГАТИКОВОЙ</p>
                <p className={'contacts-desc'}>АРХИТЕКТУРА. ДИЗАЙН. ДЕКОР. ИНВЕСТИЦИИ В НЕДВИЖИМОСТЬ.</p>
                <p className={'location'}>МОСКВА, НАРЫШКИНСКАЯ АЛЛЕЯ, Д.5, С.2, ОФИС 223</p>
                <div className={'contacts'}>
                    <p>club@irinabogatikova.club</p>
                    <p>+7(495)-612-30-96</p>
                    <p>+7(985)-227-92-57</p>
                    <a target={'_blank'} href={'https://t.me/club_art_Q_by_Irina_Bogatikova'}>Telegram</a>
                    <a target={'_blank'} href={'https://instagram.com/irina_bogatikova_creator?igshid=YmMyMTA2M2Y='}>Instagram</a>
                </div>
            </div>    
            <div className={'gallery'}>
                {items}
            </div>
        </div>
        :
        <div className={'full-size-photo'}>
            <button className={'button'} onClick={() => {setOnNextPage(false)}}>&#129044;</button>
            <img className={'opacity'} src={imageName}/>
        </div>
    );
}

export default Contacts;