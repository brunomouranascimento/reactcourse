import React, { Component } from 'react';
import styles from './App.module.scss';

import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'1a', name: 'Bruno Nacimento', age: 30},
      { id:'1b', name: 'Max', age: 28},
      { id:'1c', name: 'Stephanie', age: 29}
    ]
  };
  
  nameChangedHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
      this.setState( { persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState ({
      showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render () {
    
    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   color: 'white',
    //   cursor: 'pointer'
    // };
    // Estilização inline é aplicada quando não queremos que o css sobrescreva o estilo de outra classe

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => (
          <Person 
            key={index} 
            name={person.name} 
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}>
              My hobbies: Racing
          </Person>
        ))}
        </div>
      )
    }

    //NgClass:
    let classes = [];
    if (this.state.persons.length <= 2 ) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1 ) {
      classes.push('bold');
    }
    
    return (
      <div className={styles.App}>
        <h1>Hi, I'm React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
        className={classes.join(' ')}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}       
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
    
    
    // ng-if:
    // { this.state.showPersons ?
    //   <div >

    //   </div> : null
    // }

    // ng-if do jeito certo
    /*

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
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
      )
    }
    return (
      <div className="App">

        {persons}       
      </div>
    );
    */

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