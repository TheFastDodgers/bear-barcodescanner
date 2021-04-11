import React, { useState } from 'react';
import styled from '@emotion/styled';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import ScanTakerModal from '../../modals/scan-taker-modal/scan-taker-modal';
import UseWindowSize, { IWindowSize } from '../../helpers/window-size';

function ScanBarcodes() {
  const [showScannerModal, setShowScannerModal] = useState(false);

  const windowSize: IWindowSize = UseWindowSize();

  const [dataScan, setDataScan] = React.useState('Not Found');

  const letItShow = function (err: any, result: any) {
    if (result && result.text && result.text !== '' && result.text !== ' ') {
      setDataScan(result.text);
      setShowScannerModal(true);
    }
  };

  const ScannerBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background: #1e2023;
    height: 100vh;
    width: 100vw;
    color: ivory;
  `;

  const ScannerWindow = styled.div`
    margin-top: 80px;
    height: 250px;
  `;

  const ScannerBottom = styled.div`
    justify-content: center;
    display: flex;
  `;

  return (
    <ScannerBody>
      {showScannerModal && <ScanTakerModal hideTheModal={setShowScannerModal} dataScaned={dataScan} />}
      <ScannerWindow>
        {!showScannerModal && (
          <BarcodeScannerComponent
            width={windowSize.width}
            height={250}
            onUpdate={(err: any, result: any) => {
              letItShow(err, result);
            }}
          />
        )}
      </ScannerWindow>
      <ScannerBottom>
        <p>Please scan a barcode</p>
      </ScannerBottom>
    </ScannerBody>
  );
}

export default ScanBarcodes;
