
import { Link } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';

function Loteria() {
  const [numero, setNumero] = useState('');
  // const [activo, setActivo] = useState(false);

  const [numerosMarcados, setNumerosMarcados] = useState([]);

  const toggleNumeroMarcado = (numero) => {
    setNumero(numero)
    if (numerosMarcados.includes(numero)) {
      setNumerosMarcados(numerosMarcados.filter((n) => n !== numero));
    } else {
      setNumerosMarcados([...numerosMarcados, numero]);
    }
  };

  useEffect(()=>{
    window.localStorage.setItem("lotaData", JSON.stringify(numerosMarcados))
  },[numerosMarcados])


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
                <td><button className={`boton-bingo ${numerosMarcados.includes('1') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('1')}>1</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('11') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('11')}>11</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('21') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('21')}>21</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('31') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('31')}>31</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('41') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('41')}>41</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('51') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('51')}>51</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('61') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('61')}>61</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('71') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('71')}>71</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('81') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('81')}>81</button></td>
              </tr>
              <tr>
                <td><button className={`boton-bingo ${numerosMarcados.includes('2') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('2')}>2</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('12') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('12')}>12</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('22') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('22')}>22</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('32') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('32')}>32</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('42') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('42')}>42</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('52') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('52')}>52</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('62') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('62')}>62</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('72') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('72')}>72</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('82') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('82')}>82</button></td>
              </tr>
              <tr>
                <td><button className={`boton-bingo ${numerosMarcados.includes('3') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('3')}>3</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('13') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('13')}>13</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('23') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('23')}>23</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('33') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('33')}>33</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('43') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('43')}>43</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('53') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('53')}>53</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('63') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('63')}>63</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('73') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('73')}>73</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('83') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('83')}>83</button></td>
              </tr>
              <tr>
                <td><button className={`boton-bingo ${numerosMarcados.includes('4') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('4')}>4</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('14') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('14')}>14</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('24') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('24')}>24</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('34') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('34')}>34</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('44') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('44')}>44</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('54') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('54')}>54</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('64') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('64')}>64</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('74') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('74')}>74</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('84') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('84')}>84</button></td>
              </tr>
              <tr>
                <td><button className={`boton-bingo ${numerosMarcados.includes('5') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('5')}>5</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('15') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('15')}>15</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('25') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('25')}>25</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('35') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('35')}>35</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('45') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('45')}>45</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('55') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('55')}>55</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('65') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('65')}>65</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('75') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('75')}>75</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('85') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('85')}>85</button></td>
              </tr>
              <tr>
                <td><button className={`boton-bingo ${numerosMarcados.includes('6') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('6')}>6</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('16') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('16')}>16</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('26') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('26')}>26</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('36') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('36')}>36</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('46') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('46')}>46</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('56') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('56')}>56</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('66') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('66')}>66</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('76') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('76')}>76</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('86') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('86')}>86</button></td>
              </tr>
              <tr>
                <td><button className={`boton-bingo ${numerosMarcados.includes('7') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('7')}>7</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('17') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('17')}>17</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('27') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('27')}>27</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('37') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('37')}>37</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('47') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('47')}>47</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('57') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('57')}>57</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('67') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('67')}>67</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('77') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('77')}>77</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('87') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('87')}>87</button></td>
              </tr>
              <tr>
                <td><button className={`boton-bingo ${numerosMarcados.includes('8') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('8')}>8</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('18') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('18')}>18</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('28') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('28')}>28</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('38') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('38')}>38</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('48') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('48')}>48</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('58') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('58')}>58</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('68') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('68')}>68</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('78') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('78')}>78</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('88') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('88')}>88</button></td>
              </tr>
              <tr>
                <td><button className={`boton-bingo ${numerosMarcados.includes('9') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('9')}>9</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('19') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('19')}>19</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('29') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('29')}>29</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('39') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('39')}>39</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('49') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('49')}>49</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('59') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('59')}>59</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('69') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('69')}>69</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('79') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('79')}>79</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('89') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('89')}>89</button></td>
              </tr>
              <tr>
                <td><button className={`boton-bingo ${numerosMarcados.includes('10') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('10')}>10</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('20') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('20')}>20</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('30') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('30')}>30</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('40') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('40')}>40</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('50') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('50')}>50</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('60') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('60')}>60</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('70') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('70')}>70</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('80') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('80')}>80</button></td>
                <td><button className={`boton-bingo ${numerosMarcados.includes('90') ? 'marcado' : ''}`} onClick={() => toggleNumeroMarcado('90')}>90</button></td>
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
          <Link to="/bingo">Bingo</Link>
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default Loteria;
