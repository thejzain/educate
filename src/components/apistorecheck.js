
import { storeApiKeyInDB } from '../api/storeApiKey';

const ApiStoreCheck = () => {
  const handleButtonClick = async () => {
    try {
      // Call the function when the button is clicked
      await storeApiKeyInDB();
      console.log('API key stored successfully!');
    } catch (error) {
      console.error('Failed to store API key:', error);
    }
  };

  return (
    <div>
      {/* Your other page content */}
      <button onClick={handleButtonClick}>Store API Key</button>
    </div>
  );
};

export default ApiStoreCheck;

