import { NameProps } from "../card.props";

export const Name = ({ part, index }: NameProps) => {
	switch (index) {
		case 0:
			return <div><h1>{part}</h1></div>;
		case 1:
			return <div><h2>{part}</h2></div>;
		case 2:
			return <div><h3>{part}</h3></div>;

		default:
			return <div><h6>{part}</h6></div>;
	}
}
