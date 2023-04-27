
import './App.css';
import { useState, useEffect } from 'react'

function Bingo() {
  const [numero, setNumero] = useState('');
  const [activo, setActivo] = useState(false);
  const [bingos, setBingos] = useState(() => {
    const saveBingos = window.localStorage.getItem("bingosData");
    if (saveBingos) {
      return JSON.parse(saveBingos)
    } else {
      return []
    }
  })

  useEffect(() => {
    window.localStorage.setItem("bingosData", JSON.stringify(bingos))
  }, [bingos])

  const handleChange = (e) => {
    e.preventDefault();
    setNumero(e.target.name);
    if (e.target.name) {
      const bingo = bingos;
      bingo.push({
        numero: e.target.name
      })
      setBingos(bingo)
    }
  }


  const reiniciarBingo = () => {
    setNumero("")
    setBingos([])
  }



  const guardarBingos = (e) => {
    setBingos([...bingos, "BingoFinalizado"])
    console.log(bingos)
  }


  return (
    <div className="App">
      <div className="container">
        <div className='container-table'>
          <div id="content">
            <table id="bingotable">
              <tr>
                <th class="title">B</th>
                <th class="title">I</th>
                <th class="title">N</th>
                <th class="title">G</th>
                <th class="title">O</th>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B1' onClick={handleChange}>1</button ></td>
                <td><button className='boton-bingo' name='I16' onClick={handleChange}>16</button ></td>
                <td><button className='boton-bingo' name='N31' onClick={handleChange}>31</button ></td>
                <td><button className='boton-bingo' name='G46' onClick={handleChange}>46</button ></td>
                <td><button className='boton-bingo' name='O61' onClick={handleChange}>61</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B2' onClick={handleChange}>2</button ></td>
                <td><button className='boton-bingo' name='I17' onClick={handleChange}>17</button ></td>
                <td><button className='boton-bingo' name='N32' onClick={handleChange}>32</button ></td>
                <td><button className='boton-bingo' name='G47' onClick={handleChange}>47</button ></td>
                <td><button className='boton-bingo' name='O62' onClick={handleChange}>62</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B3' onClick={handleChange}>3</button ></td>
                <td><button className='boton-bingo' name='I18' onClick={handleChange}>18</button ></td>
                <td><button className='boton-bingo' name='N33' onClick={handleChange}>33</button ></td>
                <td><button className='boton-bingo' name='G48' onClick={handleChange}>48</button ></td>
                <td><button className='boton-bingo' name='O63' onClick={handleChange}>63</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B4' onClick={handleChange}>4</button ></td>
                <td><button className='boton-bingo' name='I19' onClick={handleChange}>19</button ></td>
                <td><button className='boton-bingo' name='N34' onClick={handleChange}>34</button ></td>
                <td><button className='boton-bingo' name='G49' onClick={handleChange}>49</button ></td>
                <td><button className='boton-bingo' name='O64' onClick={handleChange}>64</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B5' onClick={handleChange}>5</button ></td>
                <td><button className='boton-bingo' name='I20' onClick={handleChange}>20</button ></td>
                <td><button className='boton-bingo' name='N35' onClick={handleChange}>35</button ></td>
                <td><button className='boton-bingo' name='G50' onClick={handleChange}>50</button ></td>
                <td><button className='boton-bingo' name='O65' onClick={handleChange}>65</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B6' onClick={handleChange}>6</button ></td>
                <td><button className='boton-bingo' name='I21' onClick={handleChange}>21</button ></td>
                <td><button className='boton-bingo' name='N36' onClick={handleChange}>36</button ></td>
                <td><button className='boton-bingo' name='G51' onClick={handleChange}>51</button ></td>
                <td><button className='boton-bingo' name='O66' onClick={handleChange}>66</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B7' onClick={handleChange}>7</button ></td>
                <td><button className='boton-bingo' name='I22' onClick={handleChange}>22</button ></td>
                <td><button className='boton-bingo' name='N37' onClick={handleChange}>37</button ></td>
                <td><button className='boton-bingo' name='G52' onClick={handleChange}>52</button ></td>
                <td><button className='boton-bingo' name='O67' onClick={handleChange}>67</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B8' onClick={handleChange}>8</button ></td>
                <td><button className='boton-bingo' name='I23' onClick={handleChange}>23</button ></td>
                <td><button className='boton-bingo' name='N38' onClick={handleChange}>38</button ></td>
                <td><button className='boton-bingo' name='G53' onClick={handleChange}>53</button ></td>
                <td><button className='boton-bingo' name='O68' onClick={handleChange}>68</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B9' onClick={handleChange}>9</button ></td>
                <td><button className='boton-bingo' name='I24' onClick={handleChange}>24</button ></td>
                <td><button className='boton-bingo' name='N39' onClick={handleChange}>39</button ></td>
                <td><button className='boton-bingo' name='G54' onClick={handleChange}>54</button ></td>
                <td><button className='boton-bingo' name='O69' onClick={handleChange}>69</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B10' onClick={handleChange}>10</button ></td>
                <td><button className='boton-bingo' name='I25' onClick={handleChange}>25</button ></td>
                <td><button className='boton-bingo' name='N40' onClick={handleChange}>40</button ></td>
                <td><button className='boton-bingo' name='G55' onClick={handleChange}>55</button ></td>
                <td><button className='boton-bingo' name='O70' onClick={handleChange}>70</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B11' onClick={handleChange}>11</button ></td>
                <td><button className='boton-bingo' name='I26' onClick={handleChange}>26</button ></td>
                <td><button className='boton-bingo' name='N41' onClick={handleChange}>41</button ></td>
                <td><button className='boton-bingo' name='G56' onClick={handleChange}>56</button ></td>
                <td><button className='boton-bingo' name='O71' onClick={handleChange}>71</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B12' onClick={handleChange}>12</button ></td>
                <td><button className='boton-bingo' name='I27' onClick={handleChange}>27</button ></td>
                <td><button className='boton-bingo' name='N42' onClick={handleChange}>42</button ></td>
                <td><button className='boton-bingo' name='G57' onClick={handleChange}>57</button ></td>
                <td><button className='boton-bingo' name='O72' onClick={handleChange}>72</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B13' onClick={handleChange}>13</button ></td>
                <td><button className='boton-bingo' name='I28' onClick={handleChange}>28</button ></td>
                <td><button className='boton-bingo' name='N43' onClick={handleChange}>43</button ></td>
                <td><button className='boton-bingo' name='G58' onClick={handleChange}>58</button ></td>
                <td><button className='boton-bingo' name='O73' onClick={handleChange}>73</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B14' onClick={handleChange}>14</button ></td>
                <td><button className='boton-bingo' name='I29' onClick={handleChange}>29</button ></td>
                <td><button className='boton-bingo' name='N44' onClick={handleChange}>44</button ></td>
                <td><button className='boton-bingo' name='G59' onClick={handleChange}>59</button ></td>
                <td><button className='boton-bingo' name='O74' onClick={handleChange}>74</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='B15' onClick={handleChange}>15</button ></td>
                <td><button className='boton-bingo' name='I30' onClick={handleChange}>30</button ></td>
                <td><button className='boton-bingo' name='N45' onClick={handleChange}>45</button ></td>
                <td><button className='boton-bingo' name='G60' onClick={handleChange}>60</button ></td>
                <td><button className='boton-bingo' name='O75' onClick={handleChange}>75</button ></td>
              </tr>
            </table>
          </div>
          <div className="container-numero">
            <h1>Ultimo numero cantado</h1>
            <div className="numero"><p>{numero}</p></div>
          </div>
        </div>
        <div className='container-button'>
          <button className='bingo-final' onClick={() => guardarBingos()}><p>BINGO!</p></button>
          <button className='bingo-reinicio' onClick={() => reiniciarBingo()}><p>REINICIAR</p></button>
        </div>

        {/* <h1>Bingos jugados</h1>
        <div className="bingo-numeros">
          <div className="numero-bingos">{bingos.map((bin) => { return (<p>{bin.numero}</p>) })}</div>
        </div> */}
      </div>
    </div>
  );
}

export default Bingo;
