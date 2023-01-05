import { useEffect, useState } from "react";
import destinationServices from "../../services/destinationServices";
import DestinationCard from "../DestinationCard/DestinationCard";
import DestinationInterface from "../../interfaces/DestinationInterface";


const Dashboard = () => {
    const [destinations, setDestinations] = useState<DestinationInterface[]>([]);

    useEffect(() => {
        destinationServices.getDestinations()
            .then(res => setDestinations(res))
            .catch(err => console.log(err))
    });

    return (
        <section className="container-wrapper">
            {
                destinations
                    ?
                    destinations.map(d => <DestinationCard destinationInfo={d} />)
                    :
                    null
            }
        </section>
    )
}

export default Dashboard;