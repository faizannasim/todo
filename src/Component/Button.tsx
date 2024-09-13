import React from 'react'
interface props{
 children: string;
 color:string
 onClick: ()=> void;
}

const button = ({children,onClick,color='primary' }:props) => {   // this color is taken from app tsx button oncick
  return (
    <button className={'btn btn-'+ color}onClick={onClick}>hello</button>       
  )
}

export default button