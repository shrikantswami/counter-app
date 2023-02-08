import React from "react";
import Button from '@mui/material/Button';
// import ButtonGroup from "@material-ui/core/ButtonGroup";

function GroupedButtons()  {
  state = { counter: 0 };

  handleIncrement = () => {
    setState(state => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    setState(state => ({ counter: state.counter - 1 }));
  };

    const displayCounter =  state.counter > 0;

    return (<>
      {/* <ButtonGroup size="small" aria-label="small outlined button group"> */}
        <Button onClick={ handleIncrement}>+</Button>
        {displayCounter && <Button disabled>{ state.counter}</Button>}
        {displayCounter && <Button onClick={ handleDecrement}>-</Button>}
     {/* </ButtonGroup> */}
    </>
    );
  
}

export default GroupedButtons;
