const {mdToPdf} = require('md-to-pdf');

async function convert(file) {
    let res = await mdToPdf({
        path: file.path,
    })
    console.log(file.name+ " 转换完成");
    return res.content;
}


module.exports = convert;