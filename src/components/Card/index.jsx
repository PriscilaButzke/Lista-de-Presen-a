import './style.css'
import banana from '../../assets/banana.png' 

export function Card({nome,hora}){
    return(
        <div className='card'>
            <img src={banana} alt='ilustração de uma banana' />
            <strong>{nome}</strong>
            <small>{hora}</small>
        </div>
    )
}