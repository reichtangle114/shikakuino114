'use client'
import { useState } from "react"

export default function sankaku() {
    const [hen, hennyuu] = useState("");
    const [menseki, menin] = useState("");
    const [syu, syuin] = useState("");

    function keisan(){
        let nagasa = parseInt(hen);
        let men = nagasa * ((nagasa/2) * Math.sqrt(3)) / 2;
        let sanpen = nagasa * 3;
        menin(men);
        syuin(sanpen);
    }

    function reset() {
        hennyuu("")
    }

    return(
        <>
            1辺の長さ:<input id="hen" className='kuromoji' type="text" value={hen} onChange={(event) => { hennyuu(event.target.value) }} />
            <br></br>
            <button type="button" onClick={keisan}>計算</button>
            <button type="button" onClick={reset}>クリア</button>
            <br></br>
            <br></br>
            面積:{menseki}
            <br></br>
            周の長さ:{syu}
            <style>{`.kuromoji{color: black;}
                .otameshi{margin: 30px 15px;}`}</style>
        </>
    )
}