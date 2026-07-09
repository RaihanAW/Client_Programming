import React, { useContext } from 'react'
import Logo from '../Elements/Logo'
import { ThemeContext } from '../../context/themeContext'
import DarkModeToggle from '../Elements/DarkModeToggle'

function AuthLayout(props) {
    const { children } = props
    const { theme } = useContext(ThemeContext);

  return (
    <>
    <main className={`min-h-screen flex justify-center items-center bg-special-mainBg dark:bg-gray-900 dark:text-gray-100 ${theme.name}`}>
      {/* container start */}
      <div className="w-full max-w-sm">
        <Logo/>
        {children}

        {/* toggle dark/light mode, diletakkan di bawah form login/register */}
        <div className="flex justify-center mt-4">
          <DarkModeToggle />
        </div>

        {/* logo end */}
        
        {/* form */}
      </div>
        {/* container end */}
    </main>
    </>
  )
}

export default AuthLayout