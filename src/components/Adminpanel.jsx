import React,{useState} from 'react'
import { Link } from "react-router-dom"
import Sliderbar from './Slidebaradm/Sliderbar'
import Listproductos from './MainPage/Listproductos'
import Listclientes from './MainPage/Listclientes'
import SliderHome from "./MainPage/Slider"
import Facturas from './MainPage/Facturas'
import Editarproducto from './MainPage/Editarproducto'

const Adminpanel = ({ productItems, addToCart, CartItem, shopItems,Clientes }) => {
    
    const [selectedCategory, setSelectedCategory] = useState('');
  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case 'Clientes':
        return <Listclientes  Clientes={Clientes} />;
      case 'Productos':
        return <Listproductos productItems={productItems} CartItem={CartItem} addToCart={addToCart}/>;
      case 'Facturas':
        return <Facturas productItems={productItems} CartItem={CartItem} addToCart={addToCart}/>;
      // case 'ASEO_PERSONAL':
      //   return <AseoPersonal />;
      // case 'LIMPIEZA':
      //   return <Limpieza />;
      default:
        return <SliderHome />;
    }
  };
    return (
        <section className='home'>
            <div className='container d_flex'>
                <Sliderbar productItems={productItems} onSelectCategory={setSelectedCategory} />
                {renderCategoryComponent()}
            </div>
        </section>

    )
}

export default Adminpanel