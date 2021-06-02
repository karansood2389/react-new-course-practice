import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: undefined,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "PASS_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 6,
    };
  }
  if (action.type === "PASS_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: undefined,
  };
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });

  const ctx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [passwordIsValid, emailIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "PASS_INPUT", value: event.target.value });
    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: "INPUT_BLUR",
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: "PASS_BLUR",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.loginHandler(emailState.value, passwordState.value);
      return;
    }

    if (!emailIsValid) {
      emailInputRef.current.focus();
      return;
    }

    if (!passwordIsValid) {
      passwordInputRef.current.focus();
      return;
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          state={emailState}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          name="E-mail"
          ref={emailInputRef}
        />
        <Input
          type="password"
          state={passwordState}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          name="Password"
          ref={passwordInputRef}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

// useEffect(() => {
//   console.log('Effect called with empty dependency.');
//   return () => {
//     console.log('Clean up run after component un mounted.')
//   }
// },[]);

// useEffect(() => {
//   console.log('Effect runs after every mutation run.');
// })

/* <div
  className={`${classes.control} ${
    emailState.isValid === false ? classes.invalid : ''
  }`}
  >
  <label htmlFor='email'>E-Mail</label>
  <input
  type='email'
  id='email'
  value={emailState.value}
  onChange={emailChangeHandler}
  onBlur={validateEmailHandler}
  />
  </div> */

/* <div
    className={`${classes.control} ${
      passwordState.isValid === false ? classes.invalid : ""
    }`}
  >
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      value={passwordState.value}
      onChange={passwordChangeHandler}
      onBlur={validatePasswordHandler}
    />
  </div> */
