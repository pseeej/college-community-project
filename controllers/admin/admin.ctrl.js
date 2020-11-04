const models = require('../../models');

exports.getIndex = (_, res) => {
    models.posts.findAll({

    }).then( (post) => {
        // DB에서 받은 posts를 posts변수명으로 내보냄
        res.render( 'admin/free_write.html' ,{ post});
    });
}

exports.get_free_write = ( _ , res) => {
    models.posts.findAll({

    }).then( (post) => {
        // DB에서 받은 posts를 posts변수명으로 내보냄
        res.render( 'admin/free_write.html' ,{ post});
    });
}

exports.get_free_write_write = ( _ , res) => {
    res.render( 'admin/free_write_post.html');
}

exports.post_free_write_write = ( req , res ) => {
    
    models.posts.create({
        title : req.body.title,
        description : req.body.description
    }).then( () => {
        console.log(req.body);
        //res.redirect('/admin/free_write');
        res.send(req.body);
    })
    //models.posts.create()
    //res.send(req.body);
}

exports.get_free_write_detail = ( req , res ) => {
    models.posts.findByPk(req.params.id).then( (post) => {
        res.render('admin/free_write_detail.html', { post });  
    });
};

exports.get_free_write_edit = ( req , res ) => {
    //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
    models.posts.findByPk(req.params.id).then( (post) => {
        res.render('admin/free_write_post.html', { post });
    });
};

exports.post_free_write_edit = ( req , res ) => {

    models.posts.update(
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
    models.posts.destroy({
        where: {
            id: req.params.id
        }
    }).then( () => {
        res.redirect('/admin/free_write');
    });
}; 