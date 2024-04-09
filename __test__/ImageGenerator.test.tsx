import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageGenerator from '../app/components/ImageGenerator';
import generateImage from '../app/api/useImageGeneration';



// Mock the generateImage function
jest.mock('../../api/useImageGeneration', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('ImageGenerator Component', () => {
  // Mock data for the test
  const mockDescription = 'sunset';
  const mockImageUrl = 'http://example.com/sunset.jpg';

  beforeEach(() => {
    (generateImage as jest.Mock).mockClear();
  });

  it('renders without crashing', () => {
    render(<ImageGenerator />);
    expect(screen.getByText(/AI Image Generator/i)).toBeInTheDocument();
  });

  it('displays the default image initially', () => {
    render(<ImageGenerator />);
    const image = screen.getByAltText('Generated');
    expect(image.getAttribute('src')).toContain('imageDefault.jpg');
  });

  it('generates an image upon submission of a description', async () => {
    (generateImage as jest.Mock).mockResolvedValue(mockImageUrl);
    render(<ImageGenerator />);

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText(/Describe what you want to see/i), {
      target: { value: mockDescription },
    });

    // Simulate button click to generate image
    fireEvent.click(screen.getByText(/Generate/i));

    // Wait for the image URL to be updated
    await waitFor(() => expect(generateImage).toHaveBeenCalledWith(mockDescription));

    // Use getAttribute for accessing src
    const generatedImage = screen.getByAltText('Generated');
    expect(generatedImage.getAttribute('src')).toBe(mockImageUrl);
  });

  it('shows a loading indicator while the image is being generated', async () => {
    (generateImage as jest.Mock).mockResolvedValue(mockImageUrl);
    render(<ImageGenerator />);

    fireEvent.change(screen.getByPlaceholderText(/Describe what you want to see/i), {
      target: { value: mockDescription },
    });
    fireEvent.click(screen.getByText(/Generate/i));

    // Check if the loading indicator is shown
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    // Wait for the loading to finish
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument());
  });

  it('handles generation errors gracefully', async () => {
    (generateImage as jest.Mock).mockRejectedValue(new Error('Failed to generate image'));
    render(<ImageGenerator />);

    fireEvent.change(screen.getByPlaceholderText(/Describe what you want to see/i), {
      target: { value: mockDescription },
    });
    fireEvent.click(screen.getByText(/Generate/i));

    // The error handling in the component might need to be updated to reflect this test case,
    // e.g., displaying an error message to the user, as the current implementation only logs the error.
    await waitFor(() => expect(screen.getByAltText('Generated').getAttribute('src')).toContain('imageDefault.jpg'));
  });
});
