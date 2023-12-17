import {ButtonWrapper} from "./style";
import {ReactNode} from "react";

interface IButtonProps {
  handleClick: () => void;
  text: string;
  type: 'Normal' | 'Primary' | 'Danger';
  icon?: ReactNode;
}

function Button({handleClick, text, type, icon}: IButtonProps) {
  return (
    <ButtonWrapper $type={type} onClick={handleClick}>
      <div className={'icon'}>{icon}</div>
      <button type='button'>{text}</button>
    </ButtonWrapper>
  );
}

export default Button;