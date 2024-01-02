const LoginPage = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Log in</button>
      <label htmlFor="remberme">Rember me</label>
      <input type="checkbox" id="remberme" />
      <a href="#">Forgot Password</a>
    </div>
  );
};

export default LoginPage;
