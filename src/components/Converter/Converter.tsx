import { useEffect, useState } from 'react';
import { priceFormatter } from '../../helpers/price';
import { useAppSelector } from '../../hooks/redux';
import { useGetCoinPriceQuery, useGetSupportedVsCurrenciesQuery } from '../../store/coingecko/coingecko.api';
import './Converter.scss';

export const Converter = () => {
  const {currency: globalCurrency} = useAppSelector(state => state.currency);
  const {data: currencies} = useGetSupportedVsCurrenciesQuery();
  const [coin, setCoin] = useState('bitcoin');
  const [currency, setCurrency] = useState(globalCurrency);
  const {data} = useGetCoinPriceQuery({ids: coin, vs_currencies: currencies?.join(',') || currency});
  const [price, setPrice] = useState(0);
  const [updateTime, setUpdateTime] = useState<Date | null>(null);
  const [quantity, setQuantity] = useState<number | null>(1);
  
  useEffect(() => {
    if (data) {
      setPrice(data[coin][currency]);
      setUpdateTime(new Date(data[coin].last_updated_at * 1000));
    }
  }, [data])

  const changeQuantityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value 
      ? Number(e.target.value) < 0
        ? null
        : Number(e.target.value)
      : null;
    setQuantity(value);
  }

  return (
    <div>
      <input 
        type="number"
        name="converter_quantity"
        id="converter_quantity" 
        value={quantity ?? ''}
        onChange={changeQuantityHandler}
      />
      {!!quantity &&
      <>
        <div>{priceFormatter(coin)(quantity)} = {priceFormatter(currency)(quantity * price)}</div>
        <div>Last updated at {updateTime?.toLocaleTimeString()}</div>      
      </>
      }
    </div>
  );
}
