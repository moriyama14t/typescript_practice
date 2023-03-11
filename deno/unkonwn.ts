let testValue: unknown;
testValue = 1; // OK
testValue = "string"; // OK
testValue = { name: "オブジェクト" }; // OK

// anyの場合
const testAnyValue: any = 10;
const int: number = testAnyValue;
const bool: boolean = testAnyValue;
const str: string = testAnyValue;
const obj: object = testAnyValue;

// unknownの場合
// unknown型の値は具体的な型へ代入できない
const testUnknownValue: unknown = 10;
// const int: number = testUnknownValue;
// Type 'unknown' is not assignable to type 'number'.

// const bool: boolean = testUnknownValue;
// Type 'unknown' is not assignable to type 'boolean'.

// const str: string = testUnknownValue;
// Type 'unknown' is not assignable to type 'string'.

// const obj: object = testUnknownValue;
// Type 'unknown' is not assignable to type 'object'.

const any: any = testUnknownValue; // OK
const unknown: unknown = testUnknownValue; // OK

// unknown型はプロパティへのアクセス、メソッドの呼び出しも許されない。
const value: unknown = 10;
// value.toFixed();

const objUnKown: unknown = { name: "オブジェクト" };
// objUnKown.name;