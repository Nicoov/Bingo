
import { Link } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react'

function Loteria() {

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
                <td><button className='boton-bingo' name='1' onClick={handleChange}>1</button ></td>
                <td><button className='boton-bingo' name='11' onClick={handleChange}>11</button ></td>
                <td><button className='boton-bingo' name='21' onClick={handleChange}>21</button ></td>
                <td><button className='boton-bingo' name='31' onClick={handleChange}>31</button ></td>
                <td><button className='boton-bingo' name='41' onClick={handleChange}>41</button ></td>
                <td><button className='boton-bingo' name='51' onClick={handleChange}>51</button ></td>
                <td><button className='boton-bingo' name='61' onClick={handleChange}>61</button ></td>
                <td><button className='boton-bingo' name='71' onClick={handleChange}>71</button ></td>
                <td><button className='boton-bingo' name='81' onClick={handleChange}>81</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='2' onClick={handleChange}>2</button ></td>
                <td><button className='boton-bingo' name='12' onClick={handleChange}>12</button ></td>
                <td><button className='boton-bingo' name='22' onClick={handleChange}>22</button ></td>
                <td><button className='boton-bingo' name='32' onClick={handleChange}>32</button ></td>
                <td><button className='boton-bingo' name='42' onClick={handleChange}>42</button ></td>
                <td><button className='boton-bingo' name='52' onClick={handleChange}>52</button ></td>
                <td><button className='boton-bingo' name='62' onClick={handleChange}>62</button ></td>
                <td><button className='boton-bingo' name='72' onClick={handleChange}>72</button ></td>
                <td><button className='boton-bingo' name='82' onClick={handleChange}>82</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='3' onClick={handleChange}>3</button ></td>
                <td><button className='boton-bingo' name='13' onClick={handleChange}>13</button ></td>
                <td><button className='boton-bingo' name='23' onClick={handleChange}>23</button ></td>
                <td><button className='boton-bingo' name='33' onClick={handleChange}>33</button ></td>
                <td><button className='boton-bingo' name='43' onClick={handleChange}>43</button ></td>
                <td><button className='boton-bingo' name='53' onClick={handleChange}>53</button ></td>
                <td><button className='boton-bingo' name='63' onClick={handleChange}>63</button ></td>
                <td><button className='boton-bingo' name='73' onClick={handleChange}>73</button ></td>
                <td><button className='boton-bingo' name='83' onClick={handleChange}>83</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='4' onClick={handleChange}>4</button ></td>
                <td><button className='boton-bingo' name='14' onClick={handleChange}>14</button ></td>
                <td><button className='boton-bingo' name='24' onClick={handleChange}>24</button ></td>
                <td><button className='boton-bingo' name='34' onClick={handleChange}>34</button ></td>
                <td><button className='boton-bingo' name='44' onClick={handleChange}>44</button ></td>
                <td><button className='boton-bingo' name='54' onClick={handleChange}>54</button ></td>
                <td><button className='boton-bingo' name='64' onClick={handleChange}>64</button ></td>
                <td><button className='boton-bingo' name='74' onClick={handleChange}>74</button ></td>
                <td><button className='boton-bingo' name='84' onClick={handleChange}>84</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='5' onClick={handleChange}>5</button ></td>
                <td><button className='boton-bingo' name='15' onClick={handleChange}>15</button ></td>
                <td><button className='boton-bingo' name='25' onClick={handleChange}>25</button ></td>
                <td><button className='boton-bingo' name='35' onClick={handleChange}>35</button ></td>
                <td><button className='boton-bingo' name='45' onClick={handleChange}>45</button ></td>
                <td><button className='boton-bingo' name='55' onClick={handleChange}>55</button ></td>
                <td><button className='boton-bingo' name='65' onClick={handleChange}>65</button ></td>
                <td><button className='boton-bingo' name='75' onClick={handleChange}>75</button ></td>
                <td><button className='boton-bingo' name='85' onClick={handleChange}>85</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='6' onClick={handleChange}>6</button ></td>
                <td><button className='boton-bingo' name='16' onClick={handleChange}>16</button ></td>
                <td><button className='boton-bingo' name='26' onClick={handleChange}>26</button ></td>
                <td><button className='boton-bingo' name='36' onClick={handleChange}>36</button ></td>
                <td><button className='boton-bingo' name='46' onClick={handleChange}>46</button ></td>
                <td><button className='boton-bingo' name='56' onClick={handleChange}>56</button ></td>
                <td><button className='boton-bingo' name='66' onClick={handleChange}>66</button ></td>
                <td><button className='boton-bingo' name='76' onClick={handleChange}>76</button ></td>
                <td><button className='boton-bingo' name='86' onClick={handleChange}>86</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='7' onClick={handleChange}>7</button ></td>
                <td><button className='boton-bingo' name='17' onClick={handleChange}>17</button ></td>
                <td><button className='boton-bingo' name='27' onClick={handleChange}>27</button ></td>
                <td><button className='boton-bingo' name='37' onClick={handleChange}>37</button ></td>
                <td><button className='boton-bingo' name='47' onClick={handleChange}>47</button ></td>
                <td><button className='boton-bingo' name='57' onClick={handleChange}>57</button ></td>
                <td><button className='boton-bingo' name='67' onClick={handleChange}>67</button ></td>
                <td><button className='boton-bingo' name='77' onClick={handleChange}>77</button ></td>
                <td><button className='boton-bingo' name='87' onClick={handleChange}>87</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='8' onClick={handleChange}>8</button ></td>
                <td><button className='boton-bingo' name='18' onClick={handleChange}>18</button ></td>
                <td><button className='boton-bingo' name='28' onClick={handleChange}>28</button ></td>
                <td><button className='boton-bingo' name='38' onClick={handleChange}>38</button ></td>
                <td><button className='boton-bingo' name='48' onClick={handleChange}>48</button ></td>
                <td><button className='boton-bingo' name='58' onClick={handleChange}>58</button ></td>
                <td><button className='boton-bingo' name='68' onClick={handleChange}>68</button ></td>
                <td><button className='boton-bingo' name='78' onClick={handleChange}>78</button ></td>
                <td><button className='boton-bingo' name='88' onClick={handleChange}>88</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='9' onClick={handleChange}>9</button ></td>
                <td><button className='boton-bingo' name='19' onClick={handleChange}>19</button ></td>
                <td><button className='boton-bingo' name='29' onClick={handleChange}>29</button ></td>
                <td><button className='boton-bingo' name='39' onClick={handleChange}>39</button ></td>
                <td><button className='boton-bingo' name='49' onClick={handleChange}>49</button ></td>
                <td><button className='boton-bingo' name='59' onClick={handleChange}>59</button ></td>
                <td><button className='boton-bingo' name='69' onClick={handleChange}>69</button ></td>
                <td><button className='boton-bingo' name='79' onClick={handleChange}>79</button ></td>
                <td><button className='boton-bingo' name='89' onClick={handleChange}>89</button ></td>
              </tr>
              <tr>
                <td><button className='boton-bingo' name='10' onClick={handleChange}>10</button ></td>
                <td><button className='boton-bingo' name='20' onClick={handleChange}>20</button ></td>
                <td><button className='boton-bingo' name='30' onClick={handleChange}>30</button ></td>
                <td><button className='boton-bingo' name='40' onClick={handleChange}>40</button ></td>
                <td><button className='boton-bingo' name='50' onClick={handleChange}>50</button ></td>
                <td><button className='boton-bingo' name='60' onClick={handleChange}>60</button ></td>
                <td><button className='boton-bingo' name='70' onClick={handleChange}>70</button ></td>
                <td><button className='boton-bingo' name='80' onClick={handleChange}>80</button ></td>
                <td><button className='boton-bingo' name='90' onClick={handleChange}>90</button ></td>
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
        <button className='bingo-final'>
          <Link to="/bingo">Bingo</Link>
        </button>

        {/* <h1>Bingos jugados</h1>
        <div className="bingo-numeros">
          <div className="numero-bingos">{bingos.map((bin) => { return (<p>{bin.numero}</p>) })}</div>
        </div> */}
      </div>
    </div>
  );
}

export default Loteria;
