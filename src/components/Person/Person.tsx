import React from 'react';
import './Person.css';
import 'bootstrap/dist/css/bootstrap.css';

const Person = (props: any) => (
    <div className="card" style={{ width: '12rem' }}>
        <img className="card-img-top" src={props.picture} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <a href="#" className="btn btn-primary">Meet Now!</a>
        </div>
    </div>
);

export default Person;
