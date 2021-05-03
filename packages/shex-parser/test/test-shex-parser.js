const P = require('..')
console.log('parser 1:', P.write(P.read('{}'))      === '{"a":1,"b":2}'      )
console.log('parser 2:', P.write(P.read('{"a":3}')) === '{"a":3,"b":2}'      )
console.log('parser 3:', P.write(P.read('{"c":3}')) === '{"a":1,"b":2,"c":3}')
