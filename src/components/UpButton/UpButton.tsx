import NavigationIcon from '@mui/icons-material/Navigation';
import { Button } from '@mui/material';
import './UpButton.scss';

export const UpButton = () => {
  return (
    <div className='up-btn'>
      <Button
        variant="outlined"
        size='small'
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }}
      >
        <NavigationIcon/>
      </Button>
    </div>
  );
};
