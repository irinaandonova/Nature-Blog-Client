import { Box, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';
import { FC, useState } from 'react';
import EditIntreface from '../../interfaces/EditInterface';

const EditPark: FC<EditIntreface> = ({ addInfo, destinationData }) => {
    const [hasPlayground, setHasPlayground] = useState<boolean>(true);
    const [isDogFriendly, setIsDogFriendly] = useState<boolean>(true);

    return (
        <Box>
            <FormLabel aria-labelledby="hasPlayground">Does the park has playground?</FormLabel>
            <RadioGroup
                row
                aria-labelledby="hasPlayground"
                name="hasPlayground"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    addInfo({ hasPlayground: Boolean(e.target.value), isDogFriendly });
                    setHasPlayground(Boolean(e.target.value));
                }}
            >{
                    destinationData?.hasPlayground
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
            <FormLabel aria-labelledby="isDogFriendly">Are dogs allowed in the park?</FormLabel>
            <RadioGroup
                row
                aria-labelledby="isDogFriendly"
                name="isDogFriendly"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    addInfo({ hasPlayground, isDogFriendly: Boolean(e.target.value) });
                    setIsDogFriendly(Boolean(e.target.value));
                }}
            >
                {destinationData?.isDogFriendly
                    ?
                    (
                        <>
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
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
        </Box>
    );
}

export default EditPark;
