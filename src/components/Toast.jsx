import React, { useState, useEffect } from 'react';

const ToastNotification = ({ message, success, key }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);

            // Auto-hide after 3 seconds
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);

            return () => {
                clearTimeout(timer);
                setIsVisible(false); // Reset isVisible state when component unmounts
            };
        }
    }, [message, key]);

    return (
        isVisible && (
            <div
                className={`fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 ${success ? 'border-l-4 border-green-600 dark:border-green-500' : 'border-l-4 border-red-600 dark:border-red-500'
                    }`}
                role="alert"
            >
                <svg
                    className={`w-5 h-5 ${success ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'
                        } rotate-45`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
                    />
                </svg>
                <div className={`ps-4 text-sm font-normal ${success ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
                    {message}
                </div>
            </div>
        )
    );
};

export default ToastNotification;

