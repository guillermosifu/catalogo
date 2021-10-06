import React, {Component} from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {
state = {
  termino:'',
  imagenes: [],
  pagina:'',
}
paginaAnterior = ()=>{
  console.log('anterior...')
}
paginaSiguiente = ()=>{
  
}
consultarApi = () =>{
  const termino = this.state.termino;
  const url = `https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=${termino}&per_page=30`;

  //console.log(url);
fetch(url)
.then(respuesta => respuesta.json())
.then(resultado => this.setState({imagenes : resultado.hits }))

}


datosBusqueda = (termino) => {
  this.setState({
    termino:termino,
    pagina:1
  }, () => {
    this.consultarApi();
  })
}
  

  render(){
  return (
    
    <div className="container mt-5">
      <div className="jumbotron">
      <p className="lead text-center">Buscador de Imagenes</p>
      <Buscador
      datosBusqueda={this.datosBusqueda}/>
      </div>
      
          <Resultado 
          imagenes ={this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}
      />
     
    </div>
  );
  }
}


export default App;
