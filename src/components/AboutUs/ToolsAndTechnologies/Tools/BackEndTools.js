import React from 'react';
import "./Tools.css"
import php_logo from "./Icons/Backend/PHP.svg"
import codeigniter_logo from "./Icons/Backend/codeigniter-svg.svg"
import laravel_logo from "./Icons/Backend/laravel.svg"
import nodejs_logo from "./Icons/Backend/nodejs-svg.svg"
import python_logo from "./Icons/Backend/python.svg"



function BackEndTools() {
  return (

        <div className='ToolsAndTechnologiesContainer'>
          <div className='ToolsCardContainer'>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={php_logo} alt="php_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={codeigniter_logo} alt="codeigniter_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={laravel_logo}alt="laravel_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={nodejs_logo}alt="nodejs_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={python_logo}alt="python_logo"/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default BackEndTools;