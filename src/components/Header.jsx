import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
  return (
    <div className="all bg-gray-300">
    <div className="logo1 w-5/5 h-7">
      <div className="logo w-1/5 h-[14vh] bg-[url(https://fony-kartinki.ru/_ph/133/2/924251221.png?1709025883)] bg-cover  bg-gray-300"></div>
    </div>

    <header className="flex justify-between p-3">
      <div className="but p-6">
        <button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-2 px-4 rounded-full shadow-md">
          время порадовать любимых
        </button>
      </div>

      <div className="box1">
        <div className="inputs">
          <input
            type="text"
            placeholder="Поиск по категориям"
            className="placeholder-opacity-50 text-gray-700 bg-gray-200 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 rounded-md py-2 px-4 w-80 m-6 h-9"
          />
          <input
            type="text"
            placeholder="Поиск по товарам "
            className="placeholder-opacity-50 text-gray-700 bg-gray-200 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 rounded-md py-2 px-4 w-80 m-6 h-9"
          />
        </div>
        <div className="silka">
                <a className="m-6 text-blue-800" href="#">Каталог товаров</a>
                <a className="m-6 text-gray-700" href="#">Форум</a>
                <a className="m-6 text-gray-700" href="#">Отзывы</a>
                <a className="m-6 text-gray-700" href="#">Акции</a>
                <a className="m-6 text-gray-700" href="#">Новости</a>
                <a className="m-6 text-gray-700" href="#">Информация</a>
            </div>
        </div>
         <div>
            <div className=" flex p-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full m-1">
                    <img className="w-9 h-7 m-2 " src="https://i.pinimg.com/originals/7d/bd/0b/7dbd0b51c20a695901a84c4c083500f6.png" alt=""/>

                    </div>
                <div className="">
                <div className="w-12 h-12 bg-gray-200 rounded-full m-1">
                   <FaTelegramPlane size={33} color='DeepSkyBlue'/>
               </div>
                    </div>
                <div className="w-12 h-12 bg-gray-200 rounded-full m-1">
                    <img src="https://www.pinclipart.com/picdir/big/190-1900207_twitter-logo-twitter-clipart.png" alt="" className="w-9 h-7 m-2 " />
                
                        <img src="" alt="" />

                    </div>
            </div>
            <div className="phone">
                <h1 class="text-blue-800">+38 (067) 829 30 30</h1>
            </div>


      </div>
    </header>
  </div>
  )
}

export default Header
