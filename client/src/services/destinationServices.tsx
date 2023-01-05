import DestinationProp from "../interfaces/DestinationInterface";

const baseUrl: string = 'https://localhost:7067/api/destination';

const getDestinations = async () => {
    try {
        const resposne: any = await fetch(baseUrl);
    
        if(resposne.ok)
        {
            const result: DestinationProp[] = await resposne.json();
        
            return result;
        }
        else {
           throw new Error('Exception in get destination method!', resposne.statuscode);
        }
    }
    catch(err)
    {
        console.log(err);
        return [];
    }
    
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