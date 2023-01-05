import RegionInterface from "../interfaces/RegionInterface";

const baseUrl: string = 'https://localhost:7067/api/regions';

const getRegion = async (id: number) => {
    try {
        const response: any = await fetch(`${baseUrl}/${id}`);
        if (response.ok) {
            const result: RegionInterface = await response.json();

            return result;
        }
        else {
            throw new Error('Exception in the get region method!');
        }
    }
    catch (err) {
        console.log(err);
        return null;
    }
}
const regionServices = {
    getRegion
}

export default regionServices;