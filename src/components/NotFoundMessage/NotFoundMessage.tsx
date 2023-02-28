import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/img/not-found.svg';
import { ROUTES } from '../../constants/routes';
import './NotFoundMessage.scss';

export const NotFoundMessage = () => {
  return (
    <div className='not-found-message'>
      <div className='not-found__text'>
        <h1>
          <p>Uh oh...</p>
          <p>I think we're lost.</p>
        </h1>
        <p>The page you're looking for could not be found.</p>
        <Link to={ROUTES.MAIN}>
          <Button color='primary' variant="contained">Main Page</Button>
        </Link>
      </div>
      <div className="not-found__image">
        <img src={notFoundImage} alt="not_found" />
      </div>
    </div>
  );
};
