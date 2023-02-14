import { Container, Pagination, Stack } from '@mui/material';


const styles = {
   marginY: 3,
   marginX: 'auto',
};

interface ICoinsPaginationProps {
   page: number;
   setPage: React.Dispatch<React.SetStateAction<number>>;
   count: number;
}

export const TablePagination = ({
   count,
   page,
   setPage,
}: ICoinsPaginationProps) => {
   return (
      <Container>
         <Stack>
            {!!count && (
               <Pagination
                  showFirstButton
                  showLastButton
                  shape="rounded"
                  color="primary"
                  sx={styles}
                  count={count}
                  page={page}
                  onChange={(_, num) => {
                     setPage(num);
                  }}
               />
            )}
         </Stack>
      </Container>
   );
};
