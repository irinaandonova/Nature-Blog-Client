import { FC, useState } from "react";
import { Box, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';
import EditIntreface from "../../interfaces/EditInterface";

const EditSeaside: FC<EditIntreface> = ({ addInfo, destinationData }) => {
    const [isGuarded, setisGuarded] = useState<boolean>(true);
    const [offersUmbrella, setoffersUmbrella] = useState<boolean>(true);
    return (
        <Box margin="normal">
            <FormLabel aria-labelledby="isGuarded">Is the seaside location guarded by a life guard?</FormLabel>
            <RadioGroup
                row
                aria-labelledby="isGuarded"
                name="isGuarded"

                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    addInfo({ isGuarded: Boolean(e.target.value), offersUmbrella });
                    setisGuarded(Boolean(e.target.value));
                }}
            >
                {
                    destinationData?.isGuarded
                        ?
                        (
                            <>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" checked />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </>

                        )
                        :
                        (<>
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" checked />
                        </>
                        )}
            </RadioGroup>
            <FormLabel aria-labelledby="offersUmbrella" >Are there umbrellas offred in the seaside location</FormLabel>
            <RadioGroup
                row
                aria-labelledby="offersUmbrella"
                name="offersUmbrella"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    addInfo({ isGuarded, offersUmbrella: Boolean(e.target.value) });
                    setoffersUmbrella(Boolean(e.target.value));
                }}
            >
                {
                    destinationData?.offersUmbrella
                        ?
                        (
                            <>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" checked />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </>

                        )
                        :
                        (
                            <>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" checked />
                            </>
                        )}
            </RadioGroup>
        </Box>
    );
}

export default EditSeaside;