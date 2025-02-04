import { Request, Response } from "express";
import Product from "../models/product.model";


export const getLatestProduct = async (req: Request, res: Response) => {
  try {
    const quantity = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
    const price = Math.floor(Math.random() * 50) + 10; // Random number between 10-60
    const profit = Math.floor(Math.random() * 30) + 5; // Random number between 5-35

    res.status(200).json({
      quantity,
      price,
      profit,
      total: quantity * price ,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching product data", error });
  }
};
  

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

// export const updateProduct = async (req: Request, res: Response) => {
//   try {
//     const updatedProduct = await Product.findOneAndUpdate(
//       {}, // Update the most recent document
//       req.body,
//       { new: true, sort: { createdAt: -1 } }
//     );

//     if (!updatedProduct) {
//       // If no document exists, create a new one
//       const newProduct = new Product(req.body);
//       const savedProduct = await newProduct.save();
//       return res.status(201).json(savedProduct);
//     }

//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating product", error });
//   }
// };
