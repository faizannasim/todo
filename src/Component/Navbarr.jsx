import React from 'react'

function Navbarr() {

    const contact = {
        logo:"xyz",
        item:[
            {
                name:"brand name",
                link:"#"

            },
            {
                name:"Products",
                link:"#"

            },
            {
                name:"brand name",
                link:"#"

            },
        ],
        contact:{
            name:"contact button",
            link:"mailto:faizannasim59@gmail.com", 
        

        }
    }


  return (
    <div>
        <div>
            <h1 className='name'>{contact.item.name}</h1>
        </div>
        <div>
            {
                contact.item.map((item,idex)=>(

                    <div key={index}>
                        <img src={contact.logo}></img>
                        <p>{item.name}</p>

                    </div>
                ))
            }
        </div>
        <a href={contact.contact.link}>{contact.contact.name}</a>
    </div>
  )
}

export default Navbarr