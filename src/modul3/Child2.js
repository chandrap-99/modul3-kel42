import React, { Component } from "react";
class Child2 extends Component {
    state = {
        angka: 0
    }
    
    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    kurangiAngka = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Component Diupdate! Nilai Sebelumnya: ${prevState.angka} `)
    }
    componentWillUnmount() {
        alert('Penilaian Kontestan Ditutup')
    }
    render() {
        return (
            <div>
                <h4>Penilaian Kontestan</h4>
                <button onClick={this.tambahAngka}>Tambah</button>
                <button onClick={this.kurangiAngka}>Kurang</button>
                <br/>
                <p>{this.state.angka}</p>
            </div>
        );
    }
}
export default Child2;