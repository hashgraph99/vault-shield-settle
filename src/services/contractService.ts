import { Contract, ethers } from 'ethers';
import { VaultShield__factory } from '../types/contracts';
import { CONTRACT_ADDRESSES } from '../lib/contracts';

/**
 * VaultShield Contract Service
 * Handles all encrypted blockchain operations without direct transfers
 */
export class ContractService {
  private contract: Contract;
  private provider: ethers.Provider;
  private signer: ethers.Signer;

  constructor(provider: ethers.Provider, signer: ethers.Signer, chainId: number) {
    this.provider = provider;
    this.signer = signer;
    
    const contractAddress = CONTRACT_ADDRESSES[chainId as keyof typeof CONTRACT_ADDRESSES]?.VaultShield;
    if (!contractAddress) {
      throw new Error(`Contract not deployed on chain ${chainId}`);
    }
    
    this.contract = VaultShield__factory.connect(contractAddress, signer);
  }

  /**
   * Create encrypted account with FHE-encrypted data
   * @param encryptedBalance FHE-encrypted balance
   * @param encryptedCreditScore FHE-encrypted credit score
   * @param fheProof FHE proof for encrypted data
   */
  async createEncryptedAccount(
    encryptedBalance: string,
    encryptedCreditScore: string,
    fheProof: string
  ): Promise<{ txHash: string; accountId: number }> {
    try {
      const tx = await this.contract.createEncryptedAccount(
        encryptedBalance,
        encryptedCreditScore,
        fheProof
      );
      
      const receipt = await tx.wait();
      const event = receipt.logs.find(log => {
        try {
          const parsed = this.contract.interface.parseLog(log);
          return parsed?.name === 'EncryptedAccountCreated';
        } catch {
          return false;
        }
      });
      
      if (event) {
        const parsed = this.contract.interface.parseLog(event);
        const accountId = parsed?.args.accountId.toNumber();
        return { txHash: tx.hash, accountId };
      }
      
      throw new Error('Account creation event not found');
    } catch (error) {
      console.error('Error creating encrypted account:', error);
      throw new Error('Failed to create encrypted account');
    }
  }

  /**
   * Initiate encrypted transaction
   * @param fromAccount Source account ID
   * @param toAccount Destination account ID
   * @param encryptedAmount FHE-encrypted amount
   * @param transactionType Type of transaction
   * @param fheProof FHE proof for encrypted amount
   */
  async initiateEncryptedTransaction(
    fromAccount: number,
    toAccount: number,
    encryptedAmount: string,
    transactionType: number,
    fheProof: string
  ): Promise<{ txHash: string; transactionId: number }> {
    try {
      const tx = await this.contract.initiateEncryptedTransaction(
        fromAccount,
        toAccount,
        encryptedAmount,
        transactionType,
        fheProof
      );
      
      const receipt = await tx.wait();
      const event = receipt.logs.find(log => {
        try {
          const parsed = this.contract.interface.parseLog(log);
          return parsed?.name === 'EncryptedTransactionInitiated';
        } catch {
          return false;
        }
      });
      
      if (event) {
        const parsed = this.contract.interface.parseLog(event);
        const transactionId = parsed?.args.transactionId.toNumber();
        return { txHash: tx.hash, transactionId };
      }
      
      throw new Error('Transaction initiation event not found');
    } catch (error) {
      console.error('Error initiating encrypted transaction:', error);
      throw new Error('Failed to initiate encrypted transaction');
    }
  }

