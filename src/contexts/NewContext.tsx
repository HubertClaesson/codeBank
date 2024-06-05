import { createContext, useContext, ReactNode } from "react";


type ProviderProps = {
    children: ReactNode
}

type FunctionProps = {
    hello: () => void
}

// Creates a new context
const NewContext = createContext({} as FunctionProps);

export const useNewContext = () => {
    return useContext(NewContext);
}

// Export context provider
export const NewContextProvider = ({ children }: ProviderProps) => {
    const hello = () => {
        console.log('Hello')
    }
    return (
        <NewContext.Provider value={{ hello }}>
            {children}
        </NewContext.Provider>
    )
}