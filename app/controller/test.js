const Test = require('../model/test')

class TestCtl {

    // ① 增
    async createTest(ctx) {
        const test = await new Test(ctx.request.body).save()
        ctx.body = test
    }

    // ② 删
    async deleteTest(ctx) {
        const test = await Test.findByIdAndRemove(ctx.params.id)
        if (!test) ctx.throw(404, '不存在');
        ctx.status = 204;
    }

    // ③ 改
    async updateTest(ctx) {
        const test = await Test.findByIdAndUpdate(ctx.params.id, ctx.request.body)
        ctx.body = test
    }

    // ④ 查
    async selectTest(ctx) {
        ctx.body = await Test.find()
    }
    
}

module.exports = new TestCtl()