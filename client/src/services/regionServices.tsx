import RegionInterface from "../interfaces/RegionInterface";

const baseUrl: string = 'https://localhost:7067/api/regions';

const getRegion = async (id: string) => {
    try {
        const response: any = await fetch(`${baseUrl}/${id}`);
        const result: RegionInterface = await response.json();
    }
    catch (err) {
        console.log(err);
        return err;
    }
}
const regionServices = {
    getRegion
}

export default regionServices;