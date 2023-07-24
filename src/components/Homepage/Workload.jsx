import React from 'react';

export default function Workload() {
  return (
    <div class='w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <div class='flex items-center justify-between mb-4'>
        <h5 class='text-xl font-bold leading-none text-gray-900 dark:text-white'>
          Recent Engineer Activity
        </h5>
        <a
          href='#'
          class='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'
        >
          View all
        </a>
      </div>
      <div class='flow-root'>
        <ul role='list' class='divide-y divide-gray-200 dark:divide-gray-700'>
          <li class='py-3 sm:py-4'>
            <div class='flex items-center space-x-4'>
              <div class='flex-shrink-0'>
                <img
                  class='w-8 h-8 rounded-full'
                  src='https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8fDA%3D&amp;w=1000&amp;q=80'
                  alt='Neil image'
                />
              </div>
              <div class='flex-1 min-w-0'>
                <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  Neil Sims
                </p>
                <p class='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@sims.com
                </p>
              </div>
              <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                2min ago
              </div>
            </div>
          </li>
          <li class='py-3 sm:py-4'>
            <div class='flex items-center space-x-4'>
              <div class='flex-shrink-0'>
                <img
                  class='w-8 h-8 rounded-full'
                  src='https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8fDA%3D&amp;w=1000&amp;q=80'
                  alt='Bonnie image'
                />
              </div>
              <div class='flex-1 min-w-0'>
                <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  Bonnie Green
                </p>
                <p class='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@green.com
                </p>
              </div>
              <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                16min ago
              </div>
            </div>
          </li>
          <li class='py-3 sm:py-4'>
            <div class='flex items-center space-x-4'>
              <div class='flex-shrink-0'>
                <img
                  class='w-8 h-8 rounded-full'
                  src='https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8fDA%3D&amp;w=1000&amp;q=80'
                  alt='Michael image'
                />
              </div>
              <div class='flex-1 min-w-0'>
                <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  Michael Gough
                </p>
                <p class='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@gough.com
                </p>
              </div>
              <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                1hr ago
              </div>
            </div>
          </li>
          <li class='py-3 sm:py-4'>
            <div class='flex items-center space-x-4'>
              <div class='flex-shrink-0'>
                <img
                  class='w-8 h-8 rounded-full'
                  src='https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8fDA%3D&amp;w=1000&amp;q=80'
                  alt='Lana image'
                />
              </div>
              <div class='flex-1 min-w-0'>
                <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  Lana Byrd
                </p>
                <p class='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@byrd.com
                </p>
              </div>
              <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                3 days ago
              </div>
            </div>
          </li>
          <li class='pt-3 pb-0 sm:pt-4'>
            <div class='flex items-center space-x-4'>
              <div class='flex-shrink-0'>
                <img
                  class='w-8 h-8 rounded-full'
                  src='https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjBkb2d8ZW58MHx8MHx8fDA%3D&amp;w=1000&amp;q=80'
                  alt='Thomas image'
                />
              </div>
              <div class='flex-1 min-w-0'>
                <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  Thomes Lean
                </p>
                <p class='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@lean.com
                </p>
              </div>
              <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                35min ago
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
