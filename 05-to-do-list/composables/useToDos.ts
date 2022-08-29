const useToDos = () => {

    const {data: todos, refresh} = useAsyncData("todo", async () => {
        return $fetch("/api/todo");
    });
  
    const addToDo = async (item) => {
        if(!item) return;
        await $fetch("/api/todo", {method: "post", body: {item}});
        refresh();
    }
  
    const updateToDo = async (toDoId) => {
        await $fetch(`/api/todo/${toDoId}`, {method: "put"});
        refresh();
    }
  
    const deleteToDo = async (toDoId) => {
        await $fetch(`/api/todo/${toDoId}`, {method: "delete"});
        refresh();
    }  

    return {todos, addToDo, updateToDo, deleteToDo};
};


export default useToDos