  /**
   * Create encrypted settlement
   * @param participantAccounts Array of participant account IDs
   * @param encryptedTotalAmount FHE-encrypted total amount
   * @param fheProof FHE proof for encrypted amount
   */
  async createEncryptedSettlement(
    participantAccounts: number[],
    encryptedTotalAmount: string,
    fheProof: string
  ): Promise<{ txHash: string; settlementId: number }> {
    try {
      const tx = await this.contract.createEncryptedSettlement(
        participantAccounts,
        encryptedTotalAmount,
        fheProof
      );
      
      const receipt = await tx.wait();
      const event = receipt.logs.find(log => {
        try {
          const parsed = this.contract.interface.parseLog(log);
          return parsed?.name === 'EncryptedSettlementCreated';
        } catch {
          return false;
        }
      });
      
      if (event) {
        const parsed = this.contract.interface.parseLog(event);
        const settlementId = parsed?.args.settlementId.toNumber();
        return { txHash: tx.hash, settlementId };
      }
      
      throw new Error('Settlement creation event not found');
    } catch (error) {
      console.error('Error creating encrypted settlement:', error);
      throw new Error('Failed to create encrypted settlement');
    }
  }

  /**
   * Get encrypted account information
   * @param accountId Account ID
   */
  async getEncryptedAccountInfo(accountId: number) {
    try {
      const accountInfo = await this.contract.getEncryptedAccountInfo(accountId);
      return {
        isActive: accountInfo.isActive,
        isVerified: accountInfo.isVerified,
        owner: accountInfo.owner,
        createdAt: new Date(accountInfo.createdAt.toNumber() * 1000),
        lastActivity: new Date(accountInfo.lastActivity.toNumber() * 1000)
      };
    } catch (error) {
      console.error('Error getting account info:', error);
      throw new Error('Failed to get account information');
    }
  }

  /**
   * Get encrypted transaction information
   * @param transactionId Transaction ID
   */
  async getEncryptedTransactionInfo(transactionId: number) {
    try {
      const transactionInfo = await this.contract.getEncryptedTransactionInfo(transactionId);
      return {
        isProcessed: transactionInfo.isProcessed,
        initiator: transactionInfo.initiator,
        timestamp: new Date(transactionInfo.timestamp.toNumber() * 1000),
        encryptedMetadata: transactionInfo.encryptedMetadata
      };
    } catch (error) {
      console.error('Error getting transaction info:', error);
      throw new Error('Failed to get transaction information');
    }
  }

  /**
   * Get encrypted settlement information
   * @param settlementId Settlement ID
   */
  async getEncryptedSettlementInfo(settlementId: number) {
    try {
      const settlementInfo = await this.contract.getEncryptedSettlementInfo(settlementId);
      return {
        isCompleted: settlementInfo.isCompleted,
        initiator: settlementInfo.initiator,
        createdAt: new Date(settlementInfo.createdAt.toNumber() * 1000),
        completedAt: settlementInfo.completedAt.toNumber() > 0 
          ? new Date(settlementInfo.completedAt.toNumber() * 1000) 
          : null,
        settlementHash: settlementInfo.settlementHash
      };
    } catch (error) {
      console.error('Error getting settlement info:', error);
      throw new Error('Failed to get settlement information');
    }
  }

  /**
   * Get user's encrypted account IDs
   * @param userAddress User address
   */
  async getUserEncryptedAccountIds(userAddress: string): Promise<number[]> {
    try {
      const accountIds = await this.contract.getUserEncryptedAccountIds(userAddress);
      return accountIds.map(id => id.toNumber());
    } catch (error) {
      console.error('Error getting user account IDs:', error);
      throw new Error('Failed to get user account IDs');
    }
  }

  /**
   * Get user's encrypted transaction IDs
   * @param userAddress User address
   */
  async getUserEncryptedTransactionIds(userAddress: string): Promise<number[]> {
    try {
      const transactionIds = await this.contract.getUserEncryptedTransactionIds(userAddress);
      return transactionIds.map(id => id.toNumber());
    } catch (error) {
      console.error('Error getting user transaction IDs:', error);
      throw new Error('Failed to get user transaction IDs');
    }
  }

  /**
   * Listen for contract events
   * @param eventName Event name to listen for
   * @param callback Callback function for event data
   */
  on(eventName: string, callback: (data: any) => void) {
    this.contract.on(eventName, callback);
  }

