
import { createUserWithEmailAndPassword } from "firebase/auth";
import Axiospublic from "../../../Apis/Axiospublic";
import { Link } from "react-router-dom";



const Registerform = () => {
  

  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const dateOfBirth = form.dateOfBirth.value;
    const user = {
      name,
      email,
      dateOfBirth,
    };
    console.log(name, email, password, dateOfBirth);
    await createUserWithEmailAndPassword( email, password)
      .then((res) => {
        console.log(res);
        Axiospublic
          .post(`http://localhost:5000/user`, user)
          .then((res) => {
            console.log(res.data);
            
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="px-5">
      <form onSubmit={handleSignup} className="space-y-5">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            name="name"
            className="grow"
            placeholder="Username"
          />
        </label>
        <label className="input input-bordered outline-none flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>

        <label className="input relative input-bordered outline-none flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            name="password"
            className="grow"
            placeholder="Password"
          />
        </label>
        <label className="input relative input-bordered outline-none flex items-center gap-2">
          <input
            type="date"
            className="grow"
            name="dateOfBirth"
            placeholder="date of birth"
          />
        </label>
        <label className="flex hover:underline items-center gap-4">
          <input
            type="checkbox"
            onChange={(event) =>
              event.target.checked === true
                ? document.getElementById("submit")?.removeAttribute("disabled")
                : document
                    .getElementById("submit")
                    ?.setAttribute("disabled", "")
            }
          />
          Tarms & Conditions
        </label>
        <div className="flex items-center justify-between">
          <input
            disabled
            id="submit"
            className={`btn btn-success text-white`}
            type="submit"
            value={"Register"}
          />
          <Link to="/login">Already have account</Link>
        </div>
      </form>
    </div>
  );
};

export default Registerform;
