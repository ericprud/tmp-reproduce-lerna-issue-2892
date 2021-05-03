const ShExUtil = require('..')

// Could test util directly:
console.log(Object.keys(ShExUtil).length === 2
            && ShExUtil.a === 1
            && ShExUtil.b === 2)

// , but it's more convenient to test with the parser:
const P = require('@shexjs/parser')
console.log('util 1:', P.write(P.read('{}'))      === '{"a":1,"b":2}'      )
console.log('util 2:', P.write(P.read('{"a":3}')) === '{"a":3,"b":2}'      )
console.log('util 3:', P.write(P.read('{"c":3}')) === '{"a":1,"b":2,"c":3}')
