import { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { priceFormatter } from '../../helpers/price';
import { useAppSelector } from '../../hooks/redux';
import { useGetCoinPriceQuery, useGetSupportedVsCurrenciesQuery } from '../../store/coingecko/coingecko.api';
import { ICoinSearched } from '../../interfaces/coinSearched';
import { CoinSelect } from '../CoinSelect';
import './Converter.scss';

export const Converter = () => {
  const {currency: globalCurrency} = useAppSelector(state => state.currency);
  const {data: currencies} = useGetSupportedVsCurrenciesQuery();
  const [coin, setCoin] = useState<ICoinSearched>({
    id: 'bitcoin',
    name: 'Bitcoin',
    api_symbol: '',
    symbol: 'BTC',
    market_cap_rank: 1,
    thumb: '',
    large: '',
  });
  const [currency, setCurrency] = useState(globalCurrency);
  const {currentData} = useGetCoinPriceQuery({ids: coin.id, vs_currencies: currencies?.join(',') || currency}, {
    skip: !currencies
  });
  const [price, setPrice] = useState(0);
  const [updateTime, setUpdateTime] = useState<Date | null>(null);
  const [quantity, setQuantity] = useState<number | null>(1);
  
  useEffect(() => {
    if (currentData) {
      setPrice(currentData[coin.id][currency]);
      setUpdateTime(new Date(currentData[coin.id].last_updated_at * 1000));
    }
  }, [currentData, coin, currency])

  const changeQuantityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = Number(value);
    const newValue = numberValue >= 0 ? numberValue : null;
    setQuantity(newValue);
  }

  return (
    <div className='converter_container'>
      <div className='converter_form'>
        <TextField 
          type='number'
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          label='Enter Amount' 
          placeholder='e.g. 1.00'
          value={quantity ?? ''}
          onChange={changeQuantityHandler}
          sx={{
            backgroundColor: 'white'
          }}
        />
        <CoinSelect coin={coin} setCoin={setCoin}/>
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
        />
      </div>
      <div className="converter_result">
        {!!quantity &&
        <>
          <div>{priceFormatter(coin.symbol)(quantity)} = {priceFormatter(currency)(quantity * price)}</div>
          <div>Last updated at {updateTime?.toLocaleTimeString()}</div>      
        </>
        }
      </div>
    </div>
  );
}
