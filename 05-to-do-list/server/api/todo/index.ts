import { db } from "~~/server/db";
import {v4 as uuid} from 'uuid';

export default defineEventHandler(async (ev) => {
    const method = ev.req.method;

    if(method === "GET"){
        return db.todos;
    }

    if(method === "POST"){
        const body = await useBody(ev);
        
        if(!body.item) throw new Error();

        const newToDo = {
            id: uuid(),
            item: body.item,
            completed: false
        };

        db.todos.push(newToDo);

        return newToDo;
    }
    
})