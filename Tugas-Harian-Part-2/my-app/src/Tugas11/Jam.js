import React, { Component, Fragment } from 'react';

class Jam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waktu: '',
      timer: 100,
    };
  }

  tick() {
    const date = new Date();

    const waktu = date.toLocaleString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    const timer = this.state.timer - 1;

    this.setState({
      waktu,
      timer,
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const row = {
      display: 'flex',
      alignItems: 'center',
    };

    const col = {
      width: '50%',
    };

    return (
      <Fragment>
        {this.state.timer > 0 && (
          <div style={row}>
            <div style={col}>Sekarang Jam: {this.state.waktu}</div>
            <div style={col}>Hitung Mundur: {this.state.timer}</div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Jam;