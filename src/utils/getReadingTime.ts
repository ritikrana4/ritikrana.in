/**
 * Calculate reading time for a given text
 * Based on average reading speed of 200 words per minute
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  // Remove markdown syntax, code blocks, and HTML tags
  const text = content
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/`[^`]+`/g, "") // Remove inline code
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1") // Convert links to text
    .replace(/[#*_~`]/g, "") // Remove markdown formatting
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/\n+/g, " ") // Replace newlines with spaces
    .trim();
  
  const words = text.split(/\s+/).filter(word => word.length > 0).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return Math.max(1, readingTime); // Minimum 1 minute
}

