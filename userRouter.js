const { Router } = require('express');
const userRouter = Router();

const { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginpage, login, signup, signuppage, profile } = require('../controller/user.controller');
const upload = require('../middleware/multer');
const { getProfile, addProduct } = require('../controller/product.controller');

userRouter.get('/', getAllUsers);
userRouter.get('/users/:id', getUserById);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.post('/', createUser);

userRouter.post('/login', login);
userRouter.get('/login', loginpage);
userRouter.post('/signup', upload.single('profile'), signup);
userRouter.get('/signup', signuppage);
userRouter.get('/profile' , profile)
userRouter.get("/profile/:id" , getProfile)
userRouter.post('/profile:id' , upload.single('profile') , addProduct)

userRouter.post("/upload", upload.single("profile"), (req, res) => {
    console.log("req.file", req.file);

    res.send("file uploaded successfully")
})

module.exports = userRouter;

