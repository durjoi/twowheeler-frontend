import axios from 'axios';
import { useEffect, useState } from 'react';

const useEvent = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://floating-crag-86254.herokuapp.com/events').then((response) => {
            setEvents(response.data);
            setLoading(false)
        });
    }, []);

    return {events, setEvents, loading};

};

export default useEvent;