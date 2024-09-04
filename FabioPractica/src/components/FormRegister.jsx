import "../styles/Register.css";

function FormRegister() {
  return (
    <>
      <div id="div_background">
        <div>
          <div id="login-box">
            <p>Register</p>
            <form>
              <div id="user-box">
                <input required="" name="" type="text" />
                <label>Nombre</label>
              </div>
              <div id="user-box">
                <input required="" name="" type="text" />
                <label>Email</label>
              </div>
              <div id="user-box">
                <input required="" name="" type="password" />
                <label>Password</label>
              </div>
              <a href="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Save
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default FormRegister;
