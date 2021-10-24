const Paso2 = ({username, password, repeatPassword, activeClass, accessDataClass}) => {
  return (
    <section className={`${accessDataClass} form-group`}>
      <h2 className="title"> Access Data </h2>

      <input type="text" className="form-control form-control-lg" placeholder="Username" vale={username}/>
      <input type="password" className="form-control form-control-lg" aria-describedby="passwordHelpBlock" placeholder="Password" value={password}/>
      <small id="passwordHelpBlock" className="form-text text-muted">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </small>
      <input type="password" className="form-control form-control-lg" aria-describedby="passwordHelpBlock" placeholder="Reapeat password" value={repeatPassword}/>

      <button type="text" className={activeClass} value="Back" disabled> Back </button> 
      <button type="text" className={activeClass} value="Next" disabled> Next </button> 
    </section>
  )
}

export default Paso2;