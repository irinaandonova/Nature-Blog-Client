import { FC } from "react";
import axiosLocalInstance from "../../config/axiosConfig";
import DestinationInterface from "../../interfaces/DestinationInterface";
import RegionInterface from "../../interfaces/RegionInterface";
import { useQuery } from 'react-query';
import './destinationCard.css';
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, CircularProgress } from "@mui/material";

interface DestinationProps {
    destinationInfo: DestinationInterface
}

const DestinationCard: FC<DestinationProps> = ({ destinationInfo }) => {
    const navigate = useNavigate();
    
    const getRegion = async () => {
        const id: number = destinationInfo.regionId;
        const response = await axiosLocalInstance.get(`region/${id}`);

        const data: RegionInterface = response.data;
        return data;
    }

    const { data, isError, isFetching, isLoading } = useQuery(['getRegionQueryKey'], getRegion, { retry: false });

    return (
        <Card sx={{ maxWidth: 345 }} className="container" onClick={() => navigate(`/destination/${destinationInfo.id}`)}>
            {(isLoading || isFetching) ? <CircularProgress /> : null}
            {isError ? <p>Something went wrong</p> : null}
            <CardMedia
                sx={{ height: 140 }}
                image={destinationInfo.imageUrl}
                title={destinationInfo.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {destinationInfo.name}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    {destinationInfo.description}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Region: {data?.name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default DestinationCard;