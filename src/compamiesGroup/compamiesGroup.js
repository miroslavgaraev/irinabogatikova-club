import logo1 from '../assets/logo.jpg'
import './companiesGroup.css'
function CompaniesGroup(){
    const companies  = [
        [logo1,
         'Клуб Ирины Богатиковой',
        'Головная компания, реализует проекты полного цикла.' +
        'Сопровождает в процессе проектирования, реализации и последующего обслуживания VIP-клиентов.' +
        'Предоставляет особые условия для постоянных клиентов',
        'irinabogatikova.club'
        ],

        [logo1,
        'О Провансе',
        "Дизайн интерьера, декорирование, оформоение мероприятий, организация фотоссесий и свадеб в стилях Прованс и Лофт",
        "oprovanse.ru"
        ],

        [logo1,
        'Green Time',
        "Флористика для мероприятий, букеты из живых и искуственных растений для дома и офиса, озеленение квартир и офисов, ландшафтный дизайн, благоустройство участка",
         "greentime.рш"
        ],

        [logo1,
            'We masters',
            'Строительство, ремонт и отделка домов, квартир, офисов, отелей, магазинов. Выполняет комплекс работ с последующим гарантийным обслуживанием.',
            "wemasters.ru"
        ]
    ]

    const companiesArray = companies.map((item) => {
        return(
            <div className={'company'}>
                <img className={'company-img'} src={item[0]}/>
                <div className={'company-text'}>
                    <p className={'company-title'}>{item[1]}</p>
                    <p className={'company-desc'}>{item[2]}</p>
                    <p className={'company-site'}>{item[3]}</p>
                </div>
            </div>
        )
    })

    return (
        <div className={'companies-group'}>
            {companiesArray}
        </div>
    )
}
export default CompaniesGroup