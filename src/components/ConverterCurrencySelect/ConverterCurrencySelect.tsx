import { Autocomplete, Box, TextField } from "@mui/material";
import { FC } from "react";
import { CURRENCIES, CURR_DESCRIPTION } from "../../constants/currencies";
import { useGetSupportedVsCurrenciesQuery } from "../../store/coingecko/coingecko.api";

interface IConverterCurrencySelectProps {
  currency: CURRENCIES,
  setCurrency: (value: React.SetStateAction<CURRENCIES>) => void
}

export const ConverterCurrencySelect: FC<IConverterCurrencySelectProps> = ({currency, setCurrency}) => {
  const {data: currencies} = useGetSupportedVsCurrenciesQuery();
  
  return (
    <Autocomplete 
      options={currencies || []}
      renderInput={(params) => <TextField {...params} label="
      Select Currency" />}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > *': { mr: 2, flexShrink: 0 } }} {...props}>
          <span>{CURR_DESCRIPTION[option].name}</span>
          <span>{option.toUpperCase()}</span>
        </Box>
      )}
      value={currency}
      onChange={(_, v) => setCurrency(v || currency)}
      clearOnEscape
      placeholder='e.g. USD'
      fullWidth
      sx={{
        backgroundColor: 'white'
      }}
    />);
}
