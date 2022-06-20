import { useDispatch } from "react-redux";
import { nameEditingAction } from './store';

function NameEditingButton(props) {
   const dispatch = useDispatch()

   return (
      <button
         className={props.className}
         onClick={() => {
            dispatch(nameEditingAction())
         }}>
         {props.title}
      </button>
   )
}

export default NameEditingButton;