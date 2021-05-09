import React, { useEffect, useState } from 'react';
import ScanBarcodes from '../components/barcode-scanner/BarcodeScanner';
import ButtonLink from '../components/navigation/ButtonLink';
import { deviceSize } from '../constants/breakpoints';
import UseWindowSize, { IWindowSize } from '../hooks/window-size';

function ScannerPage() {
  const [showScanner, setShowScanner] = useState(false);
  const windowSize: IWindowSize = UseWindowSize();

  useEffect(() => {
    const { width } = windowSize;
    setShowScanner(width <= deviceSize.laptop);
  }, [windowSize]);

  return (
    <>
      {showScanner && <ScanBarcodes />}
      {!showScanner && (
        <>
          <p>Please use mobile device to scan a barcode</p>
        </>
      )}
      <p>
        <ButtonLink to="/">Go back to home</ButtonLink>
      </p>
    </>
  );
}

export default ScannerPage;
