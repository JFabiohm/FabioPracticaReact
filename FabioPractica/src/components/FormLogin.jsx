import "../styles/Login.css"

function FormLogin() {
  return (
    <>

    
      <div id="body">
        

        <div id="login-box">
          <p>Login</p>
          <form>
            <div id="user-box">
              <input required="" name="" type="text" />
              <label>Email</label>
            </div>
            <div id="user-box">
              <input required="" name="" type="password" />
              <label>Password</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Entrar
            </a>
          </form>
          <p>
            Don't have an account?
            <a id="a2">
              Sign up!
            </a>
          </p>
        </div>



      </div>
    </>
  );
}
export default FormLogin;