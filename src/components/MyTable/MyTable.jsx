import React from 'react';
import './MyTable.scss';
import fakeData from './MOCK_DATA.json';
import { useTable } from 'react-table';

export default function MyTable() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },

      {
        Header: 'TCP/IP Address',
        accessor: 'tcp/ip_address',
      },

      {
        Header: 'Allocation Group',
        accessor: 'allocation_group',
      },

      {
        Header: 'Completed',
        accessor: 'completed',
      },

      {
        Header: 'Comment',
        accessor: 'comment',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <section className='myTable'>
      <div className='myTable__container'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}