  /**
   * Remove event listeners
   * @param eventName Event name to remove listeners for
   */
  off(eventName: string) {
    this.contract.off(eventName);
  }

  /**
   * Get contract address
   */
  getContractAddress(): string {
    return this.contract.target as string;
  }

  /**
   * Get contract instance
   */
  getContract(): Contract {
    return this.contract;
  }
}

/**
 * FHE Encryption Service
 * Handles FHE encryption/decryption operations
 */
export class FHEEncryptionService {
  /**
   * Encrypt data using FHE
   * @param data Data to encrypt
   * @param publicKey FHE public key
   */
  static async encryptData(data: number, publicKey: string): Promise<string> {
    // This would integrate with Zama's FHE library
    // For now, return a placeholder encrypted value
    return `encrypted_${data}_${Date.now()}`;
  }

  /**
   * Generate FHE proof
   * @param encryptedData Encrypted data
   * @param privateKey FHE private key
   */
  static async generateFHEProof(encryptedData: string, privateKey: string): Promise<string> {
    // This would generate a proper FHE proof
    // For now, return a placeholder proof
    return `proof_${encryptedData}_${Date.now()}`;
  }

  /**
   * Verify FHE proof
   * @param proof FHE proof to verify
   * @param encryptedData Encrypted data
   */
  static async verifyFHEProof(proof: string, encryptedData: string): Promise<boolean> {
    // This would verify the FHE proof
    // For now, return true for valid-looking proofs
    return proof.startsWith('proof_') && encryptedData.startsWith('encrypted_');
  }
}

/**
 * Privacy-Preserving Transaction Service
 * Handles encrypted transactions without revealing sensitive data
 */
export class PrivacyTransactionService {
  private contractService: ContractService;

  constructor(contractService: ContractService) {
    this.contractService = contractService;
  }

  /**
   * Create a privacy-preserving transaction
   * @param fromAccount Source account
   * @param toAccount Destination account
   * @param amount Transaction amount (will be encrypted)
   * @param metadata Optional transaction metadata
   */
  async createPrivacyTransaction(
    fromAccount: number,
    toAccount: number,
    amount: number,
    metadata?: string
  ): Promise<{ txHash: string; transactionId: number }> {
    try {
      // Encrypt the amount using FHE
      const encryptedAmount = await FHEEncryptionService.encryptData(amount, 'public_key');
      const fheProof = await FHEEncryptionService.generateFHEProof(encryptedAmount, 'private_key');
      
      // Create encrypted transaction on blockchain
      const result = await this.contractService.initiateEncryptedTransaction(
        fromAccount,
        toAccount,
        encryptedAmount,
        3, // Transfer type
        fheProof
      );
      
      return result;
    } catch (error) {
      console.error('Error creating privacy transaction:', error);
      throw new Error('Failed to create privacy transaction');
    }
  }

  /**
   * Create a privacy-preserving settlement
   * @param participantAccounts Participant account IDs
   * @param totalAmount Total settlement amount (will be encrypted)
   * @param settlementMetadata Settlement metadata
   */
  async createPrivacySettlement(
    participantAccounts: number[],
    totalAmount: number,
    settlementMetadata?: string
  ): Promise<{ txHash: string; settlementId: number }> {
    try {
      // Encrypt the total amount using FHE
      const encryptedTotalAmount = await FHEEncryptionService.encryptData(totalAmount, 'public_key');
      const fheProof = await FHEEncryptionService.generateFHEProof(encryptedTotalAmount, 'private_key');
      
      // Create encrypted settlement on blockchain
      const result = await this.contractService.createEncryptedSettlement(
        participantAccounts,
        encryptedTotalAmount,
        fheProof
      );
      
      return result;
    } catch (error) {
      console.error('Error creating privacy settlement:', error);
      throw new Error('Failed to create privacy settlement');
    }
  }
}
