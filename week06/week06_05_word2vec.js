// https://ronxin.github.io/wevi/ 에서 벡터 데이터 가져오기 (개발자 콘솔에 붙여넣기)

console.log( getVector(outputVectors) );
console.log( getMeta(vocab) );

function getVector(a){
    let result = "";
    for(let i in a){
        for(let j in a[i]){
            result+=a[i][j].weight;
            if(j!=a[i].length-1){
                result+="\t";
            }
        }
        result+="\n";
    }
    return result;
}

function getMeta(a){
    let result = "";
    for(let i in a){
        result+=a[i]+"\n";
    }
    return result;
}

