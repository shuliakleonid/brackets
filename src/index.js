module.exports = function check(str, bracketsConfig) {
    let checkPoint = 1;
    while(checkPoint == 1) {
        let pastStr = str;
        bracketsConfig.map(function (a){
        str = str.replace(a[0] + a[1], '')
      }
      )
        if (pastStr === str)  { 
          checkPoint = 0; 
        }
    }
    return (str.length == 0) ? true : false;
}
