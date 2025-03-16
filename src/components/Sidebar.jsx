import React from 'react';
import { BiSolidReport, BiLogOut } from 'react-icons/bi';
import { GrTransaction } from 'react-icons/gr';
import { FaUsers } from 'react-icons/fa';
import { MdDashboard, MdInventory, MdOutlineStore, MdPointOfSale } from 'react-icons/md';

const Sidebar = () => {
    return (
        <div className='bg-blue-600 text-white w-64 min-h-screen p-4'>
            <div className='flex items-center justify-center mb-8'>
                {/* logo */}
                {/* <img src='https://via.placeholder.com/150x50.png?text=Logo+POS' alt='POS Logo' className='w-32' /> */}
                <MdPointOfSale size={70} />
            </div>
            <ul>
                <li className='mb-2'>
                    <a href='#' className='flex items-center hover:text-blue-400'>
                        <MdDashboard className='mr-2' />
                        Dashboard
                    </a>
                </li>
                <li className='mb-2'>
                    <a href='#' className='flex items-center hover:text-blue-400'>
                        <GrTransaction className='mr-2' />
                        Transactions
                    </a>
                </li>
                <li className='mb-2'>
                    <a href='#' className='flex items-center hover:text-blue-400'>
                        <MdInventory className='mr-2' />
                        Inventory
                    </a>
                </li>
                <li className='mb-2'>
                    <a href='#' className='flex items-center hover:text-blue-400'>
                        <BiSolidReport className='mr-2' />
                        Report
                    </a>
                </li>
                <li className='mb-2'>
                    <a href='#' className='flex items-center hover:text-blue-400'>
                        <MdOutlineStore className='mr-2' />
                        Supplier
                    </a>
                </li>
                <li className='mb-2'>
                    <a href='#' className='flex items-center hover:text-blue-400'>
                        <FaUsers className='mr-2' />
                        User Management
                    </a>
                </li>
                <li className='mb-2'>
                    <a href='#' className='flex items-center hover:text-blue-400'>
                        <BiLogOut className='mr-2' />
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
