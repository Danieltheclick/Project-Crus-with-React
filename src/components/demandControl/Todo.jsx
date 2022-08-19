function Todo({ todo, index, editRow, eliminarTodo}) {

    const { id, nameProject, productOwner, dbtLeader, dateAdmission, proposedStartDate, priority } = todo
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{nameProject}</td>
                <td>{productOwner}</td>
                <td>{dbtLeader}</td>
                <td>{dateAdmission}</td>
                <td>{proposedStartDate}</td>
                <td>{priority}</td>
                <td>
                <button className="btn btn-warning col-auto justify-content-center" onClick={ () => editRow(todo)}  >
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