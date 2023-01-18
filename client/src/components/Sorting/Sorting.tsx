import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DestinationInterface from '../../interfaces/DestinationInterface';

interface SortingPropInterface {
    manageSorting: (sort: string) => void
}

const Sorting: FC<SortingPropInterface> =({ manageSorting }) => {
  const [selectValue, setSelectValue] = useState<string>('visitors');
  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
    manageSorting(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          value={selectValue}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value='visitors'>Visitors</MenuItem>
          <MenuItem value='alphabetical'>Alphabetical(A-Z)</MenuItem>
          <MenuItem value='alphabetical-rev'>Alphabetical(Z-A)</MenuItem>
          <MenuItem value='rating'>Ratings</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Sorting;