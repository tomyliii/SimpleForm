import "./Step2.css";
const Step2 = ({ name, email, password, formIsDisplay, setFormIsDisplay }) => {
  return (
    <main>
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
    </main>
  );
};

export default Step2;
