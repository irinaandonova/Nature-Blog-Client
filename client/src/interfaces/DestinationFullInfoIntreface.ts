interface DestinationFullInfoInterface {
    id: number,
    creatorId: number,
    name: string, 
    description: string,
    imageUrl: string,
    regionId: number,
    hikingDuration?: number,
    difficulty?: number,
    isDogFriendly?: boolean, 
    hasPlayground?: boolean, 
    isGuarded?: boolean, 
    offersUmbrella?: boolean,
    type: string
}

export default DestinationFullInfoInterface;