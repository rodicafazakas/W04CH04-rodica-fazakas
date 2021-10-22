const Paso1 = ({name, lastName, birthdate, email}) => {
  return (
    <section className="personal-data form-group">
      <h2 className="title"> Personal Data </h2>

      <input type="text" className="form-control form-control-lg" placeholder="Name" value={name} />
      <input type="text" className="form-control form-control-lg" placeholder="Last name" value={lastName} />
      <input type="text" className="form-control form-control-lg" placeholder="Birthdate" value={birthdate} />
      <input type="text" className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="Enter email address" value={email} />
    
    
    </section>
  )
}

export default Paso1;