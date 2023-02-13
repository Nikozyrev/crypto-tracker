import { useEffect, useState } from 'react';
import { TextField, ToggleButton } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { priceFormatter } from '../../helpers/price';
import { useAppSelector } from '../../hooks/redux';
import { useGetCoinPriceQuery, useGetSupportedVsCurrenciesQuery } from '../../store/coingecko/coingecko.api';
import { ICoinSearched } from '../../interfaces/coinSearched';
import { CoinSelect } from '../CoinSelect';
import { ConverterCurrencySelect } from '../ConverterCurrencySelect';
import { BITCOIN_SEARCHED } from '../../constants/coins';
import './Converter.scss';

export const Converter = () => {
  const {currency: globalCurrency} = useAppSelector(state => state.currency);
  const {data: currencies} = useGetSupportedVsCurrenciesQuery();
  const [coin, setCoin] = useState<ICoinSearched>(BITCOIN_SEARCHED);
  const [currency, setCurrency] = useState(globalCurrency);
  const {currentData} = useGetCoinPriceQuery(
    {ids: coin.id, vs_currencies: currencies?.join(',') || currency}, 
    {skip: !currencies}
  );
  const [isCoinPrice, setIsCoinPrice] = useState(true);
  const [price, setPrice] = useState(0);
  const [updateTime, setUpdateTime] = useState<Date | null>(null);
  const [quantity, setQuantity] = useState<number | null>(1);
  
  useEffect(() => {
    if (currentData) {
      const priceData = currentData[coin.id][currency];
      const newPrice = isCoinPrice ? priceData : 1 / priceData;
      setPrice(newPrice);
      setUpdateTime(new Date(currentData[coin.id].last_updated_at * 1000));
    }
  }, [currentData, coin, currency, isCoinPrice])

  const changeQuantityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) return setQuantity(null);
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
        {isCoinPrice 
          ? <CoinSelect coin={coin} setCoin={setCoin}/>
          : <ConverterCurrencySelect currency={currency} setCurrency={setCurrency}/>
        }
        <ToggleButton
          value="check"
          onChange={() => setIsCoinPrice(!isCoinPrice)}
        >
          <SwapHorizIcon/>
        </ToggleButton>
        {isCoinPrice 
          ? <ConverterCurrencySelect currency={currency} setCurrency={setCurrency}/>
          : <CoinSelect coin={coin} setCoin={setCoin}/>
        }
      </div>
      <div className="converter_result">
        {!!quantity &&
        <>
          <div>
            {priceFormatter(isCoinPrice ? coin.symbol : currency)(quantity)}
            {` = `}
            {priceFormatter(isCoinPrice ? currency : coin.symbol)(quantity * price)}
          </div>
          <div>Last updated at {updateTime?.toLocaleTimeString()}</div>
        </>
        }
      </div>
    </div>
  );
}
