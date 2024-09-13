import React from 'react'
 
function Hello({name}) { /* this is used for exporting data from one to one other*/
  return (
    <div className='w-full h-60 bg-black-zinc'>
      <h1>{name}</h1>
    </div>
  )
}

export default Hello
