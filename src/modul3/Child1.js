import React, { Component } from "react";
class Child1 extends Component {
    state = {
        nama: "Chandra P"
    }
    
    ubahNama = () => {
        this.setState((state) => { 
            if (state.nama === "Chandra P") {
                return {nama : "Jeremia J"}
            } else {
                return { nama: "Chandra P"}                 
            }
        })
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     alert(`Component Updates! State nama sebelumnya: ${prevState.nama}`)
    // }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return window.confirm('Haruskah Component ini di-Update?');
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Component Diupdate! Nama Kontestan Sebelumnya: ${prevState.nama} `)
    }
    componentWillUnmount() {
        alert('Nama Kontestan Akan Ditutup')
    }
    render() {
        return (
            <div>
                <h4>Nama Kontestan</h4>
                <button onClick={this.ubahNama}>Ganti Kontestan</button>
                <br />
                <h4>{this.state.nama}</h4>
            </div>
        );
    }
}
export default Child1;