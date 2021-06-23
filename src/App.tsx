import React from 'react';
import './App.css';
import { Barcode } from './Barcode/Barcode';

const App: React.FC<{}> = (): React.ReactElement => {

  const [inputBarcode, setInputBarcode] = React.useState<string>('');
  const [barcode, setBarcode] = React.useState('Enter barcode');
  const [showBarcode, setShowBarcode] = React.useState(false);

React.useEffect(() => {
  if(inputBarcode === '') {
    setBarcode('Enter barcode')
  } else {
    setBarcode(inputBarcode)
  }
},[inputBarcode]);

  return (
    <div className="App">
      <h1>Generate Your Barcode</h1>
      <div className="input-container">
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
      </div>
      <div className="barcode-container">
        <Barcode barcode={barcode} />
      </div>
    </div>
  );
}

export default App;
