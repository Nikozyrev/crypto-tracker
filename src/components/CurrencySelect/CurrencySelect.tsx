import { Box, Modal } from '@mui/material';
import { useState } from 'react';
import { CURRENCIES, CURR_CATEGORIES, CURR_DESCRIPTION } from '../../constants/currencies';
import { useAppActions, useAppSelector } from '../../hooks/redux';
import { useGetSupportedVsCurrenciesQuery } from '../../store/coingecko/coingecko.api';
import './CurrencySelect.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '1.5rem',
  boxShadow: 24,
  p: 3,
  outline: 0,  
};

export const CurrencySelect = () => {
  const { currency } = useAppSelector(state => state.currency);
  const { changeCurrency } = useAppActions();
  const { data } = useGetSupportedVsCurrenciesQuery();
  const [dropdown, setDropdown] = useState(false);
  const currencyCategories = data?.reduce((acc: CURR_CATEGORIES[], el): CURR_CATEGORIES[] => {
    const elCategory = CURR_DESCRIPTION[el].category;
    return acc.includes(elCategory) ? acc : [...acc, elCategory];
  }, []);

  const showDropdown = () => {
    setDropdown(!dropdown);
  }

  const changeCurrencyHandler = (value: CURRENCIES) => {
    changeCurrency(value);
    showDropdown();
  }

  return (
    <div className='currency-select__container'>
      <div className="current-currency" onClick={showDropdown}>{currency.toUpperCase()}</div>
      <Modal
        open={dropdown}
        onClose={showDropdown}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='currency-select'>
            <h2 style={{marginBottom: '10px'}}>Select Currency</h2>
            {currencyCategories?.map(category => 
            <div
              key={category}
              className="currency-category"
            >
              <h4>{category}</h4>
              <ul className='currency-options'>
                {data?.filter(el => CURR_DESCRIPTION[el].category === category).map(el => 
                    <li
                      className={`currency-option` + `${el === currency ? ' active' : ''}`}
                      key={el}
                      onClick={() => changeCurrencyHandler(el)}
                    >
                      <div className='currency-name'>{CURR_DESCRIPTION[el].name}</div>
                      <div className='currency-symbol'>{el.toUpperCase()}</div>
                    </li>
                  )}
              </ul>
            </div>)}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
