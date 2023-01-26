import Product from "./productsModel"
import { StatusCodes } from 'http-status-codes';
import { uploadImgCloduinary, deleteImgCloudinary } from '../utils/cloudinary'

export async function getAllProducts(req, res){
    
    const products = await Product.find({})
    if ( !products ) res.send('Todavía no hay productos creados')

    res.status(StatusCodes.OK).json({ products })

}

export async function getSingleProduct(req, res){
    
    const { id: product_id } = req.params;
    if ( !product_id ) res.send(' Hubo un problema con el id del producto ') 

    const product = await Product.find( {_id: product_id} )
    if( !product ) res.send( `No existing product with id ${ product_id }` )

    res.status(StatusCodes.OK).json({ product })

}

export async function createProduct(req, res){
    const { 
        body: { name, description, price, stock, category }, 
        files: { image } 
     } = req

    if(!name || !description || !price || !stock ||  !image || !category){
        res.send( 'Todos los campos deben ser completados' )
    } 

    const result = await uploadImgCloduinary(image.tempFilePath) 

    const createdProduct = await Product.create({
        name, 
        description,
        price,
        stock, 
        category,
        image: {
            public_id: result.public_id,
            url: result.secure_url
        }
    })

    res.status(StatusCodes.OK).json({ createdProduct })

}

export async function editProduct(req, res){
    const { 
        params: {id: product_id}, 
        body: { name, description, price, stock, category }, 
        // files: { image } 
    } = req

    if(!name || !description || !price || !stock ||  !image || !category){
        res.send( 'Todos los campos deben ser completados' )
    } 

    const updatedProduct = await Product.findByIdAndUpdate(product_id, {
        name,
        description,
        price,
        stock,
        category,
        // image: {
        //     public_id: result.public_id,
        //     url: result.secure_url
        // }
    })

    res.status(StatusCodes.OK).json({ updatedProduct })

}

export async function deleteProduct(req, res){

    const {id: product_id} = req.params;
    if ( !product_id ) res.send(' No id provided ')

    const deletedProdcut = await Product.findByIdAndRemove({_id: product_id})
    if ( !deleteProduct ) res.send(' No product with that id ')

    res.status(StatusCodes.OK).send()

 }
