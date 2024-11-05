import { IncomingForm } from 'formidable';
import cloudinary from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dsgd8zlaa",
  api_key: "317624556574113",
  api_secret: "83PoY_zav0p_hxKqEsMFAnUbFFY",
});

// Disable the default body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Define the type for the uploaded file
interface UploadedFile {
  filepath: string; // Path to the uploaded file
  originalFilename: string; // Original file name
  mimetype: string; // File MIME type
  size: number; // File size in bytes
}

// API route to handle image upload
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
 
    const form = new IncomingForm();

    return new Promise((resolve) => {
      console.log("Parsing form..."); // Debug log
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Error parsing form:', err);
          res.status(500).json({ message: 'Error parsing form.', error: err });
          return resolve(null);
        }

        console.log("Form parsed successfully."); // Debug log
        console.log("Fields:", fields); // Log fields
        console.log("Files:", files); // Log files

        // Check if the image file is uploaded and ensure it's the right type
        const imageFile = files.image;
        if (!imageFile || (Array.isArray(imageFile) && imageFile.length === 0)) {
          res.status(400).json({ message: 'No image file uploaded.' });
          return resolve(null);
        }

        // If imageFile is an array, get the first file
        const fileToUpload: any = Array.isArray(imageFile) ? imageFile[0] : imageFile;

        try {
          console.log("Uploading file to Cloudinary..."); // Debug log
          // Upload the image to Cloudinary
          const uploadResult = await cloudinary.v2.uploader.upload(fileToUpload.filepath, {
            folder: 'uploads', // Optional: Specify a folder in Cloudinary
          });

          console.log("Upload successful:", uploadResult); // Debug log
          // Return the secure URL of the uploaded image
          res.status(200).json({ url: uploadResult.secure_url });
          return resolve(null);
        } catch (uploadError) {
          console.error('Error uploading to Cloudinary:', uploadError);
          res.status(500).json({ message: 'Error uploading to Cloudinary.', error: uploadError });
          return resolve(null);
        }
      });
    });
  } 