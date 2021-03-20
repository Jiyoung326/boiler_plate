const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const {User} = require('./models/User');
const config = require('./config/key.js');

//application/x-www-form-urlencoded : 이렇게 된 타입을 분석해서 가져올 수 있게 함
app.use(bodyParser.urlencoded({extended : true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected... ')) //연결 잘 될 경우
  .catch(error => console.log(error)); //연결 잘못된 경우

app.get('/', (req, res) => {
  res.send('하이하이요~~~');
})

//회원가입용 라우트
app.post('/register', (req,res) => {
    //회원가입 시 필요한 정보들을 클라이언트에서 가져오면 db에 넣어주기

    //request bosy 안에 json 형식의 정보가 들어있다.
    //이렇게 바디 안에 들어있을 수 있게 해주는 것이 bodyParser를 사용했기 때문이다.
    const user = new User(req.body)

    //몽고db 메소드. 유저정보 저장.
    user.save((err, userInfo)=>{
        //에러 발생시
        if (err) return res.json({success: false, err});
        //성공시
        return res.status(200).json({
            success : true
        });
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})