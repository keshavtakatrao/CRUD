import React from 'react';
import Notification from './notification'

function Dashboard() {
    let notificationCard =[
        {
            cardTitle : 'Earning Monthly',
            value : 4000,
            currency : "$",
            color : "border-left-primary",
            icon : 'fa-calender',
            isProgress : false,
        },
        
        {
            cardTitle : 'Earning (Annual)',
            value : 215000,
            currency : "$",
            color : "border-left-success",
            icon : 'fa-dollar-sign',
            isProgress : false,
        },

        {
            cardTitle : 'Progress',
            value : 50,
            color : "border-left-lis",
            icon : 'fa-clipboard-list',
            isProgress : true,
        },

        {
            cardTitle : 'Pending Request',
            value : 18,
            color : "border-left-warning",
            icon : 'fa-comments',
            isProgress : false,
        }

    ];

    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
                </a>
            </div>

            <div class='row'>
                {
                    notificationCard.map(function (card) {
                            return (<Notification data={card}></Notification>);
                        })
                }
            </div>

        </>
    )
}

export default Dashboard;