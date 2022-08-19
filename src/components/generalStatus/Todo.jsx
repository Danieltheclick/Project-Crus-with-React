function Todo({ todo, index, editRow, eliminarTodo }) {

    const { id, name, description, status, startDate, endDate, deployDate, supplier, dBTLead, divisions, type, ceco, totalhours, notes, completion } = todo
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{status}</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>{deployDate}</td>
                <td>{supplier}</td>
                <td>{dBTLead}</td>
                <td>{divisions}</td>
                <td>{type}</td>
                <td>{ceco}</td>
                <td>{totalhours}</td>
                <td>{notes}</td>
                <td>{completion}</td>
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
