import { Box, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';
import { FC, useState } from 'react';
import FuncProp from '../../interfaces/FuncPropInterface';

const Park: FC<FuncProp> = (prop) => {
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
                    prop.addInfo({ hasPlayground: Boolean(e.target.value), isDogFriendly });
                    setHasPlayground(Boolean(e.target.value));
                }}
            >
                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
                <FormLabel aria-labelledby="isDogFriendly">Are dogs allowed in the park?</FormLabel>
            <RadioGroup
                row
                aria-labelledby="isDogFriendly"
                name="isDogFriendly"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    prop.addInfo({ hasPlayground, isDogFriendly: Boolean(e.target.value) });
                    setIsDogFriendly(Boolean(e.target.value));
                }}
            >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </Box>
    );
}

export default Park;
