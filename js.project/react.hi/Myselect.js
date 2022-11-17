import React, { Component } from 'react';
// 컴포넌트 라이프사이클
//export 
class Myselect extends Component {
    constructor(props) {
        super(props);
        console.log("1. 생성자");
        this.state = {
            sel : ''
        }
    }
    componentWillMount() {
        console.log('2. componentWillMount()');
    }

    componentDidMount() {
        console.log('4. componentDidMount() : 컴포넌트가 화면에 보인다.');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps()');
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate()');
        
    // }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate()');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('5. componentWillUnmount()');
    }
    onChange = (e) => {
        this.setState({sel : e.target.value})
    };
    render() {
        console.log('3. render()')
        console.log(this.props.citys);
        // 배열 -> map -> 멤버조작 -> 동적 배열 생성 -> 화면반영
        // thsi.props.citys 를 이용하여 동적으로 <option ...> 을 생성하여 화면에 반영하시오
        const options = this.props.citys.map(
            
            // JSX를 리턴하면 ()를 붙일수 있다.
            (value, index) => (<option value = {value}>{value}</option>));
        return (
            <div>
                <select value={this.state.sel} onChange={this.onChange}> 
                    {/*<option value = "서울">서울</option>*/}
                        {options}
                    </select>
            </div>
        );
    }
}

Myselect.propTypes = {};

export {Myselect};