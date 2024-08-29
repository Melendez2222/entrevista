import React, { useState } from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"


const Search = ({ CartItem }) => {
  
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>
          <div className='icon f_flex width'>
            <Link to='/LoginModal'>
            <i className='fa fa-user icon-circle'></i>
            </Link>
          </div>
          <div className='cart'>
            <Link to='/cart'>
              <i className='fa fa-shopping-bag icon-circle'></i>
              <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
            </Link>
          </div>
        </div>
      </section >
      {/* <LoginModal isOpen={isModalOpen} onClose={handleModalClose}>
          {/* Aquí puedes agregar el formulario de login o registro }
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </LoginModal> */}
    </>
  )
}

export default Search
