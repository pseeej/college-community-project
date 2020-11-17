const models = require('../models');

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