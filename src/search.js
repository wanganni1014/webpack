import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './search.css';
import './search.less';
import Girl from './images/girl.jpeg';

// class Search extends React.Component {
//     render() {
//         return <div>search Test</div>
//     }
// }

const Search = () => {
    const [comp, setComp] = useState();
    const clicked = () => {
        import('./test.js').then(text => {
            setComp(text.default);
        })
    }
    return <div>
        <div className="search-text less" onClick={clicked}>Search Text</div>
        {comp && comp}
    </div>
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)