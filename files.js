  // const reactPlaylist = new userdata({
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: req.body.password
        // })
        // const javaPlaylist = new userdata({
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: req.body.password
        // })
        // let userdata = {
        //     email:req.body.username,
        //     password:req.body.password
        // }
        // console.log(userdata)

        // const result = await reactPlaylist.save();



        // route.patch('/route/:id', async (req, res) => {
        //     console.log(req.body.email)
        //     try {
        //         const _id = req.params.id;
        //         console.log("Id : ", _id)
        //         //// const result = await userdata.find({_id : _id})

        //         await userdata.findByIdAndUpdate(_id, req.body);
        //         console.log("Result : ", result)
        //         res.send(result);

        //       //  // const reactPlaylist = new userdata({
        //       //  //     name: req.body.name,
        //       // //     email: req.body.email,
        //        // //     password: req.body.password
        //     } catch (e) {
        //         res.status(400).send(e)
        //     }
        // })

// route.post('/route/login', (req,res) =>{
//     const user = { id:3 }
//     const token = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozfSwiaWF0IjoxNjI1NDc4ODE0fQ.Z1Qe6TeREc6Kzj-DKfAhGMoT4Dq1yhesTgV0WF4F8xA', 'my-secret-key')
//     res.json({
//         token:token
//     })
// })



// 

// app.get('/', (req, res) => {
//     res.send("this is home page")
// })



// const Playlist = new mongoose.moodel("Playlist", playSchema)

// const creteDocument = async () => {
//     try {
//         const reactPlaylist = new userdata({
//             name: "abhishek",
//             email: "abhi@gmail.com",
//             password: 123
//         })
//         const namePlaylist = new userdata({
//             name: "vasu",
//             email: "vasu@gmail.com",
//             password: 456
//         })
//         const result = await reactPlaylist.save();

//         console.log(result);

//     }catch(err){
//         console.log(err)
//     }
// }
// creteDocument();