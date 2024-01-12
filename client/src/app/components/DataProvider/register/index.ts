export const registerUser = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        throw new Error('Failed to register user');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error making API call:', error);
      throw error;
    }
  };
  