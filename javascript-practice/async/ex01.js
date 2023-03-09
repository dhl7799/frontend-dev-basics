
const myAsyncFn01 = function(param, callback){
    //
    // 비동기 코드
    // 파일 시스템 접근(file io), 네트워크 통신, SQL to DB, setTimeout
    //
    setTimeout(function(){
        if(param=='data'){
            callback(null,'ok');
        }
        else{
            callback(new Error('fail'),null);
        }
        
    }, 2000);
}


myAsyncFn01("data",function(error,result){
    if(error){
        console.error(error);
        return;
    }
    console.log(result);
});

myAsyncFn01("",function(error,result){
    if(error){
        console.error(error);
        return;
    }
    console.log(result);
});

console.log("wait........");

