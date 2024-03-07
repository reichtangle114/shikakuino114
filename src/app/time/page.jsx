'use client'
import { useState } from "react"

//
export default function Time() {
    let [jikan, jikannyuu] = useState("時：分 終了時は00:00:00 を入力");
    let [rireki, setrireki] = useState([]);
    let [all, setall] = useState("計算中");
    let [hdall, sethdall] = useState(0);
    let [kai, setkai] = useState(0);
    let [average, setaverage] = useState("0:00:00");

    //間を時:分という形で入力していって00:00を入力されるまでの総時間を計算するサイト（途中の入力は出力されるようにしてください
    //-12:30のようにマイナスが付くと時間を減らす操作を追加してください。また、平均時間　秒
    function keisan(){
        let array = jikan.split(":").map(Number); 
        let hour = array[0];
        let minute = array[1];
        let second = array[2];
        let allSecond = 0;
        console.log(kai + "memo")

            if(hour == "00" && minute == "00" && second == "00"){
                let resulth = Math.floor(hdall / 3600);
                let resultm = Math.floor((hdall % 3600)/60);
                let results = Math.floor((hdall % 3600)%60);
                setall(resulth + ":" + resultm.toString().padStart( 2, '0') + ":" + results.toString().padStart( 2, '0'))
                jikannyuu("")

            } else {
                if(!isNaN(hour) && !isNaN(minute) && !isNaN(second)){
                    let ireru = jikan;
                    setrireki([...rireki, ireru])

                    let hikizan = [...String(hour)];

                    if(String(hikizan[0]) == "-"){
                        allSecond = parseInt(hdall) - (-(parseInt(hour)) * 3600 + parseInt(minute) * 60 + parseInt(second));
                    }
                    else{
                        allSecond = parseInt(hdall) + (parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second));
                    }
                    kai++;
                }
                sethdall(allSecond)
                console.log(kai)
                let heikin = Math.floor(allSecond / kai);
                console.log(allSecond)
                console.log(heikin)
                let heikinh = Math.floor(heikin / 3600);
                let heikinm = Math.floor((heikin % 3600)/60);
                let heikins = Math.floor((heikin % 3600)%60);
                setaverage(heikinh + ":" + heikinm.toString().padStart( 2, '0') + ":" + heikins.toString().padStart( 2, '0'))   
                jikannyuu("")
                setkai(kai)
            }
        
     }

    

    function print(result) {
        return (
            <p>{result}</p>
        )
    }

    function reset() {
        rireki.length =0;
        jikannyuu("時：分 終了時は00:00:00 を入力")
        sethdall(0)
        setall("計算中")
        setkai(0)
        setaverage("0:00:00")
    }
    

    function toHalfWidth(strVal){
        // 半角変換
        var halfVal = strVal.replace(/[！-～]/g,
          function( tmpStr ) {
            // 文字コードをシフト
            return String.fromCharCode( tmpStr.charCodeAt(0) - 0xFEE0 );
          }
        );
       
        jikannyuu(halfVal)
      }

    return(
        <>
            記入方法は時:分:秒(00:00:00)、-を付けると入力した分合計から減らします。
            <br></br>
            稼働時間:<input id="jikan" className='kuromoji' type="text" value={jikan} onBlur={(event) =>  {toHalfWidth(event.target.value) }} onChange={(event) => {jikannyuu(event.target.value) }} />
            <br></br>
            <button type="button" className='fuchi' onClick={keisan}>記録</button>
            <button type="button" className='fuchi' onClick={reset}>クリア</button>
            <br></br>
            総時間:{all}
            <br></br>
            平均時間:{average}
            <br></br>
            過去ログ:{rireki.map(print)}
            <style>{`.kuromoji{color: gray;}
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