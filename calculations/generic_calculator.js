// universal operation
function doOperation(){
    let args = arguments.length;
    if (args > 1) {
    let opr = arguments[0];
    let vals = [...arguments].slice(-args+1);  
    console.log( opr, 'on:', vals );
    return opr(...vals);
    }
}

// universal sum
doOperation(function(){
    let ret = 0;
    for (i=0; i<arguments.length; i++) {
        ret = ret + +arguments[i];
    }
    return ret;
},-20,'-10',0.5);

// universal multiply
doOperation(function(){
    let ret = 1;
    for (i=0; i<arguments.length; i++) {
        ret = ret * +arguments[i];
    }
    return ret;
},-20,'-0.5',0.2);

// universal divide
doOperation(function(){
    let ret = 1;
    for (i=0; i<arguments.length; i++) {
        ret = ret / +arguments[i];
    }
    return ret;
},-20,'-0.5',0.2);

