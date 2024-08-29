import React from 'react'

const Editarcliente = () => {
    const location = useLocation();
    const { state } = location;
    const product = state?.product;
    const handleEdit = async () => {
        const updatedProduct = {
            iD_PRODUCTO:product.iD_PRODUCTO,
            codigo: document.getElementById('codigo').value,
            nombre: document.getElementById('nombre').value,
            categoria_pro_id: document.getElementById('categoria').value,
            precio: document.getElementById('precio').value,
            stock: document.getElementById('stock').value,
            activo: document.getElementById('estado').value === '1' ? true : false
        };

        try {
            // console.log(updatedProduct);
            const response = await axios.put(`https://localhost:7270/PRODUCT/UpdateProduct?id=${product.iD_PRODUCTO}`, updatedProduct, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Producto actualizado")
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };
  return (
    <div className="container-edit">
            <label>RUC O DNI:</label>
            <div className="input-field">
                <input
                    type="text"
                    id='codigo'
                    placeholder="CODIGO"
                    defaultValue={product ? product.codigo : ''}
                />
            </div>
            <label>NOMBRE:</label>
            <div className="input-field">
                <input
                    type="text"
                    id='nombre'
                    placeholder="NOMBRE"
                    defaultValue={product ? product.nombre : ''}
                />
            </div>
            <label>DIRECCION:</label>
            <div className="input-field">
                <input
                    type="text"
                    id='categoria'
                    placeholder="CATEGORIA"
                    defaultValue={product ? product.categoria_pro_id : ''}
                />
            </div>
            <label>CORREO:</label>
            <div className="input-field">
                <input
                    type="text"
                    id='precio'
                    placeholder="PRECIO"
                    defaultValue={product ? product.precio : ''}
                />
            </div>
            <label>ESTADO:</label>
            <div className="input-field">
                <input
                    type="text"
                    id='estado'
                    placeholder="ESTADO"
                    defaultValue={product ? product.activo ? '1' : '0' : ''}
                />
            </div>
            <button type="button" className="btn btn-success" onClick={handleEdit}>
                EDITAR
            </button>
        </div>
  )
}

export default Editarcliente