import React from 'react'

const Signin = () => {
  return (
    <div>
    <form className='container mt-5'>
    <h1>SignIn To Continue iNews App</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input name='name' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input name='password' type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Confirm Password</label>
        <input name='confirmPass' type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
      </div>
      <button type="submit" class="btn btn-primary">SignIn</button>
    </form>
  </div>
  )
}

export default Signin
