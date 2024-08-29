import React from 'react';
import { Link } from 'react-router-dom';
import Editarproducto from './Editarproducto';
import { useHistory } from 'react-router-dom';

const Listclientes = ({ Clientes}) => {
  const history = useHistory();
  const handleEditClick = (client) => {
    console.log(client)
    history.push({
      pathname: '/Editarproducto',
      state: { client }
    });
  };
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">RUC/DNI</th>
          <th scope="col">NOMBRE</th>
          <th scope="col">DIRECCION</th>
          <th scope="col">CORREO</th>
          <th scope="col">ESTADO</th>
          <th scope="col">FECHA DE CREACION</th>
          <th scope="col">ACCION</th>
        </tr>
      </thead>
      <tbody>
        {Clientes.map((client) => (
          <tr key={client.iD_CLIENTE}>
            <th scope="row">{client.iD_CLIENTE}</th>
            <td>{client.rucdni}</td>
            <td>{client.nombre}</td>
            <td>{client.direccion}</td>
            <td>{client.correo}</td>
            <td>{client.activo === true ? 'Activo' : 'Inactivo'}</td>
            <td>{client.fecha_Creacion}</td>
            <td>
              {/* <Link
                to="/Editarproducto"
                state={{ product }} 
              > */}
                <button type="button" className="btn btn-success" onClick={() => handleEditClick(client)}>
                  EDITAR
                </button>
              {/* </Link> */}
              <button type="button" className="btn btn-danger">
                ELIMINAR
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Listclientes