import React from 'react';
import { Button } from 'reactstrap';

export default class Button1 extends React.Component {
  render() {
    return (
      <div>
        <Button color="danger">Call Again</Button>{' '}
        <Button color="success">save&</Button>{' '}
        <Button color="success"> Next</Button>
        
      </div>
    );
  }
}