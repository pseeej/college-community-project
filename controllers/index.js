const { Router } = require('express');
const router = Router();
const models = require('../models');
const index_ctrl = require('./index.ctrl');

router.get('/', index_ctrl.get_index);
// router.get('/', (req, res) => {
//     res.render('admin/index.html');
// })

//자유게시판 세팅

router.get('/admin/free_write', index_ctrl.get_index_free);

router.get('/free_write.html', index_ctrl.get_index_free);

//홍보게시판 세팅

router.get('/advertisement.html', index_ctrl.get_index_adv);

router.get('/admin/adv', index_ctrl.get_index_adv);

//질문게시판 세팅

router.get('/question.html', index_ctrl.get_index_que);

router.get('/admin/que', index_ctrl.get_index_que);

//질문게시판 세팅

router.get('/tip.html', index_ctrl.get_index_tip);

router.get('/admin/tip', index_ctrl.get_index_tip);

//배송조회 세팅
router.get('/shipping.html', index_ctrl.get_index_ship);

router.get('/admin/shipping', index_ctrl.get_index_ship);

router.post('/admin/shipping', index_ctrl.post_shipping);

//admin 경로설정

router.use('/admin', require('./admin'));


module.exports = router;