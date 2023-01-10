import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length >= 4;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    comment: true,
    number: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const numberInputRef = useRef();
  const cityInputRef = useRef();
  const commentInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPorstalCode = numberInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredCommentIsValid = !isEmpty(enteredComment);
    const enterednumberIsValid = isFiveChars(enteredPorstalCode);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      comment: enteredCommentIsValid,
      number: enterednumberIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enterednumberIsValid &&
      enteredCommentIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      comment: enteredComment,
      city: enteredCity,
      number: enteredPorstalCode,
    });
  };
  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const numberControlClasses = `${classes.control} ${
    formInputValidity.number ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;
  const commentControlClasses = `${classes.control} ${
    formInputValidity.comment ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={numberControlClasses}>
        <label htmlFor="number">Number</label>
        <input type="number" id="number" ref={numberInputRef} />
        {!formInputValidity.number && (
          <p>Please enter a valid number (9+ charecters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={commentControlClasses}>
        <label htmlFor="comment">Comment</label>
        <input type="text" id="comment" ref={commentInputRef} />
        {!formInputValidity.comment && <p>Please enter a valid Comment!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
