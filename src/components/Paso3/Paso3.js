const Paso3 = ({username, password}) => {
  return (
    <section className="login-data wrapper form-group">
      <h2 className="title"> Login Data </h2>

      <input type="text" className="form-control form-control-lg" placeholder="Username" value={username}/>
      <input type="password" className="form-control form-control-lg" aria-describedby="passwordHelpBlock" placeholder="Password" value={password}/>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck" />
        <label class="form-check-label" for="autoSizingCheck">
          Remember password
        </label>
      </div>
    </section>
   
  )
}

export default Paso3;