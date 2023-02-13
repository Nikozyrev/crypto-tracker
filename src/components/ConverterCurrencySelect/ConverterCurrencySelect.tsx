import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { CURRENCIES } from "../../constants/currencies";
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
