import React from 'react'
import Logo from '../Elements/Logo'

function AuthLayout(props) {
    const { children } = props
  return (
    <>
    <main className="min-h-screen flex justify-center items-center bg-special-mainBg">
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