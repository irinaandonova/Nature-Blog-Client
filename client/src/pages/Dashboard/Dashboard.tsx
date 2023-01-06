import { useEffect, useState, FC } from "react";
import destinationServices from "../../services/destinationServices";
import DestinationCard from "../DestinationCard/DestinationCard";
import DestinationInterface from "../../interfaces/DestinationInterface";
import DashboardInterface from "../../interfaces/DashboardInterface";

const Dashboard: FC<DashboardInterface> = ({ filter }) => {
    const [destinations, setDestinations] = useState<DestinationInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        destinationServices.getDestinations(filter)
            .then(res => setDestinations(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
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
    );
}

export default Dashboard;