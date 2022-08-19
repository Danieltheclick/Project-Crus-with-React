function Todo({ todo, index, editRow, eliminarTodo}) {

    const { id, name, description, bussinesManager, frontLanguage, blackLanguaje, port, serverApplication, ipServerApplication, division, nameDataBase, serverDataBase, ipServerDataBase } = todo
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{division}</td>
                <td>{bussinesManager}</td>
                <td>{frontLanguage}</td>
                <td>{blackLanguaje}</td>
                <td>{port}</td>
                <td>{serverApplication}</td>
                <td>{ipServerApplication}</td>
                <td>{nameDataBase}</td>
                <td>{serverDataBase}</td>
                <td>{ipServerDataBase}</td>
                <td>
                <button className="btn btn-warning col-auto justify-content-center" onClick={ () => editRow(todo)}  >
                <i class="far fa-edit"></i>
                </button>
                <button className="btn btn-danger col-auto justify-content-center" onClick={ () => eliminarTodo(id)}>
                <i class="far fa-trash-alt"></i>
                </button>
                </td>
            </tr>
        </>
    )
}

export default Todo
