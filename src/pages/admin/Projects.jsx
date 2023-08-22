import React, { useState } from 'react';
import Layout from '../../components/Admin/Layout';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

const projects = [
  { name: 'JLR' },
  {
    name: 'Vauxhall',
  },
  {
    name: 'BMW',
  },
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [currentproject, setCurrentproject] = useState(null);

  const handleOpenModal = (project) => {
    if (project) {
      setName(project.name);
      setStatus(project.status);
      setCurrentproject(project);
    } else {
      setName('');
      setStatus('');
      setCurrentproject(null);
    }
    setModalOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();

    setName('');
    setStatus('');
    setCurrentproject(null);
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentproject) {
      // handle update here
    } else {
      // handle create here
    }
    setModalOpen(false);
  };
  return (
    <Layout>
      <Modal
        title={currentproject ? 'Edit project' : 'Create New project'}
        modalOpen={modalOpen}
        handleModalClose={() => setModalOpen(false)}
      >
        <div className='w-[400px] sm:w-[650px]'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='status'
                className='block text-sm font-medium text-gray-700'
              >
                Status
              </label>
              <select
                id='status'
                name='status'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
              >
                <option>Active</option>
                <option>Pending</option>
                <option>Disabled</option>
              </select>
            </div>

            <div className='flex justify-end'>
              <button
                type='button'
                onClick={handleClose}
                className='mr-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700'
              >
                {currentproject ? 'Save Changes' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-base font-semibold leading-6 text-gray-900'>
              All Projects
            </h1>
            <p className='mt-2 text-sm text-gray-700'>
              A list of all projects in the system.
            </p>
          </div>
          <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex space-x-2'>
            <button
              type='button'
              className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              onClick={() => handleOpenModal()}
            >
              Add New Project
            </button>
            <button
              type='button'
              className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Import Project CSV
            </button>
          </div>
        </div>
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
                      className='relative py-3.5 pl-3 pr-4 sm:pr-3'
                    >
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {projects.map((project) => (
                    <tr key={project.name} className='even:bg-gray-50'>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3'>
                        {project.name}
                      </td>

                      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3'>
                        <button className='text-indigo-600 hover:text-indigo-900'>
                          Edit<span className='sr-only'>, {project.name}</span>
                        </button>

                        <button className='text-indigo-600 hover:text-indigo-900 ml-6'>
                          Delete
                          <span className='sr-only'>, {project.name}</span>
                        </button>

                        <Link
                          to='/admin/project-tasks'
                          className='text-indigo-600 hover:text-indigo-900 ml-5'
                        >
                          View projects
                          <span className='sr-only'>, {project.name}</span>
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
    </Layout>
  );
}
