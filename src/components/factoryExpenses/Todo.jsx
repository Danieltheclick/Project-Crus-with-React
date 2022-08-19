function Todo({ todo, index, editRow, eliminarTodo }) {

    const { id, workManager, attachmentName, billNumber, purchaseOrder, provider, description, facturationPeriod, invoiceMonth, society, dateAdmission, value, currencyType, cecos, status } = todo
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{workManager}</td>
                <td>{attachmentName}</td>
                <td>{billNumber}</td>
                <td>{purchaseOrder}</td>
                <td>{provider}</td>
                <td>{description}</td>
                <td>{facturationPeriod}</td>
                <td>{invoiceMonth}</td>
                <td>{society}</td>
                <td>{dateAdmission}</td>
                <td>{value}</td>
                <td>{currencyType}</td>
                <td>{cecos}</td>
                <td>{status}</td>
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
