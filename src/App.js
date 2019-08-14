import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Display from './components/DisplayComponents/Display';

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [displayValue, setDisplayValue] = useState(0);
  const [holdValue, setHoldValue] = useState();
  const [holdOperator, setHoldOperator] = useState();

  const handleDisplay = (item) => {
    if (item === '/' ||
        item === '*' ||
        item === '-' ||
        item === '+') {
          setHoldValue(displayValue);
          setHoldOperator(item);
        }

    if (item === '/' ||
        item === '*' ||
        item === '-' ||
        item === '+' ||
        displayValue === '/' ||
        displayValue === '*' ||
        displayValue === '-' ||
        displayValue === '+' ||
        displayValue === 0) {
      setDisplayValue(item);
    } else {
      setDisplayValue(displayValue => displayValue + item);
    }
  }

  const togglePolarity = () => {
    if (displayValue[0] === '-') setDisplayValue(displayValue => displayValue.slice(1));
    else setDisplayValue('-' + displayValue);
  }

  const takePercentage = () => {
    setDisplayValue(displayValue / 100);
  }

  const handleClear = () => {
    setDisplayValue(0);
  }

  const calculate = () => {
    const holdNum = Number(holdValue);
    const displayNum = Number(displayValue);

    switch(holdOperator) {
      case '/':
        setDisplayValue(holdNum / displayNum);
        break;
      case '*':
        setDisplayValue(holdNum * displayNum);
        break;
      case '-':
        setDisplayValue(holdNum - displayNum);
        break;
      case '+':
        setDisplayValue(holdNum + displayNum);
        break;
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display displayValue={displayValue} />
        <div className="buttons">
          <Specials handleClear={handleClear} togglePolarity={togglePolarity} takePercentage={takePercentage}/>
          <Numbers handleDisplay={handleDisplay}/>
          <Operators handleDisplay={handleDisplay} calculate={calculate}/>
        </div>
      </div>
    </div>
  );
}

export default App;
