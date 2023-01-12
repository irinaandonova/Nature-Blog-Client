interface DestinationFullInfoInterface {
    id: number,
    creatorId: number,
    name: string, 
    description: string,
    imageUrl: string,
    regionId: number,
    duration?: number,
    difficulty?: number,
    isDogFriendly?: boolean, 
    hasPlayground?: boolean, 
    isGuarded?: boolean, 
    offersUmbrella?: boolean 
}

export default DestinationFullInfoInterface;