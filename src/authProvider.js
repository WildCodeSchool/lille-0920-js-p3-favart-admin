import axios from "axios";
import { useHistory } from "react-router-dom";

let history = useHistory();



const authProvider = {
    login: ( data ) =>  {
        axios.post("http://localhost:3001/auth/login", data)
        .then((res) => {
      setToken(res.data);
      history.push("/auth_react_admin");
        })},

              
        

  
        checkError: (error) => {
            const status = error.status;
            if (status === 401 || status === 403) {
                localStorage.removeItem('auth');
                return Promise.reject({ message: false });
            }
            // other error code (404, 500, etc): no need to log out
            return Promise.resolve();
        },
        checkAuth: () => {
            return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
        },

        logout: () => {
            localStorage.removeItem('token');
            localStorage.removeItem('permissions');
            return Promise.resolve();
        },
        getPermissions: () => {
            const role = localStorage.getItem('permissions');
            return role ? Promise.resolve(role) : Promise.reject();
        }
};

export default authProvider;

































/*import axios from "axios";
const jwt = require("jsonwebtoken");

const authProvider = {
    login:(mail, password) => {
        axios.post('http://localhost:5050/auth_react_admin',(mail,password))
            .then(({mail,password}) => {
                if((mail !== mail) || (password !==password) ){
                    return "done";
                } else{
                    if (mail === mail && password===password)
                    return 
                    Promise.resolve();
                }
                
                
            }
            
            )
        },


    checkAuth: params => Promise.resolve(),

    getPermissions: params => Promise.resolve(),
}
export default authProvider;*/