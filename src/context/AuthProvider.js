"use client"


import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const router = useRouter()
    const [categories, setCategories] = useState([])
    //fetch category data
    const fetchCategoryData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/category`, {
                method: 'GET'
            })

            const data = await response.json()
            console.log(data?.categories)
            setCategories(data?.categories)

        } catch (error) {
            console.log(error.message)

        }
    }
    useEffect(() => {
        fetchCategoryData()
    }, [])




    // const logout = async () => {
    //     try {
    //         const response = await fetch('/api/logout');

    //         if (response.ok) {
    //             // If the response status is 200 OK
    //             console.log('Logout successful');


    //             // Redirect the user to the login page
    //             router.push('/login');
    //             setUser(null)
    //         } else {
    //             // If the response status is not successful (e.g., 404, 500, etc.)
    //             console.log(`Logout failed with status: ${response.status}`);

    //         }
    //     } catch (error) {
    //         // If there is a network error or any other exception
    //         console.error('Error during logout:', error.message);
    //         toast.error('Error during logout');
    //     }
    // }


    const authInfo = {
        user,

        categories


    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;