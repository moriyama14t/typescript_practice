// https://typescriptbook.jp/reference/values-types-variables/literal-types

// リテラル型　= プリミティブ型の特定の値だけを代入可能にする型を表現
let x: 1;
x = 1;
// x = 100;

// 一般的にリテラル型はマジックナンバーやステートの表現に用いられる。
// ユニオン型と組み合わせることが多い
let num: 1 | 2 | 3 = 1;
num = 2;
// num = 4