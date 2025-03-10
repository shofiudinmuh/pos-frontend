import React from 'react';

const Sidebar = () => {
    return (
        <div className='bg-gray-800 tex-white w-64 min-h-screen p-4'>
            <ul>
                <li className='mb-2'>
                    <a href='#' className='hover:text-blue-400'>
                        Dashboard
                    </a>
                </li>
                <li className='mb-2'>
                    <a href='#' className='hover:text-blue-400'>
                        Inventory
                    </a>
                </li>
                <li className='mb-2'>
                    <a href='#' className='hover:text-blue-400'>
                        Sales
                    </a>
                </li>
                <li className='mb-2'>
                    <a href='#' className='hover:text-blue-400'>
                        Report
                    </a>
                </li>
                <li className='mb-2'>
                    <a href='#' className='hover:text-blue-400'>
                        Supplier
                    </a>
                </li>
                <li className='mb-2'>
                    <a href='#' className='hover:text-blue-400'>
                        User
                    </a>
                </li>
                <li className='mb-2'>
                    <a href='#' className='hover:text-blue-400'>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
