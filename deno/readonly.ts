// https://typescriptbook.jp/reference/values-types-variables/object/readonly-property

let test: {
  readonly foo: number;
};

test = { foo: 1 };
//test.foo = 2;
//Cannot assign to 'foo' because it is a read-only property.