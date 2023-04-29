//style属性の記入方法

//jsxのStyle属性の書き方
const App1 = () => {
    return <h1 style={{fontSize: 16, color:'red'}}>Hello React!</h1>
}

//jsxStyleをオブジェクトで宣言
const jsxStyle = {
    //自動的にpxをつけてくれる
    fontSize: 16,
    color: 'red'
}

const App2 = () => {
    return <h1 style={jsxStyle}>Hello React!</h1>
}