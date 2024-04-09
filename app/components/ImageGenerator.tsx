// ImageGenerator component: Allows users to generate images based on text descriptions.
import React, { useRef, useState } from 'react';
// Style import for component-specific styling.
import styles from '../style/ImageGenerator.module.css';
// Default image to show before any generation happens.
import defaultImage from '../assest/imageDefault.jpg';
// The function to call the image generation API.
import generateImage from '../api/useImageGeneration';

import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';

const ImageGenerator: React.FC = () => {
    // State to store the generated image URL and loading status.
    const [imageUrl, setImageUrl] = useState<string>("/");
    const [loading, setLoading] = useState<boolean>(false);
    // Ref for the text input where users describe the image they want.
    const inputRef = useRef<HTMLInputElement>(null);

    // Function to handle image generation request.
    const handleImageGeneration = async () => {
        // Alert if the input field is empty.
        if (!inputRef.current?.value) {
            alert("Please enter a description for the image.");
            return;
        }
        setLoading(true);
        try {
            // Calls the API function and updates the imageUrl state with the response.
            const url = await generateImage(inputRef.current.value);
            setImageUrl(url);
        } catch (error) {
            console.error("Failed to generate image:", error);
        }
        setLoading(false);
    };

    return (
        // UI layout for the image generator.
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            alignItems: 'center',
            marginTop: '80px',
            marginBottom: '20px',
            gap: '30px',
        }}>
            {/* Title section with dynamic styling. */}
            <Typography sx={{ fontSize: '70px', fontWeight: 500, paddingBottom: '30px', '& span': { color: '#de1b89', fontWeight: 600, } }}>
                AI Image <span>Generator</span>
            </Typography>
             {/* Input field and button for generating images. */}
            <Box sx={{
                display: 'flex',
                width: '600px',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius: '50px',
                background: '#1f3540',
                padding: '10px',
            }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Describe what you want to see"
                    InputProps={{ style: { color: '#fff', borderRadius: 50, background: 'transparent' } }}
                    inputRef={inputRef}
                />
                <Button
                    sx={{ borderRadius: '50px', background: '#DE1B89', '&:hover': { background: '#bc8fa8', }, ml: 2 }}
                    variant="contained"
                    onClick={handleImageGeneration}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : 'Generate'}
                </Button>
            </Box>
             {/* Display area for the generated image or a loading indicator. */}
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, width: '300px', height: '300px', alignItems: 'center', justifyContent: 'center' }}>
                {loading ? <CircularProgress /> : <img src={imageUrl === "/" ? defaultImage.src : imageUrl} alt="Generated" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
            </Box>
        </Box>
    );
};

export default ImageGenerator;
