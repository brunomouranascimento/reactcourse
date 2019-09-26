import React from 'react';

import './Person.scss'

const Person = (props) => {
    return (
    <div className="Person">
        <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    );
};

export default Person;


//this.props acessa as propriedades do componente, e cria as propriedades dinamicamente conforme o nome definido.
//this.props.children refere-se ao "transclude" do React. TO-DO: pesquisar como fazer dois transcludes.
