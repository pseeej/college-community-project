const express = require('express');
const models = require('../models');
const request = require('request-promise');
const cheerio = require('cheerio');
const app = express();

app.set('json spaces', 2);

exports.get_index = ( _ , res) => {
    res.render('index.html');
}

exports.get_index_free = ((req, res) => {
    models.posts.findAll({

    }).then( (post) => {
        // DB에서 받은 posts를 posts변수명으로 내보냄
        res.render( 'admin/free_write.html' ,{ post});
    });
})

exports.get_index_adv = ((req, res) => {
    models.posts.findAll({

    }).then( (post) => {
        // DB에서 받은 posts를 posts변수명으로 내보냄
        res.render( 'admin/advertisement.html' ,{ post});
    });
})

exports.get_index_que = ((req, res) => {
    models.posts.findAll({

    }).then( (post) => {
        // DB에서 받은 posts를 posts변수명으로 내보냄
        res.render( 'admin/question.html' ,{ post});
    });
})

exports.get_index_tip = ((req, res) => {
    models.posts.findAll({

    }).then( (post) => {
        // DB에서 받은 posts를 posts변수명으로 내보냄
        res.render( 'admin/tip.html' ,{ post});
    });
})

exports.get_index_ship = ((req, res) => {
    res.render('admin/shipping.html');
})

exports.post_shipping = crawl;

async function crawl(req, res) {
    try{

        //대한통운의 현재 배송위치 크롤링 주소
        const url = `https://www.doortodoor.co.kr/parcel/ \
        doortodoor.do?fsp_action=PARC_ACT_002&fsp_cmd=retrieveInvNoACT&invc_no=${req.body.shipping}` ;
        let result = []; //최종 보내는 데이터
        
        const html = await request(url);
        const $ = cheerio.load( html , 
            { decodeEntities: false } //한글 변환
        );
        console.log("succesfully load page");
 
        const tdElements = $(".board_area").find("table.mb15 tbody tr td"); //td의 데이터를 전부 긁어온다
        var temp = {};
        for(let i = 0; i<tdElements.length; i++) {
            if(i%4 ===0){
                temp = {};
                temp["step"] = tdElements[i].children[0].data.trim();
            }else if(i%4===1){
                temp["date"] = tdElements[i].children[0].data;
            }else if(i%4 ===2){
                temp["status"] = tdElements[i].children[0].data;
                if(tdElements[i].children.length>1){
                    temp["status"] += tdElements[i].children[2].data;
                }
            }else if(i%4===3){
                temp["location"] = tdElements[i].children[1].children[0].data;
                result.push(temp);
            }
        }
 
        res.render("admin/shipping_detail.html", {result});


    }catch(e){
        console.log(e)
    }   

}

exports.get_index_covid = async (req, res) => {
    try{

        const url = `http://ncov.mohw.go.kr/` ;
        let result = []; //최종 보내는 데이터
        temp = {}
        
        const html = await request(url);
        const $ = cheerio.load( html , 
            { decodeEntities: false } //한글 변환
        );
 
        const tdElements = $(".liveNum").find("ul li span"); 
        temp["total"] = tdElements[0].children[1].data;
        temp["current"] = tdElements[2].children[0].data
        result.push(temp);
        console.log(result);
        res.render('admin/covid.html', {result});

    }catch(e){
        console.log(e)
    }    
}