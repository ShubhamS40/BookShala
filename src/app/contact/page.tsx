'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseclient';

function ImageUploaderFetcher() {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fetchedImages, setFetchedImages] = useState<any[]>([]); // To store fetched images

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    if (!image) return;

    setUploading(true);
    setUploadSuccess(false);
    setErrorMessage(null);

    try {
      const { data, error } = await supabase.storage
        .from('image') // Replace with your bucket name
        .upload(`public/${image.name}`, image);

      if (error) {
        throw new Error(error.message);
      }

      setUploadSuccess(true);
      fetchImage(); // Fetch the image URL after successful upload
    } catch (error: any) {
      console.error("Error occurred while uploading the image:", error);
      setErrorMessage(error.message);
    } finally {
      setUploading(false);
    }
  };

  const fetchImage = async () => {
    if (!image) return; // Ensure there's an image to fetch
    const { data } = supabase.storage.from('image').getPublicUrl(`public/${image.name}`);

    if (data) {
      setImageUrl(data.publicUrl);
      console.log("Fetched Image URL:", data.publicUrl);
      // Save image URL to the database
      await saveImageUrl(data.publicUrl);
    } else {
      setErrorMessage('Failed to fetch image URL');
    }
  };

  const saveImageUrl = async (url: string) => {
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to save image URL');
      }

      console.log('Image URL saved to database');
    } catch (error) {
      console.error("Error saving to database:", error);
    }
  };

  const fetchImagesFromDatabase = async () => {
    try {
      const response = await fetch('/api/fetch');
      const data = await response.json();
      setFetchedImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImagesFromDatabase(); // Fetch images on component mount
  }, []);

  return (
    <div>
      <h1>Upload and Fetch Image</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {previewUrl && <img src={previewUrl} alt="Preview" width="200" />}
      <button onClick={uploadImage} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>

      {uploadSuccess && <p>Image uploaded successfully!</p>}
      {errorMessage && <p style={{ color: 'red' }}>Error: {errorMessage}</p>}

      <h2>Fetched Images</h2>
      <div>
        {/* Correctly render the fetched images */}
        {fetchedImages.length > 0 ? (
          fetchedImages.map((img) => (
            <img key={img.id} src={img.url} alt={`Fetched ${img.id}`} width="300" />
          ))
        ) : (
          <p>No images found</p>
        )}
      </div>
    </div>
  );
}

export default ImageUploaderFetcher;
