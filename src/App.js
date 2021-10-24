import { useState } from 'react';
import './App.css';
//import Paso1 from './components/Paso1/Paso1';
//import Paso2 from './components/Paso2/Paso2';
//import Paso3 from './components/Paso3/Paso3';



function App() {
  const initialData = {
    name: undefined,
    lastName: undefined,
    birthdate: undefined,
    email: undefined,
    username: undefined,
    password: undefined,
    disabledPaso1: true,
  };

  const [inputFields, setInputFields] = useState(initialData);

  const [personalDataClass, setPersonalDataClass] = useState ("form-group");
  const [accessDataClass, setAccessDataClass] = useState ("off");
  const [loginDataClass, setLoginDataClass] = useState("off");

  // const resetForm = () => {
  //   setInputFields(initialData);
  // };


  const handleChangeName = (event) => {
    event.preventDefault();
    inputFields.name = event.currentTarget.value;

    if (inputFields.name !== undefined && inputFields.lastName !== undefined 
    && inputFields.birthdate !== undefined && inputFields.email !== undefined) {
      inputFields.disabledPaso1 = false;
    }

    setInputFields({
      name: inputFields.name,
      lastName: inputFields.lastName,
      birthdate: inputFields.birthdate,
      email: inputFields.email,
      username: inputFields.username,
      password: inputFields.password,
      disabledPaso1: inputFields.disabledPaso1,
    });
  }

  const handleChangeLastName = (event) => {
    event.preventDefault();
    inputFields.lastName = event.currentTarget.value;

    if (inputFields.name !== undefined && inputFields.lastName !== undefined 
    && inputFields.birthdate !== undefined && inputFields.email !== undefined) {
      inputFields.disabledPaso1 = false;
    }

    setInputFields({
          name: inputFields.name,
          lastName: inputFields.lastName,
          birthdate: inputFields.birthdate,
          email: inputFields.email,
          username: inputFields.username,
          password: inputFields.password,
          disabledPaso1: inputFields.disabledPaso1,
    }); 
   }

  const handleChangeBirthdate = (event) => {
    event.preventDefault();
    inputFields.birthdate = event.currentTarget.value;
    
    if (inputFields.name !== undefined && inputFields.lastName !== undefined 
    && inputFields.birthdate !== undefined && inputFields.email !== undefined) {
      inputFields.disabledPaso1 = false;
    }

    setInputFields({
          name: inputFields.name,
          lastName: inputFields.lastName,
          birthdate: inputFields.birthdate,
          email: inputFields.email,
          username: inputFields.username,
          password: inputFields.password,
          disabledPaso1: inputFields.disabledPaso1,
    });  
  }

  const handleChangeEmail = (event) => {
    event.preventDefault();
    inputFields.email = event.currentTarget.value;
 
    if (inputFields.name !== undefined && inputFields.lastName !== undefined 
    && inputFields.birthdate !== undefined && inputFields.email !== undefined) {
      inputFields.disabledPaso1 = false;
    }

    setInputFields({
      ...inputFields,
      email: event.currentTarget.value
    });

    setInputFields({
          name: inputFields.name,
          lastName: inputFields.lastName,
          birthdate: inputFields.birthdate,
          email: inputFields.email,
          username: inputFields.username,
          password: inputFields.password,
          disabledPaso1: inputFields.disabledPaso1,
    });  
  }

  const hidePaso1 = () => {
    setPersonalDataClass("off form-group");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputFields(inputFields);

    if (inputFields.name !== undefined && inputFields.lastName !== undefined 
        && inputFields.birthdate !== undefined && inputFields.email !== undefined) {
          setAccessDataClass("form-group")
    }

    if (inputFields.name !== undefined && inputFields.lastName !== undefined 
        && inputFields.birthdate !== undefined && inputFields.email !== undefined 
        && inputFields.username !== undefined && inputFields.password !== undefined) {
          setLoginDataClass("form-group")
    }

    //resetForm();
  };

  return (
      <div className="container">
          <main className="main-content wrapper"> 
            <form onSubmit={handleSubmit}>

              <section className={`${personalDataClass} form-group`}>
                <h2 className="title"> Personal Data </h2>

                <input type="text" className="form-control form-control-lg" placeholder="Name"  onBlur={handleChangeName}/>
                <input type="text" className="form-control form-control-lg" placeholder="Last name"  onBlur={handleChangeLastName}/>
                <input type="text" className="form-control form-control-lg" placeholder="Birthdate" onBlur={handleChangeBirthdate}/>
                <input type="text" className="form-control form-control-lg" placeholder="Enter email address"  onBlur={handleChangeEmail}/>
              
                <button type="text" disabled={inputFields.disabledPaso1} onClick={hidePaso1}> Next </button> 
              </section>

              <section className={`${accessDataClass} form-group`}>
                <h2 className="title"> Access Data </h2>

                <input type="text" className="form-control form-control-lg" placeholder="Username"/>
                <input type="password" className="form-control form-control-lg" aria-describedby="passwordHelpBlock" placeholder="Password"/>
                <small id="passwordHelpBlock" className="form-text text-muted">
                  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </small>
                <input type="password" className="form-control form-control-lg" placeholder="Repeat password" />

                <button type="text" disabled> Back </button> 
                <button type="text" disabled> Next </button> 
              </section>

            <section className={`${loginDataClass} form-group`}>
                <h2 className="title"> Login Data </h2>

                <input type="text" className="form-control form-control-lg" placeholder="Username"/>
                <input type="password" className="form-control form-control-lg" placeholder="Password" />
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                  <label className="form-check-label" htmlFor="autoSizingCheck">
                    Remember password
                  </label>
                </div>
                <button type="text" > Back </button> 
                <button type="submit"  > Submit </button>
                
            </section>

            </form>
          </main>
      </div>
  );
}

export default App;
