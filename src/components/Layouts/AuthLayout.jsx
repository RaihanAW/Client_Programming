import React, { useContext } from 'react'
import Logo from '../Elements/Logo'
import { ThemeContext } from '../../context/themeContext'

function AuthLayout(props) {
    const { children } = props
    const { theme } = useContext(ThemeContext);

  return (
    <>
    <main className={`min-h-screen flex justify-center items-center bg-special-mainBg ${theme.name}`}>
      {/* container start */}
      <div className="w-full max-w-sm">
        <Logo/>
        {children}
        
        {/* logo end */}
        
        {/* form */}
      </div>
        {/* container end */}
    </main>
    </>
  )
}

export default AuthLayout