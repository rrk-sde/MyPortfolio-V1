import { useEffect, useState } from 'react';
import axios from 'axios';

const useWebsiteViews = (websiteName) => {
    const [views, setViews] = useState(0);
    const apiUrl = 'https://contactviews.onrender.com'


    useEffect(() => {
        const fetchData = async () => {
            try {

                await axios.put(`${apiUrl}/website/${websiteName}/increment-views`);

                const response = await axios.get(`${apiUrl}/website/${websiteName}/views`);
                setViews(response.data.views);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [websiteName]);

    return views;
};

export default useWebsiteViews;
