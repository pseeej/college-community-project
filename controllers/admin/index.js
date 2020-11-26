const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

//--------------자유게시판 세팅---------------//

router.get('/free_write', ctrl.get_free_write );

router.get('/free_write/write', ctrl.get_free_write_write );

router.post('/free_write/write', ctrl.post_free_write_write );

router.get('/free_write/detail/:id', ctrl.get_free_write_detail );

router.get('/free_write/edit/:id', ctrl.get_free_write_edit );

router.post('/free_write/edit/:id', ctrl.post_free_write_edit );

router.get('/free_write/delete/:id', ctrl.get_free_write_delete );

router.get('/free_write/index.html', ctrl.get_free_write_index );

router.get('/free_write/admin/free_write', ctrl.get_free_write_slash);

//--------------홍보게시판 세팅---------------//

router.get('/adv', ctrl.get_adv );

router.get('/adv/write', ctrl.get_adv_write );

router.post('/adv/write', ctrl.post_adv_write );

router.get('/adv/detail/:id', ctrl.get_adv_detail );

router.get('/adv/edit/:id', ctrl.get_adv_edit );

router.post('/adv/edit/:id', ctrl.post_adv_edit );

router.get('/adv/delete/:id', ctrl.get_adv_delete );

router.get('/adv/index.html', ctrl.get_adv_index );

router.get('/adv/admin/adv', ctrl.get_adv_slash);



module.exports = router;