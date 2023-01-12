import { FC } from "react";
import axiosLocalInstance from "../../config/axiosConfig";
import DestinationInterface from "../../interfaces/DestinationInterface";
import RegionInterface from "../../interfaces/RegionInterface";
import { useQuery } from 'react-query';
import './destinationCard.css';
import { useNavigate } from "react-router-dom";

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

    const { data } = useQuery(['getRegionQueryKey'], getRegion, { retry: false });
    
    return (
        <article className="destination-wrapper" onClick={() => navigate(`/destination/${destinationInfo.id}`)}>
            <article className="image-article">
                <img src={destinationInfo.imageUrl} alt="mountains" className="destination-image"/>
            </article>
            <article className="info-article">
                <p className="info">Name: {destinationInfo.name}</p>
                <p className="info">Region: {data?.name}</p>
                <p className="info">{destinationInfo.description}</p>
            </article>
        </article>
    );
}

export default DestinationCard;