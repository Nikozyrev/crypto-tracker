import { Box, Modal } from '@mui/material';
import { useState } from 'react';
import { CURRENCIES } from '../../constants/currencies';
import { useAppActions, useAppSelector } from '../../hooks/redux';
import { useGetSupportedVsCurrenciesQuery } from '../../store/coingecko/coingecko.api';
import './CurrencySelect.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 0,
};

export const CurrencySelect = () => {
  const { currency } = useAppSelector(state => state.currency);
  const { changeCurrency } = useAppActions();
  const { data } = useGetSupportedVsCurrenciesQuery();
  const [dropdown, setDropdown] = useState(false);

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
          <h3>Select Currency</h3>
          <ul className="currency-select">
          {data?.map(el => 
              <li
                className={`currency-option` + `${el === currency ? ' active' : ''}`}
                key={el} 
                value={el} 
                onClick={() => changeCurrencyHandler(el)}
              >{el.toUpperCase()}</li>  
            )}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}
