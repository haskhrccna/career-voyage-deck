// This utility handles visitor tracking by making an API call to record page visits
// It includes proper error handling and TypeScript types for better reliability

// Define the structure of our visitor data
interface VisitorData {
  pathname: string;
  timestamp: string;
  userAgent: string;
  language: string;
}

// Define possible error types for better error handling
interface TrackingError extends Error {
  code?: string;
  status?: number;
}

/**
 * Tracks a visitor's page view by sending data to our analytics endpoint
 * Includes basic visitor information while respecting privacy
 * @returns Promise that resolves when tracking is complete
 * @throws TrackingError if the tracking request fails
 */
export const trackVisitor = async (): Promise<void> => {
  try {
    // Prepare visitor data with basic, non-sensitive information
    const visitorData: VisitorData = {
      pathname: window.location.pathname,
      timestamp: new Date().toISOString(),
      userAgent: window.navigator.userAgent,
      language: window.navigator.language
    };

    // Make the API call to your tracking endpoint
    const response = await fetch('/api/track-visitor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(visitorData),
    });

    // Handle non-200 responses explicitly
    if (!response.ok) {
      const error: TrackingError = new Error('Failed to track visitor');
      error.status = response.status;
      throw error;
    }

    // Log successful tracking in development environment
    if (process.env.NODE_ENV === 'development') {
      console.log('Visitor tracking successful:', visitorData);
    }
  } catch (error) {
    // Convert unknown error to typed error
    const trackingError: TrackingError = error instanceof Error 
      ? error 
      : new Error('Unknown tracking error');

    // Log error in development environment
    if (process.env.NODE_ENV === 'development') {
      console.error('Visitor tracking failed:', trackingError);
    }

    // Rethrow the error for the caller to handle
    throw trackingError;
  }
};

// For testing and debugging purposes, we can export a mock version
export const mockTrackVisitor = async (): Promise<void> => {
  console.log('Mock visitor tracking called');
  return Promise.resolve();
};
