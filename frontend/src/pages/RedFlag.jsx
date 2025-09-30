import React from 'react';

function RedFlag({ number, children, description }) {
    return (
        <span className="relative inline-block group">
        <span className="rounded p-0.5 relative">
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold z-10">
                {number}
            </span>
            {children}
        </span>
        {description && (
            <span className="absolute left-1/2 -translate-x-1/2 mt-5 px-3 py-2 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-max max-w-xs z-20 pointer-events-none">
                {description}
            </span>
        )}
    </span>
    );
}

export default RedFlag;