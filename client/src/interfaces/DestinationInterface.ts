interface DestinationInterface {
    id: number,
    creatorId: number,
    name: string, 
    description: string,
    imageUrl: string,
    regionId: number,
    type: string,
    ratingScore?: number
}

export default DestinationInterface;