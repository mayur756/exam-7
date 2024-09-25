const {Router} = require("express");
const peroductRouter = Router();
const { AllProducts, ProductById, createProduct, updateProduct, deleteProduct } = require("../controller/product.controller");
const multer = require("../middleware/multer");
const upload = require("../middleware/multer");


peroductRouter.get("/", AllProducts);
peroductRouter.get("/product/:id", ProductById);
peroductRouter.post("/", upload.single("img") ,  createProduct);
peroductRouter.put("/:id", updateProduct);
peroductRouter.delete("/:id", deleteProduct);


peroductRouter.post("/upload", upload.single("img"), (req, res) => {
    console.log("req.file", req.file);

    res.send("file uploaded successfully")
})
module.exports = peroductRouter;