import React from 'react';
import styled from '@emotion/styled';

function ScanTakerModal(props: any) {
  const onButtonClose = function () {
    props.hideTheModal(false);
  };

  const ModalMain = styled.div`
    position: absolute;
    color: #007bff;
    z-index: 1;
    width: 350px;
    height: 300px;
    border-radius: 8px;
    padding-top: 0;
    padding-bottom: 3.75em;
    background: #f7f7f7;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -25%);
  `;

  const ModalBody = styled.div`
    background: #f7f7f7;
    position: relative;
    font-size: 14px;
    border-radius: 8px;
  `;
  const ModalButtonBottom = styled.div`
    position: absolute;
    display: table;
    top: auto;
    bottom: 0;
    border: 0;
    table-layout: fixed;
    left: 0;
    right: 0;
    width: 100%;
    white-space: normal;
  `;

  const ModalButtonSection = styled.div`
    border-left: 0;
    border-top: 1px solid #ccc;
    display: table-cell;
    float: none;
  `;

  const CodeNo = styled.div`
    margin-top: 60px;
    font-size: 2.8rem;
  `;

  const ModalInner = styled.div`
    display: block;
    padding: 1em;
    text-align: center;
    font-size: 2rem;
  `;

  const ModalOkButton = styled.div`
    font-weight: bold;
    color: #007bff;
    height: 2.75em;
    line-height: 2.75em;
    padding: 0 0.625em;
    text-align: center;
    font-size: 1.333334em;
    cursor: pointer;
    border-radius: 8px;
    &:hover {
      background: #eaeaea;
      color: #00a6ff;
    }
  `;

  const SrOnly = styled.span`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  `;

  return (
    <ModalMain>
      <ModalBody>
        <ModalInner>
          <div>Code number:</div>
          <CodeNo>{props.dataScaned}</CodeNo>
        </ModalInner>
      </ModalBody>
      <ModalButtonBottom>
        <ModalButtonSection>
          <ModalOkButton onClick={onButtonClose} role="button">
            OK <SrOnly>and close modal</SrOnly>
          </ModalOkButton>
        </ModalButtonSection>
      </ModalButtonBottom>
    </ModalMain>
  );
}

export default ScanTakerModal;
