import { useState, useEffect } from 'react';
import { getWaifu } from '../helpers/getWaifu';

export const useFetchWaifu = (category) => {
     const [state, setState] = useState({
         data: [],
         loading: true
     });

    useEffect(() => {
        getWaifu()
            .then((users) => setState({
                data: users,
                loading: false
            })
        )
    }, [category]);

    return state
}
