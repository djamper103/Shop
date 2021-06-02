import React,{useEffect, useState} from "react"
import {useParams} from "react-router-dom"

export default function Product(state){

    const {id}=useParams()
    const a=state.state[id]
  console.log(a)


  return(
        <div>
            {a.id}
            </div>
    )
}