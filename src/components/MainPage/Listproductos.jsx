import React from 'react';
import { Link } from 'react-router-dom';
import Editarproducto from './Editarproducto';
import { useHistory } from 'react-router-dom';

const Listproductos = ({ productItems, addToCart }) => {
  const history = useHistory();
  const handleEditClick = (product) => {
    console.log(product)
    history.push({
      pathname: '/Editarproducto',
      state: { product }
    });
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">CODIGO</th>
          <th scope="col">PRODUCTO</th>
          <th scope="col">CATEGORIA</th>
          <th scope="col">PRECIO</th>
          <th scope="col">STOCK</th>
          <th scope="col">ESTADO</th>
          <th scope="col">FECHA DE CREACION</th>
          <th scope="col">IMAGEN</th>
          <th scope="col">ACCION</th>
        </tr>
      </thead>
      <tbody>
        {productItems.map((product) => (
          <tr key={product.iD_PRODUCTO}>
            <th scope="row">{product.iD_PRODUCTO}</th>
            <td>{product.codigo}</td>
            <td>{product.nombre}</td>
            <td>{product.categoria_pro_id}</td>
            <td>{product.precio}</td>
            <td>{product.stock}</td>
            <td>{product.activo === true ? 'Activo' : 'Inactivo'}</td>
            <td>{product.fecha_Creacion}</td>
            <td>
              <img
                src={`./images/product/${product.codigo}.jpg`}
                alt={product.nombre}
                style={{ width: '50px', height: '50px' }}
              />
            </td>
            <td>
              {/* <Link
                to="/Editarproducto"
                state={{ product }} 
              > */}
                <button type="button" className="btn btn-success" onClick={() => handleEditClick(product)}>
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
  );
};

export default Listproductos;