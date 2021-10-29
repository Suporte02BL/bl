let fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
    fs.readFile('/home/suporte02/WebstormProjects/bl/' + req.url, function (err,data) {
        if (err) {
            console.log(req.url);
            if (req.url =="/") {
                console.log("err")
                fs.readFile('/home/suporte02/WebstormProjects/bl/index.html', function (err, data) {
                    if (err) {
                        res.writeHead(404);
                        res.end(JSON.stringify(err));
                        return;
                    }
                    else{
                        res.writeHead(200);
                        res.end(data);
                    }
                });
            }else{
                res.end(JSON.stringify(err));
                res.writeHead(404);
            }
            return;
        }
        else {}
        res.writeHead(200);
        res.end(data);
    });
}).listen(8080);