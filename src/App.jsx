import React, { Component } from 'react';
import './App.scss';

import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bruno Nacimento', age: 30},
      { name: 'Max', age: 28},
      { name: 'Stephanie', age: 29}
    ]
  };
  
  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
        { name: newName, age: 31},
        { name: 'John', age: 25},
        { name: 'Joseph', age: 21}
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Paulo', age: 31},
        { name: event.target.value, age: 25},
        { name: 'Joseph', age: 21}
      ]
    });

  }

  render () {
    /*
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    Estilização inline é aplicada quando não queremos que o css não sobrescreva o estilo de outra classe

    */
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button 
        onClick={() => this.switchNameHandler('Paulo')}>Switch name</button>
        {this.state.persons.map(person => (
          <Person 
            key={person.name} 
            name={person.name} 
            age={person.age}
            click={() => this.switchNameHandler('Paulo')}
            changed={this.nameChangedHandler}>
              My hobbies: Racing
          </Person>
        ))}
      </div>
    );
  }

}

export default App;


 // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!')); <-- Retorna essa compilação.
    // class, for, etc são palavras reservadas do JS, por isso são utilizadas de forma diferente no React.
    // Tudo deve estar dentro de um elemento raiz, como uma div.
    // Props allow you to pass data from a parent (wrapping) component to a child (embedded) component.
    // Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.
    // setState permite alterar propriedades do state alterando o DOM diretamente

    // Stateless component é utilizado para componentes que não precisam de gerenciamento de estado, componentes de apresentação apenas. Criar o máximo de componentes possível.
    // Stateful component é utilizado para componentes que necessitam de alteração de estado, que possuem métodos, etc.

// React Hooks:
// import React, { useState } from 'react';
// import './App.css';

// import Person from './components/Person/Person';

// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Bruno Nacimento', age: 30},
//       { name: 'Max', age: 28},
//       { name: 'Stephanie', age: 29}
//     ]
//   });

//   const switchNameHandler = () => {
//     setPersonsState({ 
//       persons: [
//         { name: 'Paulo', age: 31},
//         { name: 'John', age: 25},
//         { name: 'Marcelo', age: 21}
//       ]
//     });
//   };

//     return (
//       <div className="App">
//         <h1>Hi, I'm React App</h1>
//         <p>This is really working!</p>
//         <button onClick={switchNameHandler}>Switch name</button>
//         {personsState.persons.map(person => (
//           <Person key={person.name} name={person.name} age={person.age}>My hobbies: Racing</Person>
//         ))}
//       </div>
//     );
//   }


// export default App;