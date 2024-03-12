import React from 'react';
import { Line } from 'react-chartjs-2';

const UserProfileChart = () => {
    // Mock data for user profile trends (number of users over time)
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Number of Users',
                data: [100, 150, 200, 250, 300, 350],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div>
            <h2>User Profile Trends</h2>
            <Line data={data} />
        </div>
    );
};

export default UserProfileChart;
