import "./form.css";
import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordClass, setPasswordClass] = useState("");
  const [nameClass, setNameClass] = useState("");
  const [emailClass, setEmailClass] = useState("");
  const [confirmPasswordClass, setConfirmPasswordClass] = useState("");
  const [messageError, setMessageError] = useState("");

  const [formIsDisplay, setFormIsDisplay] = useState(true);

  const regexMail = new RegExp("[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]{2,3}");
  const regexpPasswordMaj = new RegExp("[A-Z]");
  const regexpPasswordMin = new RegExp("[a-z]");
  const regexpPasswordNoAlpha = new RegExp("\\W");
  const regexpPasswordNum = new RegExp("[0-9]");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameClass("");
    setEmailClass("");
    setPasswordClass("");
    setConfirmPasswordClass("");
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        if (
          password.length >= 8 &&
          regexpPasswordMaj.test(password) &&
          regexpPasswordMin.test(password) &&
          regexpPasswordNoAlpha.test(password) &&
          regexpPasswordNum.test(password)
        ) {
          if (regexMail.test(email)) {
            setFormIsDisplay(false);
            setMessageError("");
            setPasswordClass("");
            setNameClass("");
            setEmailClass("");
            setConfirmPasswordClass("");
          } else {
            setMessageError("Vous devez entrer une adresse mail valide.");
            setEmailClass("error");
          }
        } else {
          setMessageError(
            "Le mot est incorect.Veuillez entrer un mot de passe avec au moin une majuscule, une minuscule, un chiffre et d'une longueur de minimum 8 charactères"
          );
          setPasswordClass("error");
        }
      } else {
        setMessageError("Les mots de passe ne sont pas identiques.");
        setConfirmPasswordClass("error");
        setPasswordClass("error");
      }
    } else {
      setMessageError("Veuillez remplire tous les champs.");
      if (!name) {
        setNameClass("error");
      }
      if (!email) {
        setEmailClass("error");
      }
      if (!password) {
        setPasswordClass("error");
      }
      if (!confirmPassword) {
        setConfirmPasswordClass("error");
      }
    }
  };

  const handleChange = (set, event) => {
    console.log(event);
    const value = event.target.value;
    set(value);
  };

  return (
    <main>
      {formIsDisplay === true ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            className={nameClass}
            type="text"
            id="name"
            name="name"
            placeholder="Firstname Lastname"
            value={name}
            onChange={(event) => handleChange(setName, event)}
          />

          <label htmlFor="email">Email:</label>
          <input
            className={emailClass}
            value={email}
            type="text"
            id="email"
            name="email"
            placeholder="FirstnameLastname@mail.com"
            onChange={(event) => handleChange(setEmail, event)}
          />

          <label htmlFor="password">password:</label>
          <input
            className={passwordClass}
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(event) => handleChange(setPassword, event)}
          />

          <label htmlFor="confirm-password">Confirm your password:</label>
          <input
            className={confirmPasswordClass}
            type="password"
            id="confirm-password"
            placeholder="password"
            value={confirmPassword}
            onChange={(event) => handleChange(setConfirmPassword, event)}
          />
          {/* {messageError && <p className="alert">{messageError}</p>} */}
          {<p className="alert">{messageError}</p>}
          <button>Register</button>
        </form>
      ) : (
        <div>
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Password : {password}</p>
          <button
            onClick={() => {
              setFormIsDisplay(true);
            }}
          >
            Edit your infomations
          </button>
        </div>
      )}
    </main>
  );
};

export default Form;
