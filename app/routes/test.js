const Router = require('koa-router');
const router = new Router; // new Router({prefix:'user'}) 这样可以设置路由前缀，也是实用的

const {selectTest, createTest, deleteTest, updateTest} = require('../controller/test')

router.post('/', createTest) // 增
router.delete('/:id', deleteTest)// 删
router.put('/:id', updateTest)// 改
router.get('/', selectTest)// 查

module.exports = router