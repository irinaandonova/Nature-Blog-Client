import { FC, useEffect, useState } from "react";
import DestinationInterface from "../../interfaces/DestinationInterface";
import RegionInterface from "../../interfaces/RegionInterface";
import regionServices from "../../services/regionServices";

interface DestinationProps {
    destinationInfo: DestinationInterface
}

const DestinationCard: FC<DestinationProps> = ({ destinationInfo }) => {
    const [region, setRegion] = useState<RegionInterface | null>(null);

    useEffect(() => {
        regionServices.getRegion(destinationInfo.regionId)
            .then(result => setRegion(result))
            .catch(err => console.log(err));
    });

    return (
        <article className="destination-wrapper">
            <article className="image-article">
                <img src="" alt="mountains" />
            </article>
            <article className="info-article">
                <p className="info">Name: {destinationInfo.name}</p>
                <p className="info">Region: {region?.name}</p>
                <p className="info">{destinationInfo.description}</p>
            </article>
        </article>
    );
}

export default DestinationCard;