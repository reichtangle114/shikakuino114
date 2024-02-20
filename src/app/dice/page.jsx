'use client'
import { useState } from "react"

export default function IchiDhyaku() {
    const [diceroll, setdiceroll] = useState("");
    var [rireki, setrireki] = useState([]);

    function roll(){
        let min = 1;
        let max = 6;

        let dorekana = Math.floor( Math.random() * (max + 1 - min) ) + min ;

        setdiceroll(dorekana)
        setrireki([...rireki, dorekana])
    }

    function print(result) {
        return (
            <p>{result}</p>
        )
    }

    return(
        <>
            <p>{diceroll}</p>
            <br></br>
            <button type="button" className='fuchi' onClick={roll}>ダイスを振る</button>
            <br></br>
            履歴
            <br></br>
            {rireki.map(print)}
            <style>{`.fuchi{
                padding: 0.5em 1em;
                margin: 2em 0;
                font-weight: bold;
                color: #6091d3;
                background: #FFF;
                border: solid 3px #6091d3;
                border-radius: 10px;
            }
            `}</style>
        </>
    )
}