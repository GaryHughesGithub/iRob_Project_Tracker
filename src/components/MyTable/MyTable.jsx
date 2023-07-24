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
        Header: 'PLC Name',
        accessor: 'plc_name',
      },
      {
        Header: 'Progress',
        accessor: 'progress',
      },

      {
        Header: 'Action',
        accessor: '',
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
                <tr style={{ width: '200px' }} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render('Cell')}</td>
                  ))}

                  <td>
                    <button
                      style={{
                        padding: '10px',
                        border: 'none',
                        backgroundColor: ' #284791',
                        color: 'white',
                        borderRadius: '10px',
                        paddingInline: '20px',
                      }}
                    >
                      View More
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
