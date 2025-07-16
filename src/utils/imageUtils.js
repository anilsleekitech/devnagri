// Function to get the correct asset path with the base URL
export const getAssetPath = (path) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // Get the base URL from Vite's import.meta.env
    const base = import.meta.env.BASE_URL || '/';
    
    // Combine base and path, ensuring no double slashes
    return `${base}${cleanPath}`;
};

// Function specifically for image paths
export const getImagePath = (imagePath) => {
    return getAssetPath(`assets/images/${imagePath}`);
};

// Function specifically for video paths
export const getVideoPath = (videoPath) => {
    return getAssetPath(`assets/videos/${videoPath}`);
}; 