function UserDetails({currentUser}) {

    return (
      <div className='user-details'>
        <h2>Welcome {currentUser.username}!</h2>
        <button>Logout</button>
      </div>
    )
  
  }
  
  export default UserDetails
  