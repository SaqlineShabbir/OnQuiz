"use client"


import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const router = useRouter()
    const [categories, setCategories] = useState([])
    const [information, setInformation] = useState([]);
    //fetch category data
    const fetchCategoryData = async () => {
        try {
            const response = await fetch(`https://on-quiz.vercel.app/api/category`, {
                method: 'GET'
            })

            const data = await response.json()

            setCategories(data?.categories)

        } catch (error) {
            console.log(error.message)

        }
    }
    useEffect(() => {
        fetchCategoryData()
    }, [])

    //fetch the user and provide data
    const fetchUser = async () => {

        try {
            const response = await fetch('/api/user');

            const result = await response.json();

            if (result?.user) {
                setUser(result.user);
            }

        } catch (error) {
            console.error('Error fetching user data:', error);

        }
    }

    useEffect(() => {

        fetchUser();
    }, []);

    const fetchInfo = async () => {
        try {
            const response = await fetch(`https://on-quiz.vercel.app/api/result`, {
                method: 'GET'
            })

            const data = await response.json()
            console.log('this is ', data)
            setInformation(data?.data)

        } catch (error) {

        }
    }

    useEffect(() => {
        fetchInfo()
    }, [])


    const logout = async () => {
        try {
            const response = await fetch('/api/logout');

            if (response.ok) {
                // If the response status is 200 OK
                console.log('Logout successful');


                // Redirect the user to the login page
                router.push('/login');
                setUser(null)
            } else {
                // If the response status is not successful (e.g., 404, 500, etc.)
                console.log(`Logout failed with status: ${response.status}`);

            }
        } catch (error) {
            // If there is a network error or any other exception
            console.error('Error during logout:', error.message);
            toast.error('Error during logout');
        }
    }


    const authInfo = {
        user,
        categories,
        logout,
        fetchUser,
        information


    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;