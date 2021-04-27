import React, { useState } from "react";
import { Button, Fade } from "reactstrap";
import Check from "./checkbox";

const Example = props => {
  const [fadeIn, setFadeIn] = useState(false);

  const toggle = () => setFadeIn(!fadeIn);

  return (
    <div>
      <Button color="secondary" onClick={toggle}>
        Escolha a massa{" "}
        <img
          style={{ width: 32, marginRight: 5 }}
          src="https://firebasestorage.googleapis.com/v0/b/imagensfirebaseweb.appspot.com/o/LogoMakr-0fQ7Hk.png?alt=media&token=ab6969e9-28cf-465e-9967-fe4198c749fb"
        />
      </Button>
      <Fade in={fadeIn} tag="h5" className="mt-3">
        <Check />
      </Fade>
    </div>
  );
};

export default Example;
