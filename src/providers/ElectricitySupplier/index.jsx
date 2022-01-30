import { createContext, useContext, useState} from "react";
import { api } from "../../services/api";

const EletricContext = createContext();

export const ElectricProvider = ({children}) => {

    const [electric, setElectric] = useState([])

    const get_providers = (kwh) => {
        const token = localStorage.getItem("token");
        api.get(`/electric/limit/${kwh}`, {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        }).then((resp) => {
            setElectric(resp.data.data)
        })
    }

    return(
        <EletricContext.Provider
        value={{get_providers, electric}}
        >
            {children}
        </EletricContext.Provider>
    )
}

export const useElectric = () => useContext(EletricContext)
