import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.render('home',{title:'demo socket.io'})
});

router.get('/realTime', (req, res) => {
    res.render('realTimeProducts')
})
export default router