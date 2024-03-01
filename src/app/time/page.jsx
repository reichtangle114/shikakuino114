'use client'
import { useState } from "react"

//
export default function Time() {
    let [jikan, jikannyuu] = useState("時：分 終了時は00:00 を入力");
    let [rireki, setrireki] = useState([]);
    let [all, setall] = useState("計算中");
    let [hdall, sethdall] = useState(0);

    //間を時:分という形で入力していって00:00を入力されるまでの総時間を計算するサイト（途中の入力は出力されるようにしてください
    function keisan(){
        let array = jikan.split(":").map(Number); 
        let hour = array[0];
        let minute = array[1];

            if(hour == "00" && minute == "00"){
                let resulth = hdall / 60;
                let resultm = hdall % 60;

                setall(resulth + ":" + resultm.toString().padStart( 2, '0'))
                jikannyuu("")

            } else {

                if(isNaN(hour) && isNaN(minute)){
                    let ireru = jikan;
                    setrireki([...rireki, ireru])
    
                    let allMinute = parseInt(hdall) + parseInt(hour) * 60 + parseInt(minute);
                    sethdall(allMinute)
    
                    jikannyuu("")
                }

            }
    }

    function print(result) {
        return (
            <p>{result}</p>
        )
    }

    function reset() {
        rireki.length =0;
        jikannyuu("時：分 終了時は00:00 を入力")
        sethdall("0")
        setall("計算中")
    }
    
    var toHalfWidth = function(value) {
        if (!value) return value;
    
        return String(value).replace(/[！-～]/g, function(all) {
            return String.fromCharCode(all.charCodeAt(0) - 0xFEE0);
        });
    };
    
    return(
        <>
            稼働時間:<input id="jikan" className='kuromoji' type="text" value={jikan} onChange={(event) => {jikannyuu(event.target.value) }} />
            <br></br>
            <button type="button" className='fuchi' onClick={keisan}>記録</button>
            <button type="button" className='fuchi' onClick={reset}>クリア</button>
            <br></br>
            総時間:{all}
            <br></br>
            過去ログ:{rireki.map(print)}
            <style>{`.kuromoji{color: gray;}
                .otameshi{margin: 30px 15px;}
                .fuchi{
                    padding: 0.5em 1em;
                    margin: 2em 0;
                    font-weight: bold;
                    color: #6091d3;
                    background: #FFF;
                    border: solid 3px #6091d3;
                    border-radius: 10px;
                }`}</style>
        </>
    )
}