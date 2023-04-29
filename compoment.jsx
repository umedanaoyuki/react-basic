//関数コンポーネント
const App = () => {
    return <p>これは関数コンポーネントです</p>
}

// ReactDOM.render

//HTML
<div id="root"></div>

//このHTMLのdiv要素にReact要素をレンダリングしたい場合は以下のコードを記載

import { ReactDOM } from "react-dom";

//helloコンポーネント（関数型コンポーネント）
const Hello = () => {
    return <h1>Hello, React</h1>
}

//ReactDOM.render()で<div id="root"></div>に<Hello />を割り当てる
ReactDOM.render(<Hello />, document.getElementById("root"));


