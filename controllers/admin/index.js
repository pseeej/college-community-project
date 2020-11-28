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

//질문게시판 세팅

router.get('/que', ctrl.get_que );

router.get('/que/write', ctrl.get_que_write );

router.post('/que/write', ctrl.post_que_write );

router.get('/que/detail/:id', ctrl.get_que_detail );

router.get('/que/edit/:id', ctrl.get_que_edit );

router.post('/que/edit/:id', ctrl.post_que_edit );

router.get('/que/delete/:id', ctrl.get_que_delete );

router.get('/que/index.html', ctrl.get_que_index );

router.get('/que/admin/adv', ctrl.get_que_slash);

//팁게시판 세팅

router.get('/tip', ctrl.get_tip );

router.get('/tip/write', ctrl.get_tip_write );

router.post('/tip/write', ctrl.post_tip_write );

router.get('/tip/detail/:id', ctrl.get_tip_detail );

router.get('/tip/edit/:id', ctrl.get_tip_edit );

router.post('/tip/edit/:id', ctrl.post_tip_edit );

router.get('/tip/delete/:id', ctrl.get_tip_delete );

router.get('/tip/index.html', ctrl.get_tip_index );

router.get('/tip/admin/adv', ctrl.get_tip_slash);

module.exports = router;