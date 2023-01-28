import '../animation.css'
import '../mainStyle.css'

import img1 from '../assets/design/main/preview (1).jpg'
import img2 from '../assets/design/main/preview (2).jpg'
import img3 from '../assets/design/main/preview (3).jpg'
import img4 from '../assets/design/main/preview (4).jpg'
import img5 from '../assets/design/main/preview (5).jpg'
import img6 from '../assets/design/main/preview (6).jpg'
import img7 from '../assets/design/main/preview (7).jpg'
import img8 from '../assets/design/main/preview (8).jpg'

function Design() {
    const projects = [
        ['СЕМЕЙНЫЕ АПАРТАМЕНТЫ', img1, '/design/FamilyApartaments'],
        ['ЭСКИЗ АПАРТАМЕНТОВ В СТИЛЕ АР-НУВО', img2, '/design/ApartamentsStyleArNuvo'],
        ['ВИЗУАЛИЗАЦИЯ LUX-АПАРТАМЕНТОВ', img3, '/design/LuxApartaments'],
        ['АПАРТАМЕНТЫ В ИСТОРИЧЕСКОМ СТИЛЕ', img4, '/design/ApartamentsInHistoryStyle'],
        ['ОФИСЫ В ИСТОРИЧЕСКОМ ОСОБНЯКЕ', img5, '/design/OfficesInOsobnyak'],
        ['АПАРТАМЕНТЫ В СТИЛЕ ФЬЮЖН', img6, '/design/FyuzhnApartaments'],
        ['ОФИСЫ В СТИЛЕ АР-ДЕКО ПРАВОЕ КРЫЛО', img7, '/design/OfficeInStyleArDekoRight'],
        ['ОФИСЫ В СТИЛЕ АР-ДЕКО ЛЕВОЕ КРЫЛО', img8, '/design/OfficeInStyleArDekoLeft']
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

export default Design;