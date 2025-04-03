const handleAxiosError = (error: any) => {
  if (error.response) {
    // Get the error message from various possible response formats
    const errorData = error.response.data;
    let errorMessage = "";

    if (typeof errorData === "string") {
      errorMessage = errorData;
    } else if (typeof errorData === "object") {
      // Handle different error response formats
      if (errorData.message) {
        errorMessage = errorData.message;
      } else if (errorData.detail) {
        errorMessage = errorData.detail;
      } else if (errorData.error) {
        errorMessage = errorData.error;
      } else {
        // Handle nested error objects
        errorMessage = Object.entries(errorData)
          .map(([key, value]) => {
            if (Array.isArray(value)) {
              return `${key}: ${value.join(", ")}`;
            }
            return `${key}: ${value}`;
          })
          .join("\n");
      }
    }

    return {
      type: "SERVER_ERROR",
      status: error.response.status,
      message: errorMessage || "Server error occurred",
      data: error.response.data,
    };
  } else if (error.request) {
    return {
      type: "NETWORK_ERROR",
      message: "Network error - no response received",
    };
  } else {
    return {
      type: "CLIENT_ERROR",
      message: error.message || "An unexpected error occurred",
    };
  }
};

export default handleAxiosError;
