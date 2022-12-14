import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react"

import api from "../api"

const Context = createContext()

export function AuthProvider(props){
    const [IsAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) {
            setIsAuthenticated(true);
            api.defaults.headers.common["Authorization"] = token
        }

    }, [])
    return(
        <Context.Provider  
        value = {[IsAuthenticated, setIsAuthenticated]} >
           {props.children}
        </Context.Provider>
    );
};

export function useAuthContext(){
    return(
            useContext(Context)
    )
}