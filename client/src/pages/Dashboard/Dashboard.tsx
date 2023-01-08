import { FC } from "react";
import DestinationCard from "../DestinationCard/DestinationCard";
import DashboardInterface from "../../interfaces/DashboardInterface";
import { useQuery } from "react-query";
import axiosLocalInstance from "../../config/axiosConfig";
import DestinationInterface from "../../interfaces/DestinationInterface";

const Dashboard: FC<DashboardInterface> = () => {
    const getDestinations = async () => {
        const response = await axiosLocalInstance.get('/destinations');

        const data: DestinationInterface[] = response.data;
        return data;
    }
    const { data, isError, isLoading, isFetching, refetch } = useQuery(['allDestinationsArray'], getDestinations)

    return (
        <section className="container-wrapper">
            {
                data
                    ?
                    data.map(d => <DestinationCard destinationInfo={d} />)
                    :
                    null
            }
        </section>
    );
}

export default Dashboard;