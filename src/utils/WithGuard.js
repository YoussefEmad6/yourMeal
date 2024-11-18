//this is  protected route with a HOC

const WithGuard = (Component) => {
  const Wrapper = (props) => {
    const isLoggedIn = false;
    console.log(props)

    return isLoggedIn ? <Component {...props} /> : <div>Please logg in</div>;
  };
  return Wrapper;
};

export default WithGuard;
