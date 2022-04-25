import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [recharts, setRecharts] = useState([]);

    useEffect(() => {
        fetch('rechartdata.json')
            .then(res => res.json())
            .then(data => setRecharts(data))
    }, []);

    return (
        <div>
            <h1 className='text-2xl font-bold m-4 text-center'>This is my Salary Charts</h1>
            <div className='grid grid-cols-1 xl:grid-cols-2 justify-evenly items-center md:gap-8 m-20'>
                <div className='m-10'>
                    <LineChart width={600} height={250} data={recharts}>
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="investment" />
                        <Tooltip />
                    </LineChart>
                </div>

                <div className='m-10'>
                    <AreaChart width={600} height={250} data={recharts}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="sell" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>

                <div className='m-10'>
                    <BarChart width={600} height={250} data={recharts}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill="#8884d8" />
                        <Bar dataKey="sell" fill="#82ca9d" />
                    </BarChart>
                </div>

                <div className='m-10'>
                    <PieChart width={600} height={250}>
                        <Pie data={recharts} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={recharts} dataKey="sell" nameKey="investment" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;