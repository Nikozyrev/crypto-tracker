import { useGetGlobalDataQuery } from '../../store/coingecko/coingecko.api';
import { Container, Pagination, Stack, Link, colors } from '@mui/material';
import './CoinsPagination.scss';
import { ICoin } from '../../interfaces/coin';
import { useAppSelector } from '../../hooks/redux';

const styles = {
   marginY: 3,
   marginX: 'auto',
};

interface IPaginationProps {
   page: number;
   setPage: React.Dispatch<React.SetStateAction<number>>;
	 data: ICoin[];
	 view: boolean
}

export const CoinsPagination = ({ page, setPage, data , view}: IPaginationProps) => {

	const { favorites } = useAppSelector(state => state.favorites);

   const { data: globalData } = useGetGlobalDataQuery();
   const coinsQnty = Math.ceil((globalData?.active_cryptocurrencies || 0) / 100);
	 const favoritesQnty = Math.ceil(favorites.length / 100);
	

   return (
      <Container>
         <Stack>
            {!!coinsQnty && (
               <Pagination
                  showFirstButton
                  showLastButton
                  shape="rounded"
                  color="primary"
                  sx={styles}
                  count={view ? favoritesQnty : coinsQnty}
                  page={page}
                  onChange={(_, num) => {
                     setPage(num);
                     console.log(page);
                  }}
               />
            )}
         </Stack>
      </Container>
   );
};
