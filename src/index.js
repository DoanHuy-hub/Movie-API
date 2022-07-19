const express = require("express")
const accountRoutes = require('./accounts/routes')
const userRoutes = require('./users/routes')
const adminRoutes = require('./admins/routes')
const filmRoutes = require('./films/routes')

const app = express() // app ở đây đại diện cho cái dự án nodejs mà mình sẽ làm việc xuyên suốt
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/account', accountRoutes)
app.use('/user', userRoutes)
app.use('/admin', adminRoutes)
app.use('/films', filmRoutes)

app.listen(PORT, () => {
    console.log(`Server dang chay tren port ${PORT}`)
});

