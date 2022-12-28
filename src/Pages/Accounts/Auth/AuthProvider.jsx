import AuthContext from "./AuthContext";
import React, {useState ,} from "react";

const AuthContextProvider = ({ children }) => {
    console.log('call is fine')
        const [user] = useState(() => {
          console.log('children')
          console.log(children)
          let userProfle = localStorage.getItem("userProfile");
          if (userProfle) {
            console.log('children')
            return null
            // return JSON.parse(userProfle);
          }
          return null;
        });
    
    return (
      <>
        {/* <AuthContext.Provider value={{ user, login }}> */}
        <AuthContext.Provider value={{ children }}>
          {children}
        </AuthContext.Provider>
      </>
    );
  };

export default AuthContextProvider;