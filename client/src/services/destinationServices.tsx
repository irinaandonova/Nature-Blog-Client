import DestinationProp from "../interfaces/DestinationInterface";

const baseUrl: string = 'https://localhost:7067/api/Destination';

const getDestinations = async () => {

    const resposne: any = await fetch(baseUrl);
    const result: DestinationProp[] = await resposne.json();
    
    return result;
}

const getDestination = async (id: string) => {
    const resposne: any = await fetch(`${baseUrl}/${id}`);
    const result: object[] = await resposne.json();

    return result;
}

const destinationServices = {
    getDestinations,
    getDestination
}
export default destinationServices;