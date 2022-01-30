import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";
import { ElectricProvider } from "./ElectricitySupplier";

const Providers = ({children}) => {
    return(
        <AuthProvider>
            <UserProvider>
                <ElectricProvider>
                    {children}
                </ElectricProvider>
            </UserProvider>
        </AuthProvider>
    )
}

export default Providers;