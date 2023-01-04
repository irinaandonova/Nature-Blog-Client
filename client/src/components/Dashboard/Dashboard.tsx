import { useEffect, useState } from "react";
import destinationServices from "../../services/destinationServices";
import DestinationCard from "../DestinationCard/DestinationCard";
import DestinationInterface from "../../interfaces/DestinationInterface";


const Dashboard = () => {
    const [destinations, setDestinations] = useState<DestinationInterface[]>([]);
    
    useEffect(() => {
        destinationServices.getDestinations()
            .then(res => {
                setDestinations(res)
            })
            .catch(err => console.log(err))
    });

    return (
        <section className="container-wrapper">
            {destinations.map(d => <DestinationCard destination={d} />)}
        </section>
    )
}

export default Dashboard;