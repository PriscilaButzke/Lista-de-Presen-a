import './style.css'
import Card from '../../components/Card'

function PaginaInicial(){
    return (
        <div className="container">
        <h1>Lista de Presença</h1>
        <input type="text" placeholder="Digite o nome"/>
        <button type="button">Adicionar</button>
        <Card 
        nome = "Prisila"
        hora = "21:40:30"
        />
        <Card nome = "Andriele"
         hora = "21:40:30"
         />

        </div>
    )
}
export default PaginaInicial