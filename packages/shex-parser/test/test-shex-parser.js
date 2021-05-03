const ShExParser = require('..')
console.log(Object.keys(ShExParser).length === 3
            && ShExParser.a === 1
            && ShExParser.b === 2
            && ShExParser.c === 3)
