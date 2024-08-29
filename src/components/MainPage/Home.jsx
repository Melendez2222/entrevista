import React,{useState} from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import Shirt from "./Shirt"

const Home = ({ productItems, addToCart, CartItem, shopItems }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case 'CAMISA':
        return <Shirt  productItems={productItems} CartItem={CartItem} addToCart={addToCart}/>;
      // case 'PANTALON':
      //   return <Pantalon />;
      // case 'CALZADO':
      //   return <Calzado />;
      // case 'ASEO_PERSONAL':
      //   return <AseoPersonal />;
      // case 'LIMPIEZA':
      //   return <Limpieza />;
      default:
        return <SliderHome />;
    }
  };
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories productItems={productItems} onSelectCategory={setSelectedCategory} />
          {renderCategoryComponent()}
        </div>
      </section>
    </>
  )
}

export default Home
