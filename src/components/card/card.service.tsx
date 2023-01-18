import { useState, useEffect } from 'react'
import { UseCard } from './card.props'

const useCard:UseCard = ({available, bottomDescription, name}) => {    
    const [selected, setSelected] = useState<boolean>(false)
    const [mouseLeave, setMouseLeave] = useState<boolean>(false)

    const shortName = (name.length>1) ? name[1] : name[0]    
    const bottomDescriptionText = available ? bottomDescription : `Печалька, ${shortName} закончился.`

    useEffect(() => {
        console.log('card')
    }, [])


    const state = {
        selected: selected,
        mouseLeave: mouseLeave,
        bottomDescription: bottomDescriptionText,
    }

    const api = {
        select: () => {
            if (selected) setMouseLeave(false)
            setSelected(!selected)
        },
        moveMouseOut: () => {
            setMouseLeave(true)
        },
    }

    return (
        [state, api]
    )
}
export default useCard