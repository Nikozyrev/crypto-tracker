import { CURRENCIES } from '../../constants/currencies';
import { useAppActions, useAppSelector } from '../../hooks/redux';
import { useGetSupportedVsCurrenciesQuery } from '../../store/coingecko/coingecko.api';
import './CurrencySelect.scss';

export const CurrencySelect = () => {
  const { currency } = useAppSelector(state => state.currency);
  const { changeCurrency } = useAppActions();
  const { data } = useGetSupportedVsCurrenciesQuery();

  const onChangeHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    changeCurrency(target.value as CURRENCIES);
  }

  return (
    <div className='currency-select__container'>
      {data && 
        <select className='currency-select' value={currency} onChange={onChangeHandler}>
          {data.map(el => 
            <option key={el} value={el}>{el.toUpperCase()}</option>  
          )}
        </select>
      }
    </div>
  );
}
