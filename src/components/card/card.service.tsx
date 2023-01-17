import { useState, useEffect } from 'react'
import { UseCard } from './card.props'
import { Item } from '../main'

const useCard:UseCard = ({available, bottomDescription}) => {    
    const [selected, setSelected] = useState<boolean>(false)

    const bottomDescriptionText = available ? bottomDescription : 'Печалька, с курой закончился.'

    useEffect(() => {
        console.log('card')
        console.log()
    }, [])


    const state = {
        selected: selected,
        bottomDescription: bottomDescriptionText,
    }

    const api = {
        select: () => setSelected(!selected),
    }

    return (
        [state, api]
    )
}
export default useCard