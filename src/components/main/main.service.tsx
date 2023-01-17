import { useState, useEffect } from 'react'
import { Item, UseMain } from './main.props'

const useMain:UseMain = () => {    
    const [data, setData] = useState<Item[]>()

    const loadJson = async (): Promise<any|string> => {
        try {
            const response = await fetch('/data.json', {method: 'GET'});
            console.log(response)
            if (response.status===200) {
                return await response.json();
            } else {
                return String(response.status);
            }
        } catch (error) {
            if (error) {
                return (error as Error).message;
            }
        }
        return "Error";
    }

    useEffect(() => {
        console.log('welcome to main')
        loadJson()
            .then(result => {
                if (typeof result!=='string') setData(result.items)
                else console.error('Ошибка получения данных: '+result)
            })
    }, [])


    const state = {
        items: data,
    }

    const api = {
        loadJson:loadJson,
    }

    return (
        [state, api]
    )
}
export default useMain