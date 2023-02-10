import { ORDER } from '../constants/order';
import { ICoin } from '../interfaces/coin';

export type coinKeys = keyof ICoin;

export const sort = (array: ICoin[], field: coinKeys, order: ORDER) => {
   return [...array].sort((a, b) => {
      const first = a[field];
      const second = b[field];
      if (typeof first === 'number' && typeof second === 'number') {
         if (order === ORDER.ASC) {
            return first - second;
         } else {
            return second - first;
         }
      }
      if (typeof first === 'string' && typeof second === 'string') {
         if (order === ORDER.ASC) {
            return first.localeCompare(second);
         } else {
            return second.localeCompare(first);
         }
      }
      return 0;
   });
};
