import { useEffect, useState } from "react";
import React, {useState, useEffect} from "react"
import axios from "axios"
import "./DaftarBuah.css"

const DaftarBuah = () => {

  const [daftarBuah, setDaftarBuah] = useState(null)
  const [input, setInput] = useState({name: "", price: "", weight: 0, id: null})

  useEffect( () => {
    if (daftarBuah === null){
      axios.get('http://backendexample.sanbercloud.com/api/fruits')
      .then(res => {
        console.log(res)
      setDaftarBuah(res.data.map(el=>{return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
    })   
  }
}, [daftarBuah])

const hendleDelete = (event) => {
  let idDataBuah = persenInt(event.target.value)

  let newDataBuah = daftarBuah.filter(el => el.id !== idDataBuah)

  axios.delete('http://backendexample.sanbercloud.com/api/fruits/${idBuah}')
  .then(res => {
    console.log(res)
  })

  setDaftarBuah([...newDataBuah])
}

const hendleEdit = (event) => {
  let idDataBuah = persenInt(event.target.value)
  let databuah = daftarBuah.find(x=> x.id === idDataBuah)
  setInput({name: databuah, price: databuah, weight: databuah.weight, id: databuah})
}

const handleChange = (event) => {
  let typeOfInput = event.target.name

  switch (typeOfInput){
    case "name":
      {
        setInput({...input, name: event.target.value});
        break
    }
    case "price":
      {
        setInput({...input, price: event.target.value});
        break
      }
    case "weight":
      {
        setInput({...input, weight: event.target.value});
        break
      }
    default:
      {break;}
  }
}

const handleSubmit = (event) =>{
  event.prevenDefault()

  let name = input.name
  let price = input.price.toString()

  if (input.id === null){
    axios.post('http://backendexample.sanbercloud.com/api/fruits', {name, price, weight: input.weight})
    .then(res => {
      setDaftarBuah([
        ...daftarBuah,
        { id: res.data.id,
          name,
          price,
          weight: input.weight
        }])
    })
  } else{
    axios.put(' http://backendexample.sanbercloud.com/api/fruits/${input.id}', {name, price, weight: input.weight})
    .then(() => {
      let dataBuah = daftarBuah.find(el=> el.id === input.id)
      dataBuah.name = name
      dataBuah.price = price
      dataBuah.weight = input.weight
      setDaftarBuah([...daftarBuah])
    }) 
  }
  setInput({name: "", price: "", weight: 0, id: null})
}

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

export default DaftarBuah;
