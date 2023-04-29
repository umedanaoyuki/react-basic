//state とはコンポーネントが内部で保持する「状態」のことで、画面上に表示されるデータなど、
//アプリケーションが保持している状態のこと
//stateが更新されるとstateを管理するコンポーネントが再描画されることにより画面上のUIや挙動が変わる

import { useState } from "react";

//状態の定義
const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
//例
const [liked, setLiked] = useState(false);
