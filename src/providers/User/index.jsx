import { createContext, useContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {api} from "../../services/api";
import toast from "react-hot-toast"


const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState()
    const history = useNavigate();
    const token = localStorage.getItem("token");
    
    const createAccount= (x) => {
        const {repeatPassword, ...data} = x
        api.post("/users",data).then(() =>{
            toast.success("Sucesso ao criar conta! ")
            history("/login")
        }).catch(() =>
            toast.error("Erro ao criar conta!")
        )
    }

    

    const get_user = () => {
        api.get("/users", {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        }).then((resp) => {
            setUser(resp.data.data)
        })
       
    }

    return(
        <UserContext.Provider
        value={{
            get_user, createAccount, user
        }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
