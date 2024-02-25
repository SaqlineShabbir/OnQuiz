import React from 'react';

const ProgressBar = ({ progress }) => {
    return (
        <div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div
                    className="bg-[#FFAE96] h-1.5 rounded-full dark:bg-[#FFAE96]"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
