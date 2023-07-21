const Auth = () => {
  const isLogIn = false
  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogIn ? 'Please log in' : 'Please sign up!'}</h2>
          <input />
          <input />
          <input />
        </form>
      </div>
    </div>
  );
};

export default Auth;
