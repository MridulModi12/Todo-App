export function CreateToDo() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return <div>

        <input style={{
            margin: 5,
            padding: 5
        }}type="text" placeholder="title" onChange={function(e) {
            setTitle(e.target.value)
        }}></input> <br/>

        <input style={{
            margin: 5,
            padding: 5
        }}type="text" placeholder="description" onChange={function(e) {
            setDescription(e.target.value)
        }}></input> <br/>

        <button style={{
            margin: 5,
            padding: 5
        }} onClick={() => {
            fetch("localhost:3000/todo" , {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }), 
                headers: {
                    "Content-type" : "application/json"
                }
            }) 
                .then(async function(res) {
                    const json = await res.json()
                    alert("Todo added")
                })
        }}>Add a todo</button>
    </div>
}