import { BottomButtonProps } from "../card.props";

export const BottomButon = ({ select }: BottomButtonProps) => {
	return (
		<>Что сидишь? Порадуй котэ <span onClick={() => select()}>купи.</span>
		</>
	);
};
