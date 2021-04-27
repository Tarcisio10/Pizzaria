import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Check = props => {
  return (
    <Form>
      <FormGroup tag="fieldset">
        <legend>*Obrigatório</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Borda Catupiry R$7,00
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Borda Requeijao R$6,00
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Sem borda recheada
          </Label>
        </FormGroup>
      </FormGroup>
    </Form>
  );
};

export default Check;
