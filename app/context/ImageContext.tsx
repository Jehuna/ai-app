
"use client"
// contexts/ImageContext.tsx
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface ImageContextState {
  imageUrl: string;
  loading: boolean;
  generateImage: (description: string) => Promise<void>;
}

const defaultState: ImageContextState = {
  imageUrl: '/',
  loading: false,
  generateImage: async () => {},
};

const ImageContext = createContext<ImageContextState>(defaultState);

export const useImageContext = () => useContext(ImageContext);

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  const [imageUrl, setImageUrl] = useState<string>(defaultState.imageUrl);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  const generateImage = useCallback(async (description: string) => {
    setLoading(true);
    try {
      // Assuming `generateImage` is an async function that returns a URL string
      const url = await import('../api/useImageGeneration').then((module) => module.default(description));
      setImageUrl(url);
    } catch (error) {
      console.error("Failed to generate image:", error);
    }
    setLoading(false);
  }, []);

  return (
    <ImageContext.Provider value={{ imageUrl, loading, generateImage }}>
      {children}
    </ImageContext.Provider>
  );
};
