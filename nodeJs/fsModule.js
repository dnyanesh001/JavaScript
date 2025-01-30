const fs=require('fs');
// fs.readFile('fsModule.js','utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });
// const a= fs.readFileSync('fsModule.js');
// console.log(a.toString());
fs.writeFile('file2.txt',"This is data",()=>{
    console.log('File written');
});
console.log('Last line of code');