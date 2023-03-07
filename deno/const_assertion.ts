// https://typescriptbook.jp/reference/values-types-variables/const-assertion

const hoge = {
  name: "hoge",
  no: 30,
  height: 0.4,
  weight: 6.0,
} as const;
// オブジェクトリテラルの末尾にas constを記述すればプロパティがreadonlyでリテラルタイプで指定した物と同等の扱いになる
// readonlyはプロパティごとにつけられる
// const assertionはすべてのプロパティを固定する