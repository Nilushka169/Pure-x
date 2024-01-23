import React from 'react';
import "./Tools.css"
import android_logo from "./Icons/Mobile/android.svg"
import apple_logo from "./Icons/Mobile/apple-ios-svg.svg"
import fulter_logo from "./Icons/Mobile/fulter.svg"
import reactNative_logo from "./Icons/Mobile/react-native-1.svg"


function MobileTools() {
  return (

        <div className='ToolsAndTechnologiesContainer'>
          <div className='ToolsCardContainer'>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={android_logo} alt="android_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={apple_logo}alt="apple_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={fulter_logo}alt="fulter_logo"/>
              </div>
            </div>
            <div className='ToolsCard'>
              <div className='T_cards'>
                <img src={reactNative_logo}alt="reactNative_logo"/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default MobileTools;