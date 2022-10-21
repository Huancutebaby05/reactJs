function Car(infor) {
    return ( <div>
  <h2>I am a {infor.color} {infor.size} Car!</h2>
  <h2>User name: {infor.user.name}</h2>
  <h2>User age: {infor.user.age}</h2>
  </div>)
  }
  export default Car