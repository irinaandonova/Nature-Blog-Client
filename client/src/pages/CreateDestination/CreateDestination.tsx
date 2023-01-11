import { useContext, useState, useEffect, FC } from "react";
import { AuthContext } from "../../auth/authContext";
import { Button, FormGroup, FormGroupProps } from "@mui/material";
import HikingTrail from "../../components/HikingTrailInfo";
import Seaside from "../../components/Seaside";
import Park from "../../components/Park";
import RegionInterface from "../../interfaces/RegionInterface";
import { useQuery } from "react-query";
import axiosLocalInstance from "../../config/axiosConfig";
import { CircularProgress, FormControl, FormLabel, InputLabel, Input, Box, Radio, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { DestinationContext } from "../../context/destinationContext";
import { useNavigate } from "react-router-dom";

interface AllInfoInterface {
    name: string,
    region: number,
    description: string,
    imageUrl: string,
    destinationType: string
}
const toggleType = (type: string) => {
    if (type == 'hiking-trail')
        return <HikingTrail />
    else if (type == 'seaside')
        return <Seaside />
    else if (type == 'park')
        return <Park />
    else
        return null;
}

const CreateDestination = () => {
    const [destinationType, setDestinationType] = useState<string>('');
    const { user } = useContext(AuthContext);
    const { hikingTrailinfo } = useContext(DestinationContext);
    const navigate = useNavigate();

    const getRegions = async () => {
        const regions = await axiosLocalInstance.get('region');
        const data: RegionInterface[] = regions.data;
        return data;
    }

    const { data, isError, isLoading, isFetching } = useQuery(['getRegionListKey'], getRegions);

    const createDestinationHandler = async (name: string,
        region: number,
        description: string,
        imageUrl: string,
        destinationType: string) => {
        
        if (destinationType == 'hiking-trail') {
            const response = await axiosLocalInstance.post('destinations', {
                name,
                regionId: region,
                description,
                imageUrl,
                duration: hikingTrailinfo.duration,
                difficulty: hikingTrailinfo.difficulty,
                creatorId: user.id,
                isDogFriendly: null,
                hasPlayground: null,
                isGuarded: null,
                hasUmbrella: null
            });
            
            if (response.status == 200)
                navigate('/');
        }

    }


    return (
        <Box>
            {(isLoading || isFetching) ? <CircularProgress /> : null}
            {isError ? <p>Something went wrong</p> : null}
            <FormGroup>
                <form onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {
                        name: { value: string }
                        region: { value: number }
                        description: { value: string }
                        imageUrl: { value: string },
                    };
                    const name = target.name.value;
                    const region = target.region.value;
                    const description = target.description.value;
                    const imageUrl = target.imageUrl.value;

                    createDestinationHandler(name,
                        region,
                        description,
                        imageUrl,
                        destinationType)
                }}>
                    <FormLabel>Create Destination </FormLabel>
                    <FormControl>
                        <InputLabel htmlFor="name">Destination Name: </InputLabel>
                        <Input name="name" />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="region">Region: </InputLabel>
                        <Select
                            name="region"
                            //value={age}
                            label="region"
                        //onChange={handleChange}
                        >
                            {
                                data
                                    ?
                                    data.map(r => <MenuItem value={r.id}>{r.name}</MenuItem>)
                                    :
                                    null
                            }
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="description">Description: </InputLabel>
                        <Input name="description" />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="imageUrl">ImageUrl: </InputLabel>
                        <Input name="imageUrl" />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="destinationType">Destination Type: </InputLabel>
                        <Select label="destinationType" name="destinationType" onChange={(e: SelectChangeEvent<string>) => {
                            setDestinationType(e.target.value);
                        }}>
                            <MenuItem value="hiking-trail">Hiking Trail</MenuItem>
                            <MenuItem value="seaside">Seaside</MenuItem>
                            <MenuItem value="park">Park</MenuItem>
                        </Select>
                        {
                            toggleType(destinationType)
                        }
                    </FormControl>
                    <Button type="submit" variant="contained">Create</Button>
                </form>
            </FormGroup>

        </Box>
    );
}

export default CreateDestination;

