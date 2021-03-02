import React, { Component } from "react";
import "./DaftarBuah.css";

class DaftarBuah extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      daftarBuah: [
        { nama: "semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      inputName: "",
      inputHarga: "",
      inputBerat: "0",
      indexOfFrom: -1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(event) {
    let index = event.target.value;
    let newDaftarBuah = this.state.daftarBuah;
    let editedDataBuah = newDaftarBuah[this.state.indexOfFrom]
    newDaftarBuah.splice(index, 1)

    if (editedDataBuah !== undefined){
      var newIndex = newDaftarBuah.findIndex((el) => el === editedDataBuah)
      this.setState({daftarBuah: newDaftarBuah, indexOfFrom: newIndex})
    }else{
      this.setState({daftarBuah: newDaftarBuah})
    }
  }

  handleEdit(event){
    let index = event.target.value
    let dataBuah = this.state.daftarBuah[index]
    this.setState({
      inputName: dataBuah.nama,
      inputHarga: dataBuah.harga,
      inputName: dataBuah.berat,
      indexOfFrom: index
    })
  }
  handleChange(event){
    console.log(event.target)
    let typeOfInput = event.target.name
    switch (typeOfInput){
      case "name":
        {
          this.setState({inputName: event.target.value});
          break
        }
        case "harga":
          {
            this.setState({inputHarga: event.target.value});
            break
          }
          case "berat":
            {
              this.setState({inputBerat: event.target.value});
              break
            }
            default:
              {break;}
    }
  }

  handleSubmit(event){
    event.preventDefault()

    let nama = this.state.inputName
    let harga = this.state.inputHarga.toString()
    let berat = this.state.inputBerat

    console.log(this.state)

    if (nama.replace(/\s/g,'') !== "" && harga.replace(/\s/g,'') !== ""){
      let newDaftarBuah = this.state.daftarBuah
      let index = this.state.indexOfFrom

      if (index === -1){
        newDaftarBuah = [...newDaftarBuah, (nama, harga, berat)]
      }else{
        newDaftarBuah[index] = {nama, harga, berat}
      }

      this.this.setState({
        daftarBuah: newDaftarBuah,
        inputName: "",
        inputHarga: "",
        inputBerat: 0
      })

    }

  }

  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Daftar Harga Buah</h1>

        <div style={{ width: '50%', margin: '0 auto 40px', display: 'block' }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: '10%' }}>No</th>
                <th style={{ width: '25%' }}>Nama</th>
                <th style={{ width: '20%' }}>Harga</th>
                <th style={{ width: '20%' }}>Berat</th>
                <th style={{ width: '25%' }}>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {this.state.daftarBuah.map((item, index) => (
                <tr key={index}>
                  <td style={{ width: '10%', textAlign: 'center' }}>
                    {index + 1}
                  </td>
                  <td>{item.nama}</td>
                  <td>{item.harga}</td>
                  <td>{item.berat / 100}kg</td>
                  <td>
                    <button onClick={this.handleEdit} value={index}>
                      Edit
                    </button>
                    <button onClick={this.handleDelete} value={index}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr />

        <h1 style={{ textAlign: 'center' }}>Form Daftar Harga Buah</h1>

        <div style={{ width: '50%', margin: '0 auto', display: 'block' }}>
          <form
            style={{
              border: '1px solid #aaa',
              padding: '20px',
              tableLayout: 'fixed',
              overflowWrap: 'break-word',
            }}
            onSubmit={this.handleSubmit}
          >
            <div style={{ marginBottom: '5px' }}>
              <label
                style={{
                  width: '30%',
                  marginRight: '10px',
                  display: 'inline-block',
                }}
              >
                Nama:
              </label>
              <input type="text" name="name" value={this.state.inputName} />
            </div>

            <div style={{ marginBottom: '5px' }}>
              <label
                style={{
                  width: '30%',
                  marginRight: '10px',
                  display: 'inline-block',
                }}
              >
                Harga:
              </label>
              <input type="text" name="harga" value={this.state.inputHarga} />
            </div>

            <div style={{ marginBottom: '5px' }}>
              <label
                style={{
                  width: '30%',
                  marginRight: '10px',
                  display: 'inline-block',
                }}
              >
                Berat (dalam gram):
              </label>
              <input type="number" name="berat" value={this.state.inputBerat} />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default DaftarBuah;