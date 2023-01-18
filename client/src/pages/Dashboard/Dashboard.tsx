import { FC, useEffect, useState } from "react";
import DestinationCard from "../DestinationCard/DestinationCard";
import { useQuery } from "react-query";
import axiosLocalInstance from "../../config/axiosConfig";
import DestinationInterface from "../../interfaces/DestinationInterface";
import { Box, CircularProgress, Pagination } from "@mui/material";
import { useParams } from "react-router-dom";
import './dashboard.css';
import Sorting from "../../components/Sorting/Sorting";

const Dashboard: FC = () => {
    const { destinationType } = useParams();
    const [destinations, setDestinations] = useState<DestinationInterface[]>([]);
    const [sorting, setSorting] = useState<string>('visitors');
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(1);

    useEffect(() => {
        getPageCount()
    }, []);

    const getDestinations = async () => {

        if (destinationType) {
            const response = await axiosLocalInstance.get(`destinations/${destinationType}/${sorting}/${page}`);

            const data: DestinationInterface[] = response.data;
            return data;
        }
        else {

            const response = await axiosLocalInstance.get(`destinations/all/${sorting}/${page}`);

            const data: DestinationInterface[] = response.data;
            console.log(data);
            return data;
        }

    }
    const getPageCount = async () => {
        const response = await axiosLocalInstance.get(`destinations/count/${destinationType}`);
        const data: number = response.data;

        setPageCount(data);
    }

    const manageSorting = (sortingCriteria: string) => {
        setSorting(sortingCriteria);
    }

    const { data, isError, isLoading, isFetching } = useQuery(['allDestinationsArray', destinationType, page, sorting], getDestinations, { retry: false })
    
    return (
        <Box className="box">
            {(isLoading || isFetching) ? <CircularProgress /> : null}
            {isError ? <p>Something went wrong</p> : null}
            <Sorting manageSorting={manageSorting}/>
            {
                data && data?.length > 0
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