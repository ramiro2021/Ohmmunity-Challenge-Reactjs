import React, { useState } from "react";

/* THE FIX STARTS HERE */

// state data for 3 counters
const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];

// Counter Component 1
const Counter = ({ value, clickHandler }) => {

  const [count, setcount] = useState(value);

  const onIncrement = (factor = 1) => {

    setcount(count + parseInt(factor))
    clickHandler(parseInt(factor));
  }

  const onDecrement = (factor = 1) => {

    setcount(count - parseInt(factor))
    clickHandler(parseInt(-factor));
  }

  return (
    <div className="d-flex my-2">
      <strong>{count}</strong>
      <div className="ml-2">
        <button className="btn btn-danger mr-1" onClick={() => onDecrement(1)}>-</button>
        <button className="btn btn-success" onClick={() => onIncrement(1)}>+</button>
      </div>
    </div>
  );
};

// Counter Component 2
/*const Counter = ({ value }) => {

  const [count, setcount] = useState(value);

  const onChangeValue = (event) => {
    setcount(parseInt(event.target.value));
  }

  return (
    <div className="d-flex my-2">
      <strong>{count}</strong>
      <div className="ml-2">
        <input placeholder="ingrese un valor" className="form-control" onChange={onChangeValue} ></input>


      </div>
    </div>
  );
};*/

const GroupOfCounters = () => {

  const [totalNumber, settotalNumber] = useState(0);
  const reciveFactor = (factor) => {
    settotalNumber(totalNumber => totalNumber + factor)

  }
  return (
    <>
      <div>
        {data.map((counter) => (
          <Counter clickHandler={reciveFactor} counter={counter} key={counter.id} value={counter.value} />
        ))}
      </div>


      <Total totalNumber={totalNumber} />

    </>
  );
};


const Total = ({ totalNumber }) => {
  return (
    <div>
      <p>
        <strong>Result : {totalNumber} </strong>

      </p>
    </div>
  );
};

/* THE FIX ENDS HERE */

const Exercise02 = () => {
  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>
        There are 2 components in this file: <strong>Counter</strong> and{" "}
        <strong>GroupOfCounters</strong>. The steps below will take you through
        modifying and adding components to change functionality and
        implementation.
      </p>

      <ol>
        <li>
          Update the <strong>Counter</strong> component to take{" "}
          <strong>onIncrement</strong> and <strong>onDecrement</strong>{" "}
          callbacks as props and ensure they update the counter's values
          independently. Each callback should take a single, integer value as a
          parameter which is the amount to increment the counter's existing
          value by.
        </li>

        <li>
          Move the global <strong>data</strong> array to the component state for
          the <strong>GroupOfCounters</strong> component.
        </li>

        <li>
          Render a fourth <strong>Counter</strong> component and ensure it's
          value is updated independently from the others.
        </li>

        <li>
          Create a <strong>Total</strong> component, which should display below
          the <strong>Counter</strong> components and always display the running
          total of all the <strong>Counter</strong> values.
        </li>

        <li>
          Make a copy of the <strong>Counter</strong> component, saving the
          original so you're instructor can view it later. Then do the
          following:
          <ol>
            <li>
              Remove the <strong>onIncrement</strong> and{" "}
              <strong>onDecrement</strong> props from the (new){" "}
              <strong>Counter</strong> component
            </li>
            <li>
              Add a single <strong>onChange</strong> callback prop that takes a
              single integer parameter — the new value for the counter.
            </li>
            <li>
              Ensure all <strong>Counter</strong> components still update and
              function independently after this change.
            </li>
          </ol>
        </li>
      </ol>

      <hr className="my-5" />

      <GroupOfCounters />


    </div>
  );
};

export default Exercise02;
