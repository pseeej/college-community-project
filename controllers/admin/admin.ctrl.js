const models = require('../../models');

exports.get_free_write = ( _ , res) => {
    models.Posts.findAll({

    }).then( (posts) => {
        // DB에서 받은 products를 products변수명으로 내보냄
        res.render( 'admin/free_write.html' ,{ posts });
    });
}

exports.get_free_write_write = ( _ , res) => {
    res.render( 'admin/free_write_post.html');
}

exports.post_free_write_write = ( req , res ) => {
    models.Posts.create({
        title : req.body.title,
        description : req.body.description
    }).then( () => {
        res.redirect('/admin/free_write');
    });
}

exports.get_free_write_detail = ( req , res ) => {
    models.Posts.findByPk(req.params.id).then( (post) => {
        res.render('admin/free_write_detail.html', { post });  
    });
};

exports.get_free_write_edit = ( req , res ) => {
    //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
    models.Posts.findByPk(req.params.id).then( (post) => {
        res.render('admin/free_write_post.html', { post });
    });
};

exports.post_free_write_edit = ( req , res ) => {

    models.Posts.update(
        {
            title : req.body.title,
            description : req.body.description
        }, 
        { 
            where : { id: req.params.id } 
        }
    ).then( () => {
        res.redirect('/admin/free_write/detail/' + req.params.id );
    });

}

exports.get_free_write_delete = ( req , res ) => {
    models.Posts.destroy({
        where: {
            id: req.params.id
        }
    }).then( () => {
        res.redirect('/admin/free_write');
    });
}; 