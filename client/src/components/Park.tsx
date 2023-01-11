import { Box, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';

const Park = () => {
    return (
        <Box>
<FormLabel>Does the park has playground?</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
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
                
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
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

export default Park;
/* <label className="category-label" htmlFor="isDogFriendly">Are dogs allowed in this park?</label>
            <input name="isDogFriendly" value="Yes" type="radio"/>
            <input name="isDogFriendly" value="No" type="radio"/>*/