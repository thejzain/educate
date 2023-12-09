// SignIn.js

import { useState } from 'react';
import { useRouter } from 'next/router';

const SignIn = () => {
    const router = useRouter()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your authentication logic here (e.g., using an API call)
    try {
      // Perform authentication with email and password
      // Example: Call your API or authentication service
      // const response = await AuthService.signIn(email, password);
      // Handle success or error responses
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
     <div className="flex items-center justify-center min-h-screen prompt">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4"> Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
          <label className="block mb-1">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
            required
          />
        </div>
          <div>
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-black"
              required
            />
          </div>
          <button
            onClick={() => router.push('/dashboard')}
            type="submit"
            className="w-full bg-gray-500 text-white rounded px-4 py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
