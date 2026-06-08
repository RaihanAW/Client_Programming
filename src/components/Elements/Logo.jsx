import React from 'react'

function Logo(props) {
  const { variant = "primary" } = props;
  const VariantClasses = {
    primary: "text-primary text-4xl",
    secondary: "text-primary text-sm sm:text-2xl"
  }
  return (
    <>
        <div className={`flex justify-center font-poppins tracking-wide ${VariantClasses[variant] || VariantClasses.primary}`}>
            <span className="font-bold">FINE</span>
            bank
            <span className="font-bold">.IO</span>
        </div>
    </>
  )
}

export default Logo