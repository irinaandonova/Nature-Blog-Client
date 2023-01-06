import { createContext, ReactNode, useState } from "react";
import UserInterface from "../interfaces/UserInterface";

const initialValue: UserInterface = { id: 3, username: 'irina', email: 'irinaandonova97@gmail.com' };
export const AuthContext = createContext({ user: initialValue });

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserInterface>(initialValue);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

