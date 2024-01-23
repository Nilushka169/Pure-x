import React from 'react';
import "./Tools.css"
import react_logo from "./Icons/FrontEnd/react-native.svg"
import angularjs_logo from "./Icons/FrontEnd/angularjs.svg"
import bootstrap_logo from "./Icons/FrontEnd/bootstrap.svg"
import css_logo from "./Icons/FrontEnd/css3.svg"
import html_logo from "./Icons/FrontEnd/html5.svg"
import npm_logo from "./Icons/FrontEnd/npm.svg"
import vuejs_logo from "./Icons/FrontEnd/vue-js.svg"



function FrontEndTools() {
  return (

        <div className='ToolsAndTechnologiesContainer'>
          <div className='ToolsCardContainer'>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={react_logo} alt="react_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={angularjs_logo} alt="angularjs_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={bootstrap_logo}alt="bootstrap_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={html_logo}alt="html_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={css_logo}alt="css_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={npm_logo}alt="npm_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={vuejs_logo}alt="vuejs_logo"/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default FrontEndTools;