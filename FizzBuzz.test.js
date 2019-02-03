const fizzbuzz = require('./fizzbuzz')

test('หาร 3 ลงตัวแต่หาร 5 ไม่ลงตัว = Fizz ', () => {
    for(i = 1;i<=100;i++){
        if(i % 3 === 0 && i % 5 !== 0){
            expect(fizzbuzz(i)).toBe("Fizz");  
        }
    }
})

test('หาร 5 ลงตัวแต่หาร 3 ไม่ลงตัว = Buzz ', () => {
    for(i = 1;i<=100;i++){
        if(i % 5 === 0 && i % 3 !== 0){
            expect(fizzbuzz(i)).toBe("Buzz");  
        }
    }
})

test('หารทั้ง 3 และ 5 ลงตัว = FizzBuzz ', () => {
    for(i = 1;i<=100;i++){
        if(i % 3 === 0 && i % 5 === 0){
            expect(fizzbuzz(i)).toBe("FizzBuzz");  
        }
    }
})

test('หาร 3 และ 5 ไม่ลงตัว = ตัวมันเอง', () => {
    for(i = 1;i<=100;i++){
        if(i % 3 !== 0 && i % 5 !== 0){
            expect(fizzbuzz(i)).toBe(i);  
        }
    }
})
