import React, { Component } from 'react';
import propTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'FSD OCBC Batch ke-2!',
      counter: 0,
      names: [],
    };
  }

  changeName = (name) => {
    // this.setState({name: 'FSD OCBC Materi React'})
    this.setState({ name: this.state.name + name });
  };

  changeCount = (type) => {
    let oldConter = this.state.counter;

    switch (type) {
      case 'increment':
        this.setState({ counter: oldConter >= 10 ? 0 : oldConter + 1 });
        break;
      case 'decrement':
        this.setState({ counter: oldConter - 1 });
        break;
      default:
        break;
    }
  };

  addNames = (nama) => {
    this.setState({ names: [...this.state.names, nama] });
  };

  render() {
    return (
      <>
        <h1>Batch {this.props.batch}</h1>
        <img src={this.props.logo} alt='logo' />
        <h3>Halo Kelas {this.state.name}</h3>
        <button onClick={() => this.changeName('new name')}>
          Ganti nama, gan!
        </button>
        <h5>{this.state.counter}</h5>
        <button onClick={() => this.changeCount('increment')}>+</button>
        <button onClick={() => this.changeCount('decrement')}>-</button>
        <button onClick={() => this.addNames('nama')}>Tambah Nama</button>
        <ul>
          {this.state.names.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
      </>
    );
  }
}

Header.propTypes = {
  batch: propTypes.number,
  logo: propTypes.string,
};

export default Header;
