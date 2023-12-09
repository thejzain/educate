import axios from 'axios'
import { ethers } from 'ethers'
import lighthouse from '@lighthouse-web3/sdk'

const signAuthMessage = async(privateKey, verificationMessage) =>{
  const signer = new ethers.Wallet(privateKey)
  const signedMessage = await signer.signMessage(verificationMessage)
  return(signedMessage)
}

const getApiKey = async() =>{
  const wallet = {
    publicKey: 'YOUR_PUBLIC_KEY', // Ex: '0xEaF4E24ffC1A2f53c07839a74966A6611b8Cb8A1'
    privateKey: 'WALLET_PRIVATE_KEY'
  }
  const verificationMessage = (
    await axios.get(
        `https://api.lighthouse.storage/api/auth/get_message?publicKey=${wallet.publicKey}`
    )
  ).data
  const signedMessage = await signAuthMessage(wallet.privateKey, verificationMessage)
  const response = await lighthouse.getApiKey(wallet.publicKey, signedMessage)
  console.log(response)
}

export default getApiKey;