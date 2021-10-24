import { useContext } from 'react';
import FormContext from '../../FormContext';

const Paso1 = () => {

  const {name, lastName, birthdate, email, disabledPaso1, 
         handleChangeName, handleChangeLastName, handleChangeBirthdate, handleChangeEmail} = useContext(FormContext);
  
  return (
    <section className="personal-data form-group">
      <h2 className="title"> Personal Data </h2>

      <input type="text" className="form-control form-control-lg" placeholder="Name" value={name} onBlur={handleChangeName}/>
      <input type="text" className="form-control form-control-lg" placeholder="Last name" value={lastName} onBlur={handleChangeLastName}/>
      <input type="text" className="form-control form-control-lg" placeholder="Birthdate" value={birthdate} onBlur={handleChangeBirthdate}/>
      <input type="text" className="form-control form-control-lg" placeholder="Enter email address" value={email} onBlur={handleChangeEmail}/>
    
      <button type="text" value="Next" disabled={disabledPaso1}> Next </button> 
    </section>
  )
}

export default Paso1;