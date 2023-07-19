import { Link } from 'react-router-dom'

const plcs = [
  { address: '10-112-48-0', allocation: 'Subnet Name do not use', label: 'Example', comment: 'comment...', completed: 'Yes', engineer: 'Engineer..', date: '12-04-23' },
  { address: '10-112-48-0', allocation: 'Subnet Name do not use', label: 'Example', comment: 'comment...', completed: 'Yes', engineer: 'Engineer..', date: '12-04-23' },
  { address: '10-112-48-0', allocation: 'Subnet Name do not use', label: 'Example', comment: 'comment...', completed: 'Yes', engineer: 'Engineer..', date: '12-04-23' },
  { address: '10-112-48-0', allocation: 'Subnet Name do not use', label: 'Example', comment: 'comment...', completed: 'Yes', engineer: 'Engineer..', date: '12-04-23' },
]

export default function PlcDetailTable() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">IP Addressing Zone 12LH</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all PLCs ip addressing in the system.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add PLC IP Addressing
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  TCP/IP Address
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Allocation Group
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Eplan Label
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Comment
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Completed
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Engineer
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Date
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {plcs.map((plc) => (
                  <tr key={plc.address} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {plc.address}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{plc.allocation}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{plc.label}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{plc.comment}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{plc.completed}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{plc.engineer}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{plc.date}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                      <Link to="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {plc.address}</span>
                      </Link>

                      <Link to="/admin/plc-detail" className="text-indigo-600 hover:text-indigo-900 ml-5">
                        View<span className="sr-only">, {plc.address}</span>
                      </Link>

                      <button type="button" className="text-white hover:text-white ml-5 bg-indigo-600 p-2 rounded-md">
                        Mark Completed<span className="sr-only">, {plc.address}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
