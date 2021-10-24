const Paso3 = ({username, password, loginDataClass, activeClass}) => {
  return (
    <section className={`${loginDataClass} form-group`}>
      <h2 className="title"> Login Data </h2>

      <input type="text" className="form-control form-control-lg" placeholder="Username" value={username}/>
      <input type="password" className="form-control form-control-lg" aria-describedby="passwordHelpBlock" placeholder="Password" value={password}/>
      <div className="form-check mb-2">
        <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
        <label className="form-check-label" htmlFor="autoSizingCheck">
          Remember password
        </label>
      </div>
      <button type="text" className={activeClass} value="Back"> Back </button> 
      <button type="submit" value="Submit" > Submit </button>
      
    </section>
   
  )
}

export default Paso3;