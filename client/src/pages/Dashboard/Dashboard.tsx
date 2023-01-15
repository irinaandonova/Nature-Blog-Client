import { FC, useEffect, useState } from "react";
import DestinationCard from "../DestinationCard/DestinationCard";
import { useQuery } from "react-query";
import axiosLocalInstance from "../../config/axiosConfig";
import DestinationInterface from "../../interfaces/DestinationInterface";
import { Box, CircularProgress, Pagination } from "@mui/material";
import { useParams } from "react-router-dom";
import './dashboard.css';

const Dashboard: FC = () => {
    const { destinationType } = useParams();
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(1);

    useEffect(() => {
        getPageCount()
    }, []);

    const getDestinations = async () => {

        if (destinationType) {
            const response = await axiosLocalInstance.get(`destinations/${destinationType}/${page}`);

            const data: DestinationInterface[] = response.data;
            return data;
        }
        else {

            const response = await axiosLocalInstance.get(`destinations/all/${page}`);

            const data: DestinationInterface[] = response.data;
            return data;
        }

    }
    const getPageCount = async () => {
        const response = await axiosLocalInstance.get(`destinations/count/all`);
        const data: number = response.data;

        setPageCount(data);
    }
    const { data, isError, isLoading, isFetching } = useQuery(['allDestinationsArray', destinationType, page], getDestinations, { retry: false })
    
    return (
        <Box className="box">
            {(isLoading || isFetching) ? <CircularProgress /> : null}
            {isError ? <p>Something went wrong</p> : null}
            {
                data
                    ?
                    data.map(d => <DestinationCard destinationInfo={d} key={d.id} />)
                    :
                    null
            }
            <Pagination count={pageCount} onChange={(event: React.ChangeEvent<unknown>, page: number) => setPage(page)} />
        </Box>
    );
}

export default Dashboard;