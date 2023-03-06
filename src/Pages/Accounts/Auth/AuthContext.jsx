import { createContext, useState } from "react";


const AuthContext  = createContext({});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
      console.log('children')
      console.log(children)
      let userProfle = localStorage.getItem("userProfile");
      if (userProfle) {
        console.log('children')
        return null
      }
      return null;
    });
    
    return (
      <>
        <AuthContext.Provider value={{ user }}>
          {children}
        </AuthContext.Provider>
      </>
    );
  };
   
export default AuthContext;