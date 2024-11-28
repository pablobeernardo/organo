import { useEffect, useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',

    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',

    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',

    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D86EBF',

    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FEBA05',

    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',

    }
  ]);


  const [colaboradores, setColaboradores] = useState([])
  
  useEffect(() => {
      fetch('http://localhost:8080/pessoas')
       .then(response => response.json())
       .then(data => setColaboradores(data))
       .catch(error => console.error('Error:', error))
       }, [])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const novoColaborador = { ...colaborador, id: uuidv4() };
    setColaboradores([...colaboradores, novoColaborador]);
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador =>
      colaborador.id === id
        ? { ...colaborador, favorito: !colaborador.favorito }
        : colaborador
    ));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      <section className='times'>
        {times.map((time, indice) =>
          <Time
            aoFavoritar={resolverFavorito}
            key={indice}
            id={time.id}
            nome={time.nome}
            cor={time.cor}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            mudarCor={mudarCorDoTime}
            aoDeletar={deletarColaborador}
          />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
