const product = require('../model/product.model');
const multer = require("multer")

const AllProducts = async (req, res) => {
        const products = await product.find();
        res.send(products);
}

const ProductById = async (req, res) => {
        const productId = req.params.id;
        const product = await product.findById(productId);
        if (!product) {
                return res.send({ message: 'Product not found' });
        }
        res.send(product);
}

const createProduct = async (req, res) => {
    const product = new product(req.body);
    await product.save();
    res.send(product);
}

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const updatedProduct = await product.findByIdAndUpdate(productId, req.body, { new: true });
    if (!updatedProduct) {
        return res.send({ message: 'Product not found' });
    }
    res.send(updatedProduct);
}

const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    await product.findByIdAndDelete(productId);
    res.send();
}


const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.render('profile', { profile: user.profile, user });
    } catch (error) {
        res.status(500).send('Error fetching profile');
    }
};

 const addProduct = async (req, res) => {
    try {
        const { title, rating, year } = req.body;
        const image = req.file.filename;  // Get uploaded image name
        
        // Find user and update profile with the new product
        const user = await User.findById(req.params.id);
        user.profile.push({ title, rating, year, image });

        await user.save();
        res.redirect(`/profile/${user._id}`);
    } catch (error) {
        res.status(500).send('Error adding product');
    }
};

module.exports = { AllProducts , createProduct , updateProduct, deleteProduct , ProductById , getProfile , addProduct}; 