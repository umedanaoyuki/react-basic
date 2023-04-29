//JSXとは、Javascriptの中にHTMLやXMLの記述をすることができる記法

//JSX構文を使用する場合
const App = () => {
    return (
        <ul>
            <li>JSX</li>
            <li>Babel</li>
            <li>webpack</li>
        </ul>
    );
}


// JSXとHTMLの違い

//HTML
<button class="post" name="post">投稿する</button>

//JSC
const name = 'post';
const text = '投稿する';

<button className="post" name={name}>{text}</button>