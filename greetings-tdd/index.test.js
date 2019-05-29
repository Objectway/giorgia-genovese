const greet=require('./index');
test('should greet my name1 ',()=>{
    expect(greet.greet()).toBe('hello my friend');
})
test('should greet my name2 ',()=>{
    expect(greet.greet('bob')).toBe('hello bob');
})
test('should greet my name3 ',()=>{
    expect(greet.greet('BOB')).toBe('HELLO BOB');
})
test('should greet my name4 ',()=>{
    expect(greet.greet(['bob','billi'])).toBe('hello bob billi');
})
test('should greet my name5 ',()=>{
    expect(greet.greet(['BOB','BILLI'])).toBe('HELLO BOB BILLI');
})