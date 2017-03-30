var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content' : '老师你真帅,测试',
    'cid' : 348
});

var options = {
    hostname : 'www.imooc.com',
    port : '80',
    path : '/course/docomment',
    method : 'POST',
    headers : {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length': postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=84fdd9fa-a969-4fbc-91b0-436e940acd07; imooc_isnew_ct=1488010371; loginstate=1; apsid=QyNjJhYTA4ODkzMjNjOTE3MzJkNDAzYzk4NTE1Y2IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzgyNDg3OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NDE2NzQwNjdAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGRhNTE2NWY1NzdiMGFhMGEwYTYxMWIzZGY4MzhkODQ4zmHaWM5h2lg%3DYj; last_login_username=441674067%40qq.com; PHPSESSID=qs4il5omaahdrj5q139qvt6il1; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1490792692,1490792697,1490792698,1490850473; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1490859022; imooc_isnew=2; cvde=58dc92a9ae610-23',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/comment/348',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}

var req = http.request(options, function(res) {
    console.log('Status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));
    res.on('data', function(chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    res.on('end', function() {
        console.log('评论完毕');
    });
    
});
req.on('error', function(e) {
        console.log('Error: ' + e.message);
    });
req.write(postData);
req.end();