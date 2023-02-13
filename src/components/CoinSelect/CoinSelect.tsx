import { FC, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useDebounce } from "../../hooks/debounce";
import { useSearchCoinsQuery } from "../../store/coingecko/coingecko.api";
import { ICoinSearched } from "../../interfaces/coinSearched";

interface ICoinSelectProps {
  coin: ICoinSearched,
  setCoin: React.Dispatch<React.SetStateAction<ICoinSearched>>
}

export const CoinSelect: FC<ICoinSelectProps> = ({coin, setCoin}) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const {data: coins} = useSearchCoinsQuery(debouncedSearch);

  return (
    <Autocomplete
        options={(coins || []).filter((_, i) => i < 15)}
        renderInput={(params) => <TextField {...params} label="
        Select Coin" />}
        getOptionLabel={option => option.name}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > *': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="25"
              src={option.thumb}
              alt=""
            />
            <span>{option.name}</span>
            <span>{option.symbol}</span>
          </Box>
        )}
        filterOptions={(x) => x}
        inputValue={search}
        onInputChange={(_, v) => setSearch(v)}
        value={coin}
        onChange={(_, v) => setCoin(v || coin)}
        clearOnEscape
        isOptionEqualToValue={(option, value) => option.id === value.id}
        fullWidth
        sx={{
          backgroundColor: 'white'
        }}
      />
  );
};
