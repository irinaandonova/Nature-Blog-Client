import { useContext, useState, useEffect, FC } from "react";
import { AuthContext } from "../../auth/authContext";
import { Button, FormGroup, FormGroupProps } from "@mui/material";
import HikingTrail from "../../components/HikingTrail";
import Seaside from "../../components/Seaside";
import Park from "../../components/Park";
import RegionInterface from "../../interfaces/RegionInterface";
import { useQuery } from "react-query";
import axiosLocalInstance from "../../config/axiosConfig";
import { CircularProgress, FormControl, FormLabel, InputLabel, Input, Box, Radio, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CreateDestinationInterface from "../../interfaces/CreateDestinationInterface";

interface AllInfoInterface {
    name: string,
    region: number,
    description: string,
    imageUrl: string,
    destinationType: string
}


const CreateDestination = () => {
    const initialState = { duration: undefined, difficulty: undefined, isGuarded: undefined, offersUmbrella: undefined, isDogFriendly: undefined, hasPlayground: undefined }
    const [destinationType, setDestinationType] = useState<string>('');
    const { user } = useContext(AuthContext);
    const [info, setInfo] = useState<CreateDestinationInterface>(initialState);
    const navigate = useNavigate();

    const addInfo = (info: CreateDestinationInterface) => {
        setInfo(info)
    }
    const toggleType = (type: string) => {
        if (type == 'hiking-trail')
            return <HikingTrail addInfo={addInfo} />
        else if (type == 'seaside')
            return <Seaside addInfo={addInfo} />
        else if (type == 'park')
            return <Park addInfo={addInfo} />
        else
            return null;
    }
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
            const response = await axiosLocalInstance.post('destinations/hiking-trail', {
                name,
                regionId: region,
                creatorId: user.id,
                description,
                imageUrl,
                duration: info.duration,
                difficulty: info.difficulty,
            });
            
            if (response.status == 200)
                navigate('/');
        }
        else if (destinationType === 'park') {
            const response = await axiosLocalInstance.post('destinations/park', {
                name,
                regionId: region,
                creatorId: user.id,
                description,
                imageUrl,
                isDogFriendly: info.isDogFriendly,
                hasPlayground: info.hasPlayground,
            });
            
            if (response.status == 200)
                navigate('/');
        }
        else if( destinationType == 'seaside') {
            const response = await axiosLocalInstance.post('destinations/seaside', {
                name,
                regionId: region,
                creatorId: user.id,
                description,
                imageUrl,
                offersUmbrella: info.offersUmbrella,
                isGuarded: info.isGuarded
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

