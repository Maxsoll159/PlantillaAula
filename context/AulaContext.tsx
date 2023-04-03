"use client"
import { createContext, useState } from "react";

export const AulaContext = createContext<any>("");

export const ContextAula = ({ children }:any) => {
    const [prueba, setPrueba] = useState<string>("Hola")

    return (
        <AulaContext.Provider value={{prueba}}>
            {children}
        </AulaContext.Provider>
    );
};