import React from 'react'
import dd from './Component/dd'
4
function json() {
  return (
    <div>
        {
            dd.map(element => {
                return(
                    <div key={element.id}>
                        <h2>{element.name}</h2>
                        <P>{element.age}</P>
                        <h1>{element.email}</h1>
                        <a href={email.no}>n</a>
                    </div>
                )
            })
        }
    </div>
  )
}

export default json