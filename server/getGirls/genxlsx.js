var xlsx = require('node-xlsx')
var fs = require('fs')
const jsonArr = fs.readdirSync('./jsonGirl')
let dataArr = [{
  name: 'Sheet1',
  data: [
    ['realUid', 'toalUid', 'nickname', 'sex', 'sexValue', 'randAttr', 'marriage', 'height', 'education', 'income', 'work_location', 'work_sublocation', 'age', 'image', 'count', 'online', 'randTag', 'randListTag', 'userIcon', 'helloUrl', 'sendMsgUrl', 'shortnote', 'matchCondition']
  ]
}];
// let json = require(`./jsonGirl/${v}`)
// ๅ้กต็ๆ
// for (let i = 0; i < 3521; i++) {
//   setTimeout(() => {
//     let json = require(`./jsonGirl/jsonP_${i+1}.json`)
//     genXsls(json, i + 1, 1)
//   }, 1000 * (i + 1))
// }
// console.log(require(`./json/${jsonArr[0]}`).userInfo);
jsonArr.forEach((v, i) => {
  console.log(v);
  let json = require(`./jsonGirl/${v}`)
  genXsls(json, i, jsonArr.length)
})
// jsonArr.forEach((v, i) => {
//   console.log(v);
//   // let json = require(`./jsonGirl/${v}`)
//   fs.readFileSync(`./jsonGirl/${v}`, (err, data) => {
//     genXsls(data.toString(), i, jsonArr.length)
//   })
// })
// let json = require(`./jsonGirl/jsonP_1.json`)
//   genXsls(json, 1)
// const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v))

// console.log(dataArr[0].data);
function genXsls(json, I, L) {

  const strsArr = JSON.stringify(json.userInfo).replace(/{/g, '[').replace(/}/g, ']').replace(/"uid":/g, '').replace(/"realUid":/g, '').replace(/"nickname":/g, '').replace(/"nickname":/g, '').replace(/"sex":/g, '').replace(/"sexValue":/g, '').replace(/randAttr":/g, '').replace(/"marriage":/g, '').replace(/height":/g, '').replace(/"education":/g, '').replace(/"income":/g, '').replace(/"work_location":/g, '').replace(/"work_sublocation":/g, '').replace(/"age":/g, '').replace(/"image":/g, '').replace(/"count":/g, '').replace(/"online":/g, '').replace(/"randTag":/g, '').replace(/"randListTag":/g, '').replace(/"userIcon":/g, '').replace(/"helloUrl":/g, '').replace(/"sendMsgUrl":/g, '').replace(/"shortnote":/g, '').replace(/"matchCondition":/g, '').replace(/^\[/, '').replace(/]$/, '').replace(/^\[/, '').replace(/]$/, '').split('],[')
  for (let i = 0; i < strsArr.length; i++) {
    dataArr[0].data.push(strsArr[i].split(',')) // ๅกๅฅๆฌๆฌกJSON ่งฃๆๅบ็ๆฐ็ป
  }
  console.log(dataArr[0].data);
  // ๆฏ100ไธชJSON ็ๆไธไปฝExcel
  // fs.writeFile(`./xsls/girl_2019_03_20_${I}.xlsx`, xlsx.build(dataArr), 'utf-8', function (err) {
  //   if (err) {
  //     console.log('write file error!');
  //   } else {
  //     console.log('write file success!');
  //   }
    // if (I + 1 % 100 === 0) { // ๅคๆญๆฏ็ฌฌ100 ๅๆฐ็ๆไปถ ่พๅบExcel
    //   fs.writeFile(`./xsls/girl_2019_03_20_${I}.xlsx`, xlsx.build(dataArr), 'utf-8', function (err) {
    //     if (err) {
    //       console.log('write file error!');
    //     } else {
    //       console.log('write file success!');
    //     }
    //     dataArr[0].data = [] // ็ฝฎ็ฉบ็ผๅญ็ๆฐๆฎๆต
    //   });
    // } else if (I === L - 1) { // ๆๅๅฉไฝ็ๆไปถๆฐๆฎ
    //   fs.writeFile(`./xsls/girl_2019_03_20_${L - 1}.xlsx`, xlsx.build(dataArr), 'utf-8', function (err) {
    //     if (err) {
    //       console.log('write file error!');
    //     } else {
    //       console.log('write file success!');
    //     }
  }

// }

  fs.writeFile(`./xsls/girl_2019_03_20_all.xlsx`, xlsx.build(dataArr), 'utf-8', function (err) {
    if (err) {
      console.log('write file error!');
    } else {
      console.log('write file success!');
    }
  });