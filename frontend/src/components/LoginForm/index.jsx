import ChatGptSVG from "../../assets/chatgpt.svg";

const LoginForm = ({ input, setInput, loading, onSubmit }) => (
  <div className="min-h-screen flex items-center justify-center flex-col">
    <div className="flex items-center mb-10 flex-col space-y-1">
      <img src={ChatGptSVG} alt="ChatGptSVG" className="" />
      <h1 className="text-2xl font-semibold text-center">OPTI GPT</h1>
    </div>
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center gap-2 border rounded-box p-12"
    >
      <h2 className="text-2xl font-semibold text-center">Login</h2>
      <p>You can use below demo account for login</p>
      <p className="italic">admin / admin1234</p>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">username</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={input.username}
          onChange={(e) =>
            setInput({
              ...input,
              username: e.target.value,
            })
          }
          aria-label="Username"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">password</span>
        </div>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={input.password}
          onChange={(e) =>
            setInput({
              ...input,
              password: e.target.value,
            })
          }
          aria-label="Password"
        />
      </label>

      <button
        disabled={loading}
        className="w-full max-w-xs btn btn-outline mt-4"
      >
        {loading ? (
          <>
            <span className="loading loading-spinner" />
            <p>Loading...</p>
          </>
        ) : (
          "Login"
        )}
      </button>
    </form>
  </div>
);

export default LoginForm;
