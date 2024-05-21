import { useState } from 'react'

function Signup() {

  // EVENTS //

  function handleSubmit(e) {
    console.log(e)
  }

  // RENDER //

  return (
    <form className='user-form' onSubmit={handleSubmit}>

      <h2>Signup</h2>

      <input type="text"
      placeholder='username'
      />

      <input type="text"
      placeholder='password'
      />

      <input type="submit"
      value='Signup'
      />

    </form>
  )

}

export default Signup
