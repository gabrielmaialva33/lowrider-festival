/**
 * Get the correct asset path for both development and production environments
 * @param {string} path - The asset path (e.g., 'images/logo.png')
 * @returns {string} - The full asset path with correct base URL
 */
export function getAssetPath(path) {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // In production, use the base URL; in development, use root
    const baseUrl = import.meta.env.BASE_URL || '/';
    
    return baseUrl + cleanPath;
}