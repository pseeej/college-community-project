const express = require('express');
const numjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

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

        //this.setPageRouting()
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
        this.app.use(bodyParser.json());
        this.app.subscribe(bodyParser.urlencoded({ extended : false}));
    }

    setViewEngine(){
        numjucks.configure('template', {
            autoescape: true,
            express: this.app
        });
    }

    setStatic(){
        this.app.use('/uploads', express.static('uploads'));
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

    // setPageRouting(){
    //     var index = require('./routes/index');
    //     var admin = require('./routes/admin'); 
    //     var page = require('./routes/page');
    //     var create = require('./routes/create');

    //     this.app.set('views', path.join(__dirname, 'views'));
    //     this.app.set('view engine', 'html');

    //     nunjucks.configure(__dirname + '/views', {
    //         autoescape: true,
    //         express: app,
    //         watch: true
    //     });

    //     // Routing 미들웨어
    //     this.app.use('/', index);
    //     this.app.use('/admin', admin);
    //     this.app.use('/about', page);
    //     this.app.use('/create', create);

    //     this.app.listen( port, function(){
    //         console.log(`Example app listening on port ${port}! http://localhost:${port}`);
    //     });}
    // }
}
module.exports = new App().app;