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
        setrireki([...rireki, diceroll])
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
            <button type="button" onClick={roll}>ダイスを振る</button>
            <br></br>
            {rireki.map(print)}
        </>
    )
}