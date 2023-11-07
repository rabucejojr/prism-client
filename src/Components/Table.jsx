/* eslint-disable react/jsx-key */
// src/Table.js

import React from 'react';
import { useTable } from 'react-table';

const Table = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Age',
        accessor: 'age'
      },
      {
        Header: 'Gender',
        accessor: 'gender'
      },
      {
        Header: 'Classification',
        accessor: 'classification'
      },
      {
        Header: 'Address',
        accessor: 'address'
      },
      {
        Header: 'Contact Number',
        accessor: 'contactNumber'
      }
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        name: 'John Doe',
        age: 25,
        gender: 'Male',
        classification: 'Student',
        address: '123 Main St, Cityville',
        contactNumber: '555-1234'
      },
      // Add more rows as needed
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <div style={{ margin: '20px' }}>
      <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={{ border: '1px solid black', padding: '8px' }}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ border: '1px solid black' }}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} style={{ padding: '8px', textAlign:'center',border:'1px solid black' }}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
