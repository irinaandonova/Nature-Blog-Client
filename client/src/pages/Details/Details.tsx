import { useState } from "react";
import DestinationInterface from "../../interfaces/DestinationInterface";

const Details = ({ }) => {
    const [destinationInfo, setDestinationInfo] = useState<DestinationInterface | null>(null);
    /* <p className="info">Name: {destinationInfo.name}</p>
                <p className="info">Region: {region?.name}</p>
                <p className="info">{destinationInfo.description}</p>*/
    return (
        <section className="container">
            <article className="image-article">
                <img src="" alt="mountains" />
            </article>
            <article className="info-article">

            </article>
        </section>
    );
}

export default Details;