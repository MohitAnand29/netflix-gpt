import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg"
          alt="bg-logo"
        />
      </div>
      <form className="w-2/6 absolute p-12 bg-black z-20 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4 font- Helvetica Neue Segoe UI Roboto Ubuntu sans-serif">
          Sign In
        </h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-3 w-full bg-gray-800 rounded-lg bg-opacity-85"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-800 rounded-lg bg-opacity-85" 
        />
        <button className="p-4 my-4 bg-red-600 w-full rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
