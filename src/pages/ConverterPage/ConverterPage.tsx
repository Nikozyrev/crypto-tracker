import { Converter } from "../../components/Converter";

export const ConverterPage = () => {
  return (
    <main className="main">
      <div className='converter_description'>
        <h1>Cryptocurrency Converter Calculator</h1>
        <p>Check the latest cryptocurrency prices against all global currencies.</p>
      </div>
      <Converter/>
    </main>
  );
}