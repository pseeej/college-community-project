const { Router } = require('express');
const router = Router();
//const index_ctrl = require('./index.ctrl');

//router.get('/', index_ctrl.get_index);
router.get('/', (req, res) => {
    res.render('admin/index.html');
})

router.get('/admin/free_write', (req, res) => {
    res.render('admin/free_write.html');
})

router.use('/admin', require('./admin'));


module.exports = router;