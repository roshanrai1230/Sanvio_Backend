router.post('/products', upload.single('image'), async (req, res) => {
    try {
      // Use JSON.stringify() to properly log the objects
      console.log("BODY:", JSON.stringify(req.body)); 
      console.log("FILE:", JSON.stringify(req.file)); // Check if file is uploaded
  
      if (!req.file || !req.body.description) {
        return res.status(400).json({ message: "Image or description missing" });
      }
  
      const { description } = req.body;
      const image = req.file.path;
  
      // Save product to DB
      const product = new Product({ description, image });
      await product.save();
  
      res.status(201).json({ message: 'Product uploaded successfully', product });
    } catch (error) {
      console.error("Error in upload:", error);
      res.status(500).json({ message: 'Error uploading product', error: error.message });
    }
  });
  