// https://typescriptbook.jp/reference/values-types-variables/symbol

// プリミティブ型の一種で、その値が一意になる値
// シンボルはシンボル名が同じであっても、初期化した場所が違うとfalse
const s = Symbol("foo");
const ss = Symbol("foo");
console.log(s === s);
//console.log(s === ss); => false