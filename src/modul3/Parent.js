import { Component } from "react";
import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
class Parent extends Component {
    state = {
        komponen1: false,
        komponen2: false
    }
    componentDidMount() {
        alert(`Mount Triggered! \n \r Aplikasi Dibuka `)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Component Diupdate! Status child1: ${prevState.komponen1} -&- Status child2: ${prevState.komponen2}`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Apakah Anda yakin Diproses ?');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Child1 /> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'SEMBUNYIKAN' : 'TAMPILKAN'} NAMA KONTESTAN</button>
                <br/><br/>
                {this.state.komponen2 ? <Child2 /> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'SEMBUNYIKAN' : 'TAMPILKAN'} MEMBERI NILAI</button>
            </div>
        );
    }
}
export default Parent;