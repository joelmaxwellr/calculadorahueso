import React from 'react'
import CuerpoTabla from './CuerpoTabla'

function TablaClientes({datos}) {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Tipo de Impresión</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <CuerpoTabla datos={datos} />

            </table>
        </>
    )
}

export default TablaClientes