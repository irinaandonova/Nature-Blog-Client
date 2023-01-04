import { FC } from "react";
import DestinationProp from "../../interfaces/DestinationInterface";

interface DestinationProps {
    destination: DestinationProp
}

const DestinationCard: FC<DestinationProps> = ({ destination }) => {
    return (
        <article className="destination-wrapper">
            <article className="image-article">
                <img src="" alt="mountains" />
            </article>
            <article className="info-article">
                <p className="info">{destination.name}</p>
                <p className="info">{}</p>
                <p className="info">{destination.description}</p>
                <p className="info">Hiking Duration: </p>
            </article>
        </article>
    )
}

export default DestinationCard;