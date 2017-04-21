
var sendHtml = function(path, response) {
    var fs = require('fs')
    var options = {
        encoding: 'utf-8'
    }
    path = 'template/' + path
    fs.readFile(path, options, function(err, data){
        // console.log(`读取的html文件 ${path} 内容是`, data)
        response.send(data)
    })
}

var index = {
    path: '/',
    method: 'get',
    func: function(request, response) {
      var id = request.params.id || '';
      // console.log('id', id);
        // var path = `index${id}.html`
        // var path = 'index.html'
        var path = 'index1.html'
        sendHtml(path, response)
    }
}



var routes = [
    index,
]

module.exports.routes = routes
