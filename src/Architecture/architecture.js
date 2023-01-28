import '../animation.css'

import '../mainStyle.css'

import img1 from '../assets/architecture/main/preview (1).jpg'
import img2 from '../assets/architecture/main/preview (2).jpg'
import img3 from '../assets/architecture/main/preview (3).jpg'
import img4 from '../assets/architecture/main/preview (4).jpg'
import img5 from '../assets/architecture/main/preview (5).jpg'
import img6 from '../assets/architecture/main/preview (6).jpg'
import img7 from '../assets/architecture/main/preview (7).jpg'
import img8 from '../assets/architecture/main/preview (8).jpg'
import img9 from '../assets/architecture/main/preview (9).jpg'
import img10 from '../assets/architecture/main/preview (10).jpg'
import img11 from '../assets/architecture/main/preview (11).jpg'
import img12 from '../assets/architecture/main/preview (12).jpg'

function Architecture() {
    const projects = [
        ['БЕСЕДКА, ЯРОСЛАВСКАЯ ОБЛАСТЬ', img1, '/Architecture/Alcove'],
        ['ПРОЕКТ ХИРУРГИЧЕСКОГО КОМПЛЕКСА', img2, '/Architecture/SurgicalComplex'],
        ['ДОМ В ИСПАНИИ', img3, '/Architecture/IspaniaHome'],
        ['КОНЦЕПТУАЛЬНЫЙ КРУГЛЫЙ ДОМ', img4, '/Architecture/CircleHome'],
        ['БАНК МОСКВЫ, ПРОСПЕКТ АНДРОПОВА', img5, '/Architecture/MoscowBank2'],
        ['БАНК МОСКВЫ, СТРОГИНСКИЙ БУЛЬВАР', img6, '/Architecture/MoscowBank'],
        ['ТАУНХАУСЫ НОВАЯ МОСКВА, СПОРТ ТАУН', img7, '/Architecture/TaunHouses'],
        ['КИНОЛОГИЧЕСКИЙ ЦЕНТР МВД', img8, '/Architecture/MVD'],
        ['НЕОНАТАЛЬНЫЙ ЦЕНТР', img9, '/Architecture/NeonatalCenter'],
        ['ДОМ OPENVILLAGE', img10, '/Architecture/OpenVillage'],
        ['ЮЖНОЕ БУТОВО, КОМПЛЕКС Г', img11, '/Architecture/SouthButovo'],
        ['ЗАГОРОДНЫЙ ДОМ', img12, '/Architecture/ForeignHome']
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

export default Architecture;