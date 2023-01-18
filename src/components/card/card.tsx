import useCard from "./card.service"
import C from './card.module.scss'
import { Item } from "../main"
import { ReactSVG } from 'react-svg'
import { Name } from "./components/Name"
import { BottomButon } from "./components/BottomButon"

export function Card(item:Item) {
	const [state, api] = useCard(item) 
	console.log(state)
	
	return (
		<div className={item.available ? C.card : C.card+' '+C.unavailable}
			>
			<div className={C.back}>			
				<ReactSVG className={state.selected ? C.svgSelected : C.svgHovered } src="media/back.svg" />
				<ReactSVG className={C.svgNormal} src="media/back.svg" />
			</div>
			<div className={C.inner}
				onClick={api.select}>
				<div className={C.topDescription}>
					{item.topDescription}
				</div>
				<div className={C.names}>
					{item.name.map((part, index) => <Name part={part} index={index} key={'name_' + part} />)}
				</div>
				<div className={C.about}>
					{item.about.map((part) => <p key={'about' + part}>{part}</p>)}
				</div>
				<div className={state.selected ? C.weightSelected : C.weight}>
					<div>{item.weight}</div>
					<div>кг</div>
				</div>
			</div>	
			<div className={item.available ? C.bottomDescription : C.bottomDescription+' '+C.unavailable}>
				<div>{(!state.selected && item.available) ? <BottomButon select={api.select}/> : state.bottomDescription }</div>
			</div>					
		</div>
	)
}