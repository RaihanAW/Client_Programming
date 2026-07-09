import React from 'react'

function Button(props) {
  const {children, type ="submit", variant = "primary"} = props;
  
  const baseClasses = "h-12 rounded-md text-sm w-full cursor-pointer hover:scale-105";
  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-05 text-gray-02 dark:bg-gray-700 dark:text-gray-200",
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary}`;

  return (
    <>
        <button className={finalClasses} type={type}>
            {children}
        </button>
    </>
  );
}

export default Button