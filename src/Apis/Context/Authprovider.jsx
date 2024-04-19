import { createContext } from "react";

export const Authcontext = createContext();
const Authprovider = ({ children }) => {
  const info = {
    atik: "rahad",
  };
  return <Authcontext.Provider value={info}>{children}</Authcontext.Provider>;
};

export default Authprovider;
