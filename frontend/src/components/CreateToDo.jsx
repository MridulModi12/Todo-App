export function CreateToDo() {
    return <div>
        <input style={{
            margin: 5,
            padding: 5
        }}type="text" placeholder="title"></input> <br/>
        <input style={{
            margin: 5,
            padding: 5
        }}type="text" placeholder="description"></input> <br/>
        <button style={{
            margin: 5,
            padding: 5
        }}>Add a todo</button>
    </div>
}