const filterTestFn = jest.fn();


filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));

console.log(result);

console.log(filterTestFn.mock.calls[0][0]); // 11
console.log(filterTestFn.mock.calls[0][1]); // 12


$4500