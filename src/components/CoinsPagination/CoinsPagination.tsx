import { useGetGlobalDataQuery } from '../../store/coingecko/coingecko.api';
import { Container, Pagination, Stack, Link, colors } from '@mui/material';
import './CoinsPagination.scss';

const styles = {
   marginY: 3,
   marginX: 'auto',
};

interface IPaginationProps {
   page: number;
   setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CoinsPagination = ({ page, setPage }: IPaginationProps) => {
   const { data: globalData } = useGetGlobalDataQuery();
   const pageQnty = Math.ceil((globalData?.active_cryptocurrencies || 0) / 100);

   return (
      <Container>
         <Stack>
            {!!pageQnty && (
               <Pagination
                  showFirstButton
                  showLastButton
                  shape="rounded"
                  color="primary"
                  sx={styles}
                  count={pageQnty}
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
