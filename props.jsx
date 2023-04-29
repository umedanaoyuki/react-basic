//親コンポーネントから子コンポーネント（Hello)が name をpropsとして受け取る
const Hello = (props) => {
    return <p>Hello, {props.name}!</p>
};

//親コンポーネントについて
//子コンポーネントでnameを渡す親コンポーネントはAppコンポーネントとする。
const App = () => {
    //子コンポーネントであるHelloコンポーネントへpropsを渡す（今回の場合REACTという状態を渡している）
    return <Hello name="REACT"></Hello>;
}

