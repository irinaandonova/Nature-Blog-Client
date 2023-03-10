import { useContext, useState, useEffect, FC } from "react";
import { AuthContext } from "../../auth/authContext";
import { Button, FormGroup, FormGroupProps, Grid, TextField } from "@mui/material";
import HikingTrail from "../../components/CreateDestination/HikingTrail";
import Seaside from "../../components/CreateDestination/Seaside";
import Park from "../../components/CreateDestination/Park";
import RegionInterface from "../../interfaces/RegionInterface";
import { useQuery } from "react-query";
import axiosLocalInstance from "../../config/axiosConfig";
import { CircularProgress, FormControl, FormLabel, InputLabel, Input, Box, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CreateDestinationInterface from "../../interfaces/CreateDestinationInterface";
import './style.css';

const CreateDestination = () => {
    const initialState = { duration: undefined, difficulty: undefined, isGuarded: undefined, offersUmbrella: undefined, isDogFriendly: undefined, hasPlayground: undefined }
    const [destinationType, setDestinationType] = useState<string>('');
    const { user } = useContext(AuthContext);
    const [info, setInfo] = useState<CreateDestinationInterface>(initialState);
    const navigate = useNavigate();

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

    const addInfo = (info: CreateDestinationInterface) => {
        setInfo(info)
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
        else if (destinationType == 'seaside') {
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
            <form className="form" onSubmit={(e: React.SyntheticEvent) => {
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
                <Grid container direction="column" className="container">
                    <Grid item>
                        <TextField label="Destination Name" name="name" margin="normal" type="text" inputProps={{ minLength: 2, maxLength: 100 }} />
                    </Grid>
                    <Grid item>
                        <FormControl margin="normal">
                            <InputLabel htmlFor="region" >Region: </InputLabel>
                            <Select
                                name="region"
                                autoWidth
                                label="region"
                                className="region-select"
                                margin="dense"
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
                    </Grid>
                    <Grid item>
                        <TextField type="text" sx={{ width: 222 }} multiline={true} label="Description" name="description" margin="normal" inputProps={{ minLength: 2, maxLength: 960, }} />
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <TextField type="text" label="Image path" name="imageUrl" margin="normal" inputProps={{ minLength: 2, maxLength: 960 }} />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl margin="normal">
                            <InputLabel htmlFor="destinationType">Destination Type: </InputLabel>
                            <Select margin="dense" className="destination-type" label="destinationType" name="destinationType" onChange={(e: SelectChangeEvent<string>) => {
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
                    </Grid>
                    <Button type="submit" variant="contained" className="submit-btn">Create</Button>
                </Grid>
            </form>



        </Box >
    );
}

export default CreateDestination;

