import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Step2 from "./components/Step2/Step2";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordClass, setPasswordClass] = useState("");
  const [nameClass, setNameClass] = useState("");
  const [emailClass, setEmailClass] = useState("");
  const [confirmPasswordClass, setConfirmPasswordClass] = useState("");
  const [messageError, setMessageError] = useState("");
  const [infoPassword, setInfoPassword] = useState(
    "Votre mot de passe doit contenir au mininum une minuscule, une majuscule, un caractère spécial, un nombre et doit etre composé d'au moins 8 caractères."
  );
  const [infoPasswordClass, setInfoPasswordClass] = useState("");

  const [formIsDisplay, setFormIsDisplay] = useState(true);

  return (
    <>
      <Header />
      {formIsDisplay === true ? (
        <Form
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          passwordClass={passwordClass}
          nameClass={nameClass}
          emailClass={emailClass}
          confirmPasswordClass={confirmPasswordClass}
          messageError={messageError}
          formIsDisplay={formIsDisplay}
          infoPassword={infoPassword}
          infoPasswordClass={infoPasswordClass}
          setInfoPasswordClass={setInfoPasswordClass}
          setInfoPassword={setInfoPassword}
          setFormIsDisplay={setFormIsDisplay}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          setPasswordClass={setPasswordClass}
          setNameClass={setNameClass}
          setEmailClass={setEmailClass}
          setConfirmPasswordClass={setConfirmPasswordClass}
          setMessageError={setMessageError}
        />
      ) : (
        <Step2
          name={name}
          email={email}
          password={password}
          formIsDisplay={formIsDisplay}
          setFormIsDisplay={setFormIsDisplay}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
