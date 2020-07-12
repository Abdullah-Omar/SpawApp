var search = function (value, callback){
    var T = value.includes("T");
    var C = value.includes("C");
    var G = value.includes("G");
    var L = value.includes("L");

    console.log(T);
    console.log(C);
    console.log(G);
    console.log(L);
    
    if (!T && !C && !G && !L) {
        return callback('Item must include type , course , group and lesson');
    }
}

module.exports = search