import { useState, useEffect } from 'react'
import { UseCard } from './card.props'
import { Item } from '../main'

const useCard:UseCard = () => {    
    const [selected, setSelected] = useState<boolean>(false)

    useEffect(() => {
        console.log('card')
    }, [])


    const state = {
        selected: selected,
    }

    const api = {
        select: () => setSelected(true),
        unSelect: () => setSelected(false),
    }

    return (
        [state, api]
    )
}
export default useCard