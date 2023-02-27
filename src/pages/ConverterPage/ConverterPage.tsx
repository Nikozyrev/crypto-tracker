import { Converter } from '../../components/Converter';
import './ConverterPage.scss';

export const ConverterPage = () => {
   return (
      <>
         <div className="converter_description">
            <h1>Cryptocurrency Converter Calculator</h1>
            <p>
               Check the latest cryptocurrency prices against all global
               currencies.
            </p>
         </div>
         <Converter />
      </>
   );
};
