'use client';
import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import styled from '@emotion/styled';

// Styled container for responsive behavior
const TableContainer = styled.div`
  overflow-x: auto; // Enables horizontal scrolling
  -webkit-overflow-scrolling: touch; // Smooth scrolling on touch devices
`;


// Define styles for the table using Emotion
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  border-radius: 8px;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f0f0f0;
    
  }

  tr:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const SmartContractTable = ({ contracts }) => {
    const [isLoading, setIsLoading] = useState(false);
  // Define the table columns
  const columns = React.useMemo(
    () => [
      {
        Header: 'Contract Address',
        accessor: 'address', // accessor is the "key" in the data
      },
      {
        Header: 'Deployment Date',
        accessor: 'deploymentDate',
      },
      {
        Header: 'Creator Address',
        accessor: 'creatorAddress',
      },
      {
        Header: 'Contract Type',
        accessor: 'type',
      },
      {
        Header: 'Transaction Count',
        accessor: 'transactions',
      },
      {
        Header: 'Verification Status',
        accessor: 'verificationStatus',
      },
      {
        Header: 'Latest Activity',
        accessor: 'latestActivity',
      },
    ],
    []
  );

  // Create a table instance
  const tableInstance = useTable({ columns, data: contracts });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  // Render the UI for your table
  return (
    <div className="my-5 text-center">
            <h2 className="display-7 fw-bold text-body-emphasis"> Recently Deployed Smart Contracts</h2>
            {isLoading ? (
              <p>Loading contracts...</p>
            ) : (
                <TableContainer>
          <Table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, headerGroupIndex) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={`header-group-${headerGroupIndex}`}>
                  {headerGroup.headers.map((column, columnIndex) => (
                    <th {...column.getHeaderProps()} key={`header-${headerGroupIndex}-${columnIndex}`}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, rowIndex) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={`row-${rowIndex}`}>
                    {row.cells.map((cell, cellIndex) => {
                      return (
                        <td {...cell.getCellProps()} key={`cell-${rowIndex}-${cellIndex}`}>
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableContainer>
            )}
          </div>
    
  );
};

export default SmartContractTable;
