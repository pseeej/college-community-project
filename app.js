const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');
//const path = require('path');

const db = require('./models');


class App {
    constructor() {
        this.app = express();

        this.dbConnection();

        this.setViewEngine();

        this.setMiddleWare();

        this.setStatic();

        this.setLocals();

        this.getRouting();

        this.status404();

        this.errorHandler();

    }

    dbConnection(){
        db.sequelize.authenticate().then( ()=> {
            console.log("Connection has been established successfully.");
        }).then( ()=>{
            console.log("DB Sync complete.");
        }).catch(err => {
            console.error("Unable to connect to the database:", err);
        })
    }

    setMiddleWare(){
        this.app.use(logger('dev'));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        //this.app.subscribe(bodyParser.urlencoded({ extended : true}));
    }

    setViewEngine(){
        //this.app.set("view engine", "html");
        nunjucks.configure('template', {
            autoescape: false,
            express: this.app
        });

    }

    setStatic(){
        //this.app.use('/uploads', express.static('uploads'));
        //this.app.use('/css', express.static(__dirname+"/admin/css"));
        this.app.use(express.static('template'));
        //this.app.use(express.static(path.join(__dirname, '/template')));
    }

    setLocals(){
        this.app.use( (req, res, next) => {
            this.app.locals.isLogin = true;
            this.app.locals.req_path = req.path;
            next();
        });
    }

    getRouting() {
        this.app.use(require('./controllers'))
    }

    status404(){
        this.app.use( (req, res, _) => {
            res.status(404).render('common/404.html');
        });
    }

    errorHandler() {
        this.app.use( (err, req, res, _) => {
            res.status(500).render('common/500.html')
        });
    }

}
module.exports = new App().app;