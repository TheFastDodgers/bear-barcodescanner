import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import * as FirebaseService from '../../services/firebase';
import ButtonLink from '../navigation/ButtonLink';

export const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  border: 1px solid #ddd;
  width: 400px;
  margin: 0 auto;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #1e90ff;
    color: white;
  }
`;

interface Parcel {
  barcode: string;
  date: string;
}

function ParcelTable() {
  const [parcels, setParcels] = useState<Array<Parcel>>([]);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const records = await FirebaseService.getParcelRecords();
        if (records && records.length > 0) {
          setParcels(records);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchParcels();
  }, []);

  return (
    <>
      <h1>Parcels</h1>

      {parcels && parcels.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>barcode</th>
              <th>created</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => {
              const { barcode, date } = parcel;

              return (
                <tr key={index}>
                  <td>{barcode}</td>
                  <td>{date}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}

      {parcels && parcels.length === 0 && (
        <>
          <p>There are no parcels saved.</p>
        </>
      )}

      <p>
        <ButtonLink to="/">Go back to home</ButtonLink>
      </p>
    </>
  );
}

export default ParcelTable;
