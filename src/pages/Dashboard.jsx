import React from 'react';

const Dashboard = () => {
    return (
        <div className='p-4'>
            <h2 className='text-xl font-bold mb-4'>Dashboard</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                    <h3 className='text-lg font-semibold'>Total Transactions</h3>
                    <p className='text-2xl'>35 Bills</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                    <h3 className='text-lg font-semibold'>Total Sales</h3>
                    <p className='text-2xl'>Rp. 500,000</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                    <h3 className='text-lg font-semibold'>Total Orders</h3>
                    <p className='text-2xl'>Rp. 100,000</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                    <h3 className='text-lg font-semibold'>Total Revenue</h3>
                    <p className='text-2xl'>Rp. 34,000,000</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                    <h3 className='text-lg font-semibold'>Total Supplier</h3>
                    <p className='text-2xl'>
                        10 <span>Supplier</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
