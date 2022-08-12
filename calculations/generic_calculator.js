// universal operation
function doOperation(){
    let args = arguments.length;
    if (args > 1) {
    let opr = arguments[0];
    let vals = [...arguments].slice(-args+1);  
    console.log( opr, 'on:', vals );
    return ''+opr(...vals);
    }
    else {
    return ''+arguments[0];
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

// universal operations
// sum
function sum(){
    let ret = 0;
    for (i=0; i<arguments.length; i++) {
        ret = ret + +arguments[i];
    }
    return ret;
}

// multi
function multi() {
    let ret = 1;
    for (i=0; i<arguments.length; i++) {
        ret = ret * +arguments[i];
    }
    return ret;
}

// div
function div(){
    let ret = 1;
    for (i=0; i<arguments.length; i++) {
        ret = ret / +arguments[i];
    }
    return ret;
}

// usages:
doOperation(multi('2',div('3')));

doOperation(multi(2,div(3)));

doOperation(multi(2,div('3')));

doOperation(multi('2',div(3)));

//'0.6666666666666666' gives String

doOperation(multi,2,doOperation(div,3));

doOperation(multi,'2',doOperation(div,'3'));

doOperation(multi,2,doOperation(div,'3'));

doOperation(multi,'2',doOperation(div,3));

//'0.6666666666666666' gives String

multi('2',div('3'));
//0.6666666666666666    gives Number