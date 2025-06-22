import React from 'react'

function TitleComponent({colorClass,title}:{colorClass:string,title:string}) {
  return (
        <h2 className={`${colorClass} text-3xl  md:text-5xl`}>
            {title}
        </h2>
  )
}

export default TitleComponent