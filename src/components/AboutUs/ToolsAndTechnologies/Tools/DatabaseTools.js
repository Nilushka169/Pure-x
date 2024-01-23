import React from 'react';
import "./Tools.css"
import sql_logo from "./Icons/Database/SQL-server.svg"
import mongodb_logo from "./Icons/Database/mongodb.svg"
import mysql_logo from "./Icons/Database/my-SQL.svg"
import postgre_logo from "./Icons/Database/postgre.svg"

function DatabaseTools() {
  return (

        <div className='ToolsAndTechnologiesContainer'>
          <div className='ToolsCardContainer'>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={sql_logo} alt="sql_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={mongodb_logo} alt="mongodb_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={mysql_logo}alt="mysql_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={postgre_logo}alt="postgre_logo"/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default DatabaseTools;