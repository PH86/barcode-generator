import React from 'react';
import './App.css';
import { Barcode } from './Barcode/Barcode';

const App: React.FC<{}> = (): React.ReactElement => {

  const [inputBarcode, setInputBarcode] = React.useState<string>('');
  const [barcode, setBarcode] = React.useState('');
  const [showBarcode, setShowBarcode] = React.useState(false);

  const createBarcode = (event: React.FormEvent) => {
    event.preventDefault();
    setBarcode(inputBarcode)
    setShowBarcode(true)
  };

  return (
    <div className="App">
      <h1>Generate Your Barcode</h1>
      <div className="input-container">
        <form onSubmit={createBarcode}>
          <input
            className='barcode-input'
            type='text'
            id='barcode'
            name='barcode'
            placeholder='Enter barcode'
            value={inputBarcode}
            onChange={(e) => setInputBarcode(e.target.value)}
            required
          />
          <button type="submit" className="standard-button">Create Barcode</button>
        </form>
      </div>
      <div className="barcode-container">
        {showBarcode && <Barcode barcode={barcode} />}
      </div>
    </div>
  );
}

export default App;
