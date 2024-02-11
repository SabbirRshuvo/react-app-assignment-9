import React from 'react';
import NormalCharts from '../ReCharts/NormalCharts'
import CircleCharts from '../ReCharts/CircleCharts';
import SimpleBarCharts from '../ReCharts/SimpleBarCharts';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div className='container'>
            <div className="first">
                <NormalCharts></NormalCharts>
            </div>
            <div className="second">
                <CircleCharts></CircleCharts>
            </div>
            <div className="third">
                <SimpleBarCharts></SimpleBarCharts>
            </div>

        </div>
    );
};

export default Dashboard;