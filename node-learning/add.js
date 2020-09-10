function add(x,y){
    return x+y;
}
function cumadd(x,y){
    return x+y+x+y;
}
//export your func to other files below
module.exports.addition = add;
module.exports.cum=cumadd;

//modules.exports={add,cumadd}