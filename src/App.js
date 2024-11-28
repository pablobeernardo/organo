import { useState } from 'react';
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

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Joao Nunes',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://githuh.com/joao.png',
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      nome: 'Maria Silva',
      cargo: 'Desenvolvedora Front-End',
      imagem: 'https://githuh.com/maria.png',
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      nome: 'Pedro Silva',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://githuh.com/pedro.png',
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      nome: 'Maria Nunes',
      cargo: 'Desenvolvedora Front-End',
      imagem: 'https://githuh.com/maria.png',
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      nome: 'Joao Silva',
      cargo: 'Desenvolvedor Front-End',
      imagem: 'https://githuh.com/joao.png',
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      nome: 'Maria Nunes',
      cargo: 'Desenvolvedora Front-End',
      imagem: 'https://githuh.com/maria.png',
      time: times[2].nome,
    }
  ]


  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const novoColaborador = {...colaborador, id:uuidv4()};
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
    setTimes([...times, {...novoTime, id: uuidv4() }])
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
        <h1>Minha organização</h1>
        {times.map((time, indice) =>
          <Time
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
