const Login = () => {
  return (
    <div className="page">
      <h1 className="page-heading">Snail Pic Admin</h1>
      <form>
        <label htmlFor="name">Username</label>
        <input
          id="name"
          type="text"
          placeholder="Username"
          name="name"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button className="form-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
