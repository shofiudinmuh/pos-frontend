import React, { useState } from 'react';
import { FaBars, FaBell, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ onToggleSidebar }) => {
    // State untuk toggle dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <nav className='bg-blue-600 p-4 text-white'>
            <div className='flex items-center justify-between'>
                {/* Tombol toggle sidebar */}
                <button onClick={onToggleSidebar} className='text-xl mr-4 focus:outline-none'>
                    <FaBars />
                </button>

                <h1 className='text-2xl font-bold'>POS System</h1>
                <div className='flex items-center space-x-6 ml-auto'>
                    {/* Notifikasi */}
                    <div className='relative flex items-center'>
                        <FaBell className='text-xl cursor-pointer hover:text-blue-300' />
                        <span className='absoulte -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1'>3</span>
                        {/* indikator notifikasi */}
                    </div>
                    {/* profil  dropdown */}
                    <div className='relative' onMouseLeave={() => setIsDropdownOpen(false)}>
                        <div
                            className='flex items-center cursor-pointer hover:text-blue-300'
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <FaUserCircle className='text-xl mr-2' />
                            <span>Admin</span>
                        </div>
                        {/* Dropdown menu */}
                        {isDropdownOpen && (
                            <div className='absolute right-0 mt-0 w-48 bg-white text-gray-800 rounded-lg shadow-lg border'>
                                <ul>
                                    <li className='px-4 py-2 hover:bg-hray-100'>
                                        <button href='#' className='hover:bg-gray-100'>
                                            <a href='/profile'>Profile</a>
                                        </button>
                                    </li>
                                    <li className='px-4 py-2 hover:bg-hray-100 flex items-center'>
                                        <FaSignOutAlt className='mr-2' />
                                        <a href='/logout' type='submit'>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
