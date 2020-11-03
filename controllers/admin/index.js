const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

router.get('/free_write', ctrl.get_free_write );

router.get('/free_write/write', ctrl.get_free_write_write );

router.post('/free_write/write', ctrl.post_free_write_write );

router.get('/free_write/detail/:id', ctrl.get_free_write_detail );

router.get('/free_write/edit/:id', ctrl.get_free_write_edit );

router.post('/free_write/edit/:id', ctrl.post_free_write_edit );

router.get('/free_write/delete/:id', ctrl.get_free_write_delete );


module.exports = router;