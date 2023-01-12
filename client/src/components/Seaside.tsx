import { FC, useState } from "react";
import FuncProp from "../interfaces/FuncPropInterface";
import { Box, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';

const Seaside: FC<FuncProp> = (prop) => {
    const [isGuarded, setisGuarded] = useState<boolean>(true);
    const [offersUmbrella, setoffersUmbrella] = useState<boolean>(true);
    return (
        <Box>
            <FormLabel aria-labelledby="isGuarded">Is the seaside location guarded by a life guard?</FormLabel>
            <RadioGroup
                row
                aria-labelledby="isGuarded"
                name="isGuarded"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    prop.addInfo({ isGuarded: Boolean(e.target.value), offersUmbrella });
                    setisGuarded(Boolean(e.target.value));
                }}
            >
                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                <FormControlLabel value="false" control={<Radio />} label="No" />
                <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="other"
                />
            </RadioGroup>
            <FormLabel aria-labelledby="offersUmbrella">Are there umbrellas offred in the seaside location</FormLabel>
            <RadioGroup
                row
                aria-labelledby="offersUmbrella"
                name="offersUmbrella"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    prop.addInfo({ isGuarded, offersUmbrella: Boolean(e.target.value) });
                    setoffersUmbrella(Boolean(e.target.value));
                }}
            >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
                <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="other"
                />
            </RadioGroup>
        </Box>
    );
}

export default Seaside;