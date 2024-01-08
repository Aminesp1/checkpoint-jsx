import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from "./components/Name"
import Price from "./components/Price"
import path from "./components/Path"
import Description from "./components/Description"
import Path from './components/Path';
import React from 'react';



function App() {
  return (
    <div className='mycard'>
      <Card style={{ width: '25rem' }}>
      <Path/>
      <Card.Body>
        <Card.Title>
          <Name/>
        </Card.Title>
        <Card.Text>
         <Price/>
         <Description/>
        </Card.Text>
        <Button variant="primary"> Add </Button>
      </Card.Body>
    </Card>
   
    </div>
  );
}

export default App;
