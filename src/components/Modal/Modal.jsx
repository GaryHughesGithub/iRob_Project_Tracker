import React from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { XMarkIcon } from '@heroicons/react/24/outline';


export default function Modal(props) {
  const { children, modalOpen, title } = props;

  const handleModalClose = (e) => {
    e.preventDefault();
    props.handleModalClose();
  };

  return (
    <Transition.Root show={modalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleModalClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
  
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="bg-white rounded-xl p-5 flex flex-col">
                <header className="flex justify-between mb-5">
                  <h2 className="text-gray-800 text-xl">{title}</h2>
                  <button onClick={handleModalClose}>
                    <XMarkIcon className="w-5 h-5 text-gray80" />
                  </button>
                </header>
  
                <div className="flex-grow">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
  
}
