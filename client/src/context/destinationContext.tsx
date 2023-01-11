import { duration } from "@mui/material";
import { createContext, ReactNode, useState } from "react";
import HikingTrailAdditionalInfoInterface from "../interfaces/HikingTrailAdditionalInfoInterface";

export const DestinationContext = createContext({ hikingTrailinfo: { duration: 0, difficulty: 1 }, addHikingTrailInfo: ( info: HikingTrailAdditionalInfoInterface) => { } });

export const DestinationContextProvider = ({ children }: { children: ReactNode }) => {
    const [hikingTrailinfo, setHikingTrailInfo] = useState<HikingTrailAdditionalInfoInterface>({ duration: 0, difficulty: 1 });
    
    const addHikingTrailInfo = (info: HikingTrailAdditionalInfoInterface) => {
        setHikingTrailInfo(info);
    }
    return (
        <DestinationContext.Provider value={{ hikingTrailinfo, addHikingTrailInfo }}>
            {children}
        </DestinationContext.Provider>
    )
}