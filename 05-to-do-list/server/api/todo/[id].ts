import { db } from "~~/server/db";

export default defineEventHandler((ev) => {
    const method = ev.req.method;

    const context = ev.context;

    if(method === "PUT"){
        const {id} = context.params;
        let index;
        const todo = db.todos.find((td, i) => {
            if(td.id === id){
                index = i;
                return true;
            } else {
                return false;
            }
        });

        if(!todo) throw new Error();

        const updatedToDo = {
            ...todo,
            completed: !todo.completed
        };

        db.todos[index] = updatedToDo;

        return updatedToDo;
    }
});