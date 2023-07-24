import React from 'react';

export default function Progress() {
  return (
    <section class='border-2 p-8 w-fit rounded-lg'>
      <div>
        <div
          class='flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20 w-fit-content border-4'
          x-data='{ circumference: 50 * 2 * Math.PI, percent: 10 }'
        >
          <div class='flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full'>
            <svg
              class='w-32 h-32 transform translate-x-1 translate-y-1'
              x-cloak
              aria-hidden='true'
            >
              <circle
                class='text-gray-300'
                stroke-width='10'
                stroke='currentColor'
                fill='transparent'
                r='50'
                cx='60'
                cy='60'
              />
              <circle
                class='text-indigo-600'
                stroke-width='10'
                stroke-dasharray='circumference'
                stroke-dashoffset='circumference - percent / 100 * circumference'
                stroke-linecap='round'
                stroke='currentColor'
                fill='transparent'
                r='50'
                cx='60'
                cy='60'
              />
            </svg>
            <span
              class='absolute text-2xl text-blue-700'
              x-text='`${percent}%`'
            ></span>
          </div>
          <p class='ml-10 mr-4 font-medium text-gray-600 sm:text-xl'>
            Overall Progress
          </p>

          <span class='ml-auto text-xl font-medium text-blue-600 hidden sm:block'>
            78%
          </span>
        </div>
      </div>

      <div class='pt-14'>
        <div class=''>
          <dl class=' flex gap-20 mt-0'>
            <div class='mx-auto flex max-w-xs flex-col gap-y-4'>
              <dt class='text-base leading-7 text-green-600'>Completed</dt>
              <dd class='order-first font-semibold tracking-tight text-gray-900 sm:text-xl text-center '>
                26
              </dd>
            </div>
            <div class='mx-auto flex max-w-xs flex-col gap-y-4'>
              <dt class='text-base leading-7 text-yellow-600'>Delayed</dt>
              <dd class='order-first font-semibold tracking-tight text-gray-900 sm:text-xl text-center'>
                35
              </dd>
            </div>
            <div class='mx-auto flex max-w-xs flex-col gap-y-4'>
              <dt class='text-base leading-7 text-red-600'>Ongoing</dt>
              <dd class='order-first font-semibold tracking-tight text-gray-900 sm:text-xl text-center'>
                35
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div class='border-2 mt-10 p-4 rounded-lg'>
        <div class='flex items-center justify-between '>
          <h5 class='text-l leading-none text-indigo-600 dark:text-white'>
            Upcoming Project Due Date
          </h5>
          <a
            href='#'
            class='text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400'
          >
            View all
          </a>
        </div>
      </div>

      <div class='border-2 mt-4 p-4 rounded-lg'>
        <div class='flex items-center justify-between '>
          <h5 class='text-l leading-none text-indigo-600 dark:text-white'>
            Past Projects Due Dates
          </h5>
          <a
            href='#'
            class='text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400'
          >
            View all
          </a>
        </div>
      </div>
    </section>
  );
}
