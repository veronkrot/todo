import TodoComponent from "./todoComponent";

const CreateTodoBtn = () => {
    const createTodo = () => {
        return console.log("hellos")
    }
    return(
        <button onClick={createTodo}>Create ToDo</button>
    )
}

export default CreateTodoBtn;
