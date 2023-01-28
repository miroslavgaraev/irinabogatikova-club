import '../animation.css'

import '../mainStyle.css'

import img1 from '../assets/decor/main/preview (1).jpg'
import img2 from '../assets/decor/main/preview (2).jpg'
import img3 from '../assets/decor/main/preview (3).jpg'
import img4 from '../assets/decor/main/preview (4).jpg'
import img5 from '../assets/decor/main/preview (5).jpg'
import img6 from '../assets/decor/main/preview (6).jpg'
import img7 from '../assets/decor/main/preview (7).jpg'

function Decor() {
    const projects = [
        ['КАРНАВАЛЬНАЯ НОЧЬ', img7, '/Decor/CarnavalNight'],
        ['РАЙСКИЙ САД', img6, '/Decor/RjaskiySad'],
        ['ПРОВАНС НА ПОДМОСКОВНОЙ ДАЧЕ', img5, '/Decor/DachaProvans'],
        ['НОВОГОДНЕЕ ВОЛШЕБСТВО', img4, '/Decor/ChristmasMagic'],
        ['АЛЛЕЯ ЗВЕЗД ГСГ', img3, '/Decor/AlleyStars'],
        ['ОФОРМЛЕНИЕ СЦЕНЫ', img2, '/Decor/Scene'],
        ['ОФОРМЛЕНИЕ ФОТОЗОНЫ', img1, '/Decor/PhotoZone'],
    ]
    const items = projects.map((item) =>{
        return(
            <div className={'item'}>
                <a href={item[2]} className={'more-photo'}>
                    <img className={'item-img animation2'} src={item[1]}/>
                </a>
                <div className={'desc animation3'}>
                    <a href={item[2]} className={'desc-a'}>{item[0]}</a>
                </div>
            </div>
        )
    })

    return (
        <div className={'projects'}>
            {items}
        </div>
    );
}

export default Decor;