import React from 'react';
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
    return <div className="search-text less">Search Text<img src={Girl} /></div>
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)