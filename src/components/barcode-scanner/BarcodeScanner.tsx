import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import BarcodeScannerModal from './BarcodeScannerModal';
import UseWindowSize, { IWindowSize } from '../../hooks/window-size';
import * as FirebaseService from '../../services/firebase';

const ScannerWindow = styled.div`
  margin-top: 80px;
  height: 250px;
`;

const ScannerBottom = styled.div`
  justify-content: center;
  display: flex;
`;

function BarcodeScanner() {
  const [barcode, setBarcode] = React.useState('Not Found');
  const [showScannerModal, setShowScannerModal] = useState(false);
  const windowSize: IWindowSize = UseWindowSize();

  const onModalUpdate = useCallback(async (err, result) => {
    if (result && result.text && result.text !== '' && result.text !== ' ') {
      try {
        const barcode = result.text;
        setBarcode(barcode);
        setShowScannerModal(true);
        await FirebaseService.createParcelRecord({ barcode });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <React.Fragment>
      {showScannerModal && <BarcodeScannerModal setShowScannerModal={setShowScannerModal} barcode={barcode} />}
      {!showScannerModal && (
        <ScannerWindow>
          <BarcodeScannerComponent width={windowSize.width} height={250} onUpdate={onModalUpdate} />
        </ScannerWindow>
      )}
      <ScannerBottom>
        <p>Please scan a barcode</p>
      </ScannerBottom>
    </React.Fragment>
  );
}

export default BarcodeScanner;
