
import './App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Bingo() {
  const [numero, setNumero] = useState('');
  const [numerosMarcados, setNumerosMarcados] = useState([]);
  // const [bingos, setBingos] = useState(() => {
  //   const saveBingos = window.localStorage.getItem("bingosData");
  //   if (saveBingos) {
  //     return JSON.parse(saveBingos)
  //   } else {
  //     return []
  //   }
  // })

  useEffect(()=>{
    window.localStorage.setItem("lotaData", JSON.stringify(numerosMarcados))
  },[numerosMarcados])

  const toggleNumeroMarcado = (numero) => {
    setNumero(numero)
    if (numerosMarcados.includes(numero)) {
      setNumerosMarcados(numerosMarcados.filter((n) => n !== numero));
    } else {
      setNumerosMarcados([...numerosMarcados, numero]);
    }
  };

  const reiniciarBingo = () => {
    setNumerosMarcados([]);
    setNumero('')
  };



  const guardarBingos = (e) => {
    setNumerosMarcados([...numerosMarcados])
    console.log(numerosMarcados);
  };

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
              <td><button className={`boton-bingo ${numerosMarcados.includes('B1') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B1')}>1</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I16') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I16')}>16</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N31') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N31')}>31</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G46') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G46')}>46</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O61') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O61')}>61</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B2') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B2')}>2</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I17') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I17')}>17</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N32') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N32')}>32</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G47') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G47')}>47</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O62') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O62')}>62</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B3') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B3')}>3</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I18') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I18')}>18</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N33') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N33')}>33</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G48') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G48')}>48</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O63') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O63')}>63</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B4') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B4')}>4</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I19') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I19')}>19</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N34') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N34')}>34</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G49') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G49')}>49</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O64') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O64')}>64</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B5') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B5')}>5</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I20') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I20')}>20</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N35') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N35')}>35</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G50') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G50')}>50</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O65') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O65')}>65</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B6') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B6')}>6</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I21') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I21')}>21</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N36') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N36')}>36</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G51') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G51')}>51</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O66') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O66')}>66</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B7') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B7')}>7</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I22') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I22')}>22</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N37') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N37')}>37</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G52') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G52')}>52</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O67') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O67')}>67</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B8') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B8')}>8</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I23') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I23')}>23</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N38') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N38')}>38</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G53') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G53')}>53</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O68') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O68')}>68</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B9') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B9')}>9</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I24') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I24')}>24</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N39') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N39')}>39</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G54') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G54')}>54</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O69') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O69')}>69</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B10') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B10')}>10</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I25') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I25')}>25</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N40') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N40')}>40</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G55') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G55')}>55</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O70') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O70')}>70</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B11') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B11')}>11</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I26') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I26')}>26</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N41') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N41')}>41</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G56') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G56')}>56</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O71') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O71')}>71</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B12') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B12')}>12</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I27') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I27')}>27</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N42') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N42')}>42</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G57') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G57')}>57</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O72') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O72')}>72</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B13') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B13')}>13</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I28') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I28')}>28</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N43') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N43')}>43</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G58') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G58')}>58</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O73') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O73')}>73</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B14') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B14')}>14</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I29') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I29')}>29</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N44') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N44')}>44</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G59') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G59')}>59</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O74') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O74')}>74</button></td>
              </tr>
              <tr>
              <td><button className={`boton-bingo ${numerosMarcados.includes('B15') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('B15')}>15</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('I30') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('I30')}>30</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('N45') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('N45')}>45</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('G60') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('G60')}>60</button></td>
              <td><button className={`boton-bingo ${numerosMarcados.includes('O75') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('O75')}>75</button></td>
              </tr>
            </table>
          </div>
          <div className="container-numero">
            <h1>Ultimo numero cantado</h1>
            <div className="numero"><p>{numero}</p></div>
          </div>
        </div>
        <div className='container-button'>
          {/* <button className='bingo-final' onClick={() => guardarBingos()}><p>BINGO!</p></button> */}
          <button className='bingo-reinicio' onClick={() => reiniciarBingo()}><p>REINICIAR</p></button>
        </div>
        <div className='container-button-final'>
        <button className='bingo-final'>
        <a href='/'>Ir a Lota</a>
        </button>
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
