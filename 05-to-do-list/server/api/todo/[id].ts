import { db } from "~~/server/db";
import {createError, sendError} from "h3";

export default defineEventHandler((ev) => {
    const method = ev.req.method;
    const context = ev.context;
    const {id} = context.params;

    const findToDoById = (toDoId) => {
        let index;

        const todo = db.todos.find((td, i) => {
            if(td.id === toDoId){
                index = i;
                return true;
            } else {
                return false;
            }
        });

        if(!todo){
            const ToDoNotFoundError = createError({
                statusCode: 404,
                statusMessage: "To-do item not found.",
                data: {}
            });

            sendError(ev, ToDoNotFoundError);
        }

        return {todo, index};
    }


    if(method === "PUT"){
        const {todo, index} = findToDoById(id);

        const updatedToDo = {
            ...todo,
            completed: !todo.completed
        };

        db.todos[index] = updatedToDo;

        return updatedToDo;
    }


    if(method === "DELETE"){
        const {index} = findToDoById(id);

        db.todos.splice(index, 1);

        return {
            message: "Item has been deleted."
        }
    }
});