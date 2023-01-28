import img from '../../assets/architecture/single-photos/3.jpg'
import '../../secondMainStyle.css'

function Moscowbank(){
    return(
        <div className={'full-size-photo'}>
            <a className={'back'} href={'/Architecture'}>&#129044;</a>
            <img src={img}/>
        </div>
    )
}
export default Moscowbank