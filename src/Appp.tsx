import React from 'react';
import Button from './Component/button';
import { Alert } from 'bootstrap';


function Appp() {
  return (
    <div>
      <Alert>MY Alert</Alert>
      <Button onClick={()=> console.log("clicked")}></Button>   // primary seondary is used for changing the button color
    </div>
  );
}

export default Appp;




/* const items = ["faizan", "nasim", "hh", "js"];

<Alert>
        hello
      </Alert>    this this the part of alert
  
  const handleSelectitem = (item: string) => {
    console.log(item);
  }   <ListGroup items={items} heading="cities" onSelectItem={handleSelectitem} /> */