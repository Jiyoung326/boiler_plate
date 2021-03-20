if(process.env.NODE_ENV ==='production'){
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
//process.env.NODE_ENV: 환경변수
//development모드에 있을 때 development, 배포 후면 production이라고 나온다.