import useCard from "./card.service"
import C from './card.module.scss'
import { Item } from "../main"
import { Name } from "./Name"
import { ReactSVG } from 'react-svg'

export function Card(item:Item) {
	const [state, api] = useCard() 
	console.log(state)

	return (
		<div className={C.card}>
			<div className={C.back}>			
				<ReactSVG className={C.svgColored} src="media/back.svg" />
				<ReactSVG className={C.svgNormal} src="media/back.svg" />
			</div>
			<div className={C.inner}>
				<div>{item.topDescription}</div>
				<div>
					{item.name.map((part, index) => <Name part={part} index={index} key={'name_' + part} />)}
				</div>
				<div>
					{item.about.map((part) => <p key={'about' + part}>{part}</p>)}
				</div>
			</div>			
		</div>
	)
}