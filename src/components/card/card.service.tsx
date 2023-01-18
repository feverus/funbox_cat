import { useState, useEffect } from 'react'
import { UseCard } from './card.props'

const useCard:UseCard = ({available, bottomDescription, name}) => {    
    const [selected, setSelected] = useState<boolean>(false)

    const shortName = (name.length>1) ? name[1] : name[0]    
    const bottomDescriptionText = available ? bottomDescription : `Печалька, ${shortName} закончился.`

    useEffect(() => {
        console.log('card')
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