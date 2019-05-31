
const greet=require('@/components/Function.ts');
test('button add ',()=>{
    expect(greet.clickHandlerAdd(0)).toBe(1);
})
test('button min ',()=>{
    expect(greet.clickHandlerAdd(-1)).toBe(-2);
})
