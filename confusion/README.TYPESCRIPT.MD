JS ES5
// Named function
function add(x, y) {
    return x + y;
}

TYPESCRIPT
We can add types to each of the parameters and then to the function itself to add a return type. TypeScript can figure the return type out by looking at the return statements, so we can also optionally leave this off in many cases.

TYPESCRUPT ES5
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };

let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };