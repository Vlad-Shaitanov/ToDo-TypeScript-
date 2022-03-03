import React, {FC} from "react";
import { IToDo } from "../types/types";

interface TodoItemProps {
  todo: IToDo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return(
	  <div>
		  <input type="checkbox" checked={todo.completed} />
		  {todo.id}. {todo.title}
	  </div>
  );
};
