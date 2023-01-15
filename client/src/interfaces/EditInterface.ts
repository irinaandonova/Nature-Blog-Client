import CreateDestinationInterface from "./CreateDestinationInterface";
import DestinationFullInfoInterface from "./DestinationFullInfoIntreface";

interface EditIntreface {
    addInfo(info: CreateDestinationInterface): void,
    destinationData?: DestinationFullInfoInterface
}

export default EditIntreface;