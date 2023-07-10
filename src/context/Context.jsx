import { createContext, useState } from "react";

export const Context = createContext(null);


const AccountProvider = ({ children }) => {
    const [var1, setVar1] = useState();

    return (
        <Context.Provider value={{
            var1,
            setVar1
        }}>
            {children}
        </Context.Provider>
    )
}


export default AccountProvider;