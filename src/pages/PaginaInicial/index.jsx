import Footer from '../../components/Rodape';
import { useState, useEffect } from 'react';
import './style.css'
import { Card } from '../../components/Card'
// import minion from '../../assets/minion.png'

function PaginaInicial() {
    const [nomeAluno, setNomeAluno] = useState("Digite o nome do aluno...");
    const [alunos, setAlunos] = useState([]); //array
    const [usuario, setUsuario] = useState({ nome: " ", img: ""}) //ojbeto

    function adicionarAluno() {
        const novoAluno = {
            nome: nomeAluno,
            hora: new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            })
        }
        setAlunos(alunosAnteriores => [...alunosAnteriores, novoAluno])
    }

    // é executado todas as vezes que a pagina roda
    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
            setUsuario({
                nome: data.results[0].name.first, 
                img: data.results[0].picture.large
            })
        })
    },[])
    //toda vez que o aluno for atualizado vai rodar denovo, a cada letra

    return (
        <>
        <div className="container">
            <header>
                <div className='titulo'>
                <h1>Lista de Presença</h1>
                </div>
                <div className='user'>
                    <strong>{ usuario.nome} </strong>
                    <img src={usuario.img} alt='foto de usuário' />
                </div>
            </header>

            <input
                type="text"
                placeholder="Digite o nome"
                onChange={evento => setNomeAluno(evento.target.value)}
            />
            <button
                type="button"
                onClick={adicionarAluno}
            > Adicionar</button>

            {
                alunos.map(aluno =>
                    <Card
                        key={aluno.hora}
                        nome={aluno.nome}
                        hora={aluno.hora}
                    />)
            }
    
        </div>
        <Footer/>
        </>
    )
}
export default PaginaInicial