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
        // return JSON.parse(userProfle);
      }
      return null;
    });
    
    // const login = async (payload) => {
    //   await axios.post("http://localhost:4000/auth/login", payload, {
    //     withCredentials: true,
    //   });
    //   let apiResponse = await axios.get("http://localhost:4000/user-profile", {
    //     withCredentials: true,
    //   });
    //   localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    //   setUser(apiResponse.data);
      
    // };
    return (
      <>
        {/* <AuthContext.Provider value={{ user, login }}> */}
        <AuthContext.Provider value={{ user }}>
          {children}
        </AuthContext.Provider>
      </>
    );
  };
   
export default AuthContext;