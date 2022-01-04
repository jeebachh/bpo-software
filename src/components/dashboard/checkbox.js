import React from 'react';
import { Form, FormGroup, Label, Input,Button } from 'reactstrap';

export default class Example1 extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Intrested
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
             <Input type="checkbox" /> Not Intrested
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
             <Input type="checkbox" /> Schedule Later
          </Label>
        </FormGroup>
        <Button>set time</Button>
        <FormGroup check inline>
          <Label check>
             <Input type="checkbox" /> Sale Completed
          </Label>
        </FormGroup>
      </Form>
    );
  }
}