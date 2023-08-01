import React from 'react';
import { Link } from 'react-router-dom';

const plcs = [
  {
    name: 'IP Addressing 12LH ',
    engineer: 'Alex',
    label: 'Example',
    comment: 'comment...',
    progress: '70%',
    date: '19-02-23',
  },
  {
    name: 'IP Addressing 24gH ',
    engineer: 'Jack',
    label: 'Example',
    comment: 'comment...',
    progress: '20%',
    date: '27-01-23',
  },
  {
    name: 'IP Addressing 293HK ',
    engineer: 'Cole',
    label: 'Example',
    comment: 'comment...',
    progress: '38%',
    date: '01-10-23',
  },
  {
    name: 'IP Addressing 5 UIH ',
    engineer: 'Will',
    label: 'Example',
    comment: 'comment...',
    progress: '85%',
    date: '23-07-23',
  },
];

export default function Summary() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 mx-auto mt-6'>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <table className='min-w-full divide-y divide-gray-300'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Engineer
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Due date
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Progress
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {plcs.map((plc) => (
                  <tr key={plc.name} className='even:bg-gray-50'>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3'>
                      {plc.name}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      {plc.engineer}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      {plc.date}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      {plc.comment}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      {plc.progress}
                    </td>

                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3'>
                      <Link
                        to='#'
                        className='text-indigo-600 hover:text-indigo-900'
                      >
                        Edit<span className='sr-only'>, {plc.address}</span>
                      </Link>

                      <Link
                        to='/admin/plc-detail'
                        className='text-indigo-600 hover:text-indigo-900 ml-5'
                      >
                        View<span className='sr-only'>, {plc.address}</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
