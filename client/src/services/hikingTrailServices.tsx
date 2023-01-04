const baseUrl: string = '';

interface ResponseResult {
    statuscode: number,
    body: object[]
}

const getHikingTrailInfo = async (id: string) => {
    const resposne: any = await fetch(`${baseUrl}/ ${id}`);
    const result: ResponseResult = await resposne.json();
    if (result.statuscode == 200) {
        return result.body
    }
    else {
        return result.statuscode
    }
}

const hikingTrailServices = {
    getHikingTrailInfo
}

export default hikingTrailServices;