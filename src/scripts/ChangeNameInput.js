import { useDispatch } from "react-redux";
import { changeFirstNameAction, changeLastNameAction } from './store';

function ChangeNameInput(props) {
   const dispatch = useDispatch()

   return (
      <input
         className={props.className}
         type="text"
         id={props.id}
         defaultValue={props.value}
         onChange={(event) => {
            (props.id === 'firstname' ? (
               dispatch(changeFirstNameAction(event.target.value))
            ) : (
               dispatch(changeLastNameAction(event.target.value))
            ))
         }}
      />
   )
}

export default ChangeNameInput;