// code your solution here
const record = [
    { year: "2015", 
    result: "W"
},
    { year: "2014", 
    result: "N/A"
},
    { year: "2013", 
    result: "L"
},
  ]
function superbowlWin(){
    const result = record.find(function() {
        if (record['result'] === "W") {
            return record['year']
        }else {
            return "undefined"
        }
    });
}


    //return result ? result.year : 'undefined';




//superbowlWin = (record) => {
//   const result = record.find(record => record.result === 'W');
//   return !!result ? result.year : "undefined"
//    }

//superbowlWin = (record) => {
//    const result = record.find( record => record.result === "W" );
//    console.log(result)
//    return record.result === "W" ? record.year : 'undefined';
//  }
//
//superbowlWin = (record) => {
//    const result = record.find( record => record.result === "W" );
//    return !!result ? result.year : 'undefined';
//  }
//

//superbowlWin = (record) => {
//    const result = record.find(() => record.result === 'W')
//    return !!result ? result.year : undefined }


