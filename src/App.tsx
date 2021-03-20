import React from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

function App() {

  const [ data, setData ] = React.useState('Not Found');

  return (
    <>
      <BarcodeScannerComponent
        width={800}
        height={200}
        onUpdate={(err: any, result: any) => {
          if (result) setData(result.text)
          else setData('Not Found')
        }}
      />
      <p>{data}</p>
    </>
  )
}

export default App;