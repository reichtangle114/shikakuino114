'use client'
import { useState } from "react"

export default function Test() {
    const [test, settest] = useState("");
    return (
        <>
        <br></br>
        <input id="test" className='kuromoji' type="text" value={test} onChange={(event) => {settest(event.target.value)}}/>
        <br></br>
        <br></br>
        <textarea id="onajiDame" className='kuromoji' onChange={(event) => {settest(event.target.value)}}></textarea>
        <style>{`.kuromoji{color: black;}
                .otameshi{margin: 30px 15px;}`}</style>
        <p className='otameshi'>{test}</p>
        </>
    )
    
}