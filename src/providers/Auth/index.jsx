import { createContext, useContext, useState} from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router";
import toast from "react-hot-toast"


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const token = localStorage.getItem("token") || "";
    const history = useNavigate()

    const [isLogged, setIsLogged] = useState(
        localStorage.getItem("token") ? true : false
    )
    
    const signIn = (data) => {
        api.post("/users/login", data)
        .then((resp) => {
            toast.success("Logado com sucesso")
            localStorage.setItem("token",resp.data.access_token)
            setIsLogged(true)
            history("/")
        })
        .catch((error) => {
            toast.error("Erro ao Logar")
        })
        
    }

    const signOut = () => {
        localStorage.clear();
        history("/login")
        return window.location.reload()
    }

    return(
        <AuthContext.Provider
        value={{signIn,signOut, isLogged, setIsLogged}}
        >
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
