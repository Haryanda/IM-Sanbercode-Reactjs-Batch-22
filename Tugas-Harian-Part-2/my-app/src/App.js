import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <center>
      <h1>Form Pembelian Buah</h1>
    </center>
    <form className="form-wrapper">
      <table>
        <tr>
          <td width="200">Nama Pelanggan</td>
          <td>
            <input type="text" name="nama" />
          </td>
        </tr>
        <tr>
          <td>Daftar Item</td>
          <td>
            <input type="checkbox" name="buah" value="0" /> Semangka<br/>
            <input type="checkbox" name="buah" value="1" /> Jeruk<br/>
            <input type="checkbox" name="buah" value="2" /> Nanas<br/>
            <input type="checkbox" name="buah" value="3" /> Salak<br/>
            <input type="checkbox" name="buah" value="4" /> Anggur<br/>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button type="submit" value="Submit">Kirim</button>
          </td>
        </tr>
      </table>
    </form>
    </div>
  );
}

export default App;
