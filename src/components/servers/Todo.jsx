function Todo({ todo, index, editRow, eliminarTodo }) {

    const { id, ip, name, plataform, type, os, description, proposedStartDate } = todo
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{ip}</td>
                <td>{name}</td>
                <td>{plataform}</td>
                <td>{type}</td>
                <td>{proposedStartDate}</td>
                <td>{os}</td>
                <td>{description}</td>
                <td>
                    <button className="btn btn-warning col-auto justify-content-center" onClick={() => editRow(todo)}  >
                        <i class="far fa-edit"></i>
                    </button>
                    <button className="btn btn-danger col-auto justify-content-center" onClick={() => eliminarTodo(id)}>
                        <i class="far fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}

export default Todo