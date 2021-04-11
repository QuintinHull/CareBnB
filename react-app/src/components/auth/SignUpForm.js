import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import { Modal, Button } from "react-bootstrap";

// const SignUpForm = ({ authenticated, setAuthenticated }) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");

//   const onSignUp = async (e) => {
//     e.preventDefault();
//     if (password === repeatPassword) {
//       const user = await signUp(firstName, lastName, email, password);
//       if (!user.errors) {
//         setAuthenticated(true);
//       }
//     }
//   };

//   const updateFirstName = (e) => {
//     setFirstName(e.target.value);
//   };

//   const updateLastName = (e) => {
//     setLastName(e.target.value);
//   };

//   const updateEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const updatePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const updateRepeatPassword = (e) => {
//     setRepeatPassword(e.target.value);
//   };

//   if (authenticated) {
//     return <Redirect to="/" />;
//   }

//   return (
//     <form onSubmit={onSignUp}>
//       <div>
//         <label>First Name</label>
//         <input
//           type="text"
//           name="firstName"
//           onChange={updateFirstName}
//           value={firstName}
//         ></input>
//       </div>
//       <div>
//         <label>Last Name</label>
//         <input
//           type="text"
//           name="lastName"
//           onChange={updateLastName}
//           value={lastName}
//         ></input>
//       </div>
//       <div>
//         <label>Email</label>
//         <input
//           type="text"
//           name="email"
//           onChange={updateEmail}
//           value={email}
//         ></input>
//       </div>
//       <div>
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           onChange={updatePassword}
//           value={password}
//         ></input>
//       </div>
//       <div>
//         <label>Repeat Password</label>
//         <input
//           type="password"
//           name="repeat_password"
//           onChange={updateRepeatPassword}
//           value={repeatPassword}
//           required={true}
//         ></input>
//       </div>
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;

const SignUpModal = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { authenticated, setAuthenticated } = props

  const switchToLogin = () => {
    props.setShowSignUp(false);
    props.setShowLogin(true);
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(firstName, lastName, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSignUp} style={{ textAlign: 'center' }}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={updateFirstName}
              value={firstName}
            ></input>
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={updateLastName}
              value={lastName}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div>
            <Button type="submit">Sign Up</Button>
            <Button onClick={switchToLogin}>Switch to Log in</Button>
          </div>

        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignUpModal