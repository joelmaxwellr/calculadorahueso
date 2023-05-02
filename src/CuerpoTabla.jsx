import React from 'react'

function CuerpoTabla({ datos }) {
    return (
        <>
            {datos.map(({ nombre, precio, tipoImpresion, id, estadoImpresion }, i) => (
                <tbody key={i}>
                    <tr>
                        <th scope="row">1</th>
                        <td>{nombre.toUpperCase()}</td>
                        <td>{precio}</td>
                        <td>{tipoImpresion}</td>
                        <td>{estadoImpresion}</td>

                        <td>
                            <input type="button" value="Borrar" id={id} onClick={handlerBorrar} />
                            <input type="button" value="Editar" id={id} onClick={handlerEditar} />
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Editar
                            </button>

                        </td>
                    </tr>
                    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </tbody>

            ))}
        </>
    )
}

export default CuerpoTabla