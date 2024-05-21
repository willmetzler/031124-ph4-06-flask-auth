import { useState } from 'react'

function Login() {

  // SUBMIT EVENT

  function handleSubmit(e) {
    console.log(e)
  }

  // RENDER //

  return (
    <form className='user-form' onSubmit={handleSubmit}>

      <h2>Login</h2>

      <input type="text"
      placeholder='username'
      />

      <input type="text"
      placeholder='password'
      />

      <input type="submit"
      value='Login'
      />

    </form>
  )

}

export default Login
