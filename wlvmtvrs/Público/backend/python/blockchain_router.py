from fastapi import APIRouter, HTTPException
from blockchain_service import BlockchainService

router = APIRouter()
blockchain_service = BlockchainService()

"""
API Router for Blockchain-related operations.

This module provides endpoints to interact with blockchain functionalities such as minting NFTs, transferring tokens, 
retrieving NFTs, and querying balances. Each endpoint is designed to handle specific blockchain operations.
"""

@router.post("/mint_land_nft")
async def mint_land_nft(user_id: str, land_data: dict):
    """
    Mint a new Land NFT for a user.

    Args:
        user_id (str): The ID of the user who will own the NFT.
        land_data (dict): Metadata associated with the land NFT.

    Returns:
        dict: Contains the transaction hash of the minting operation.

    Raises:
        HTTPException: If the minting operation fails.
    """
    try:
        transaction_hash = await blockchain_service.mint_land_nft(user_id, land_data)
        return {"transaction_hash": transaction_hash}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/transfer_metaverse_token")
async def transfer_metaverse_token(sender_id: str, recipient_id: str, amount: float):
    """
    Transfer Metaverse tokens from one user to another.

    Args:
        sender_id (str): The ID of the sender.
        recipient_id (str): The ID of the recipient.
        amount (float): The amount of tokens to transfer.

    Returns:
        dict: Contains the transaction hash of the transfer operation.

    Raises:
        HTTPException: If the transfer operation fails.
    """
    try:
        transaction_hash = await blockchain_service.transfer_metaverse_token(sender_id, recipient_id, amount)
        return {"transaction_hash": transaction_hash}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/get_land_nft/{user_id}")
async def get_land_nft(user_id: str):
    """
    Retrieve all Land NFTs owned by a user.

    Args:
        user_id (str): The ID of the user.

    Returns:
        dict: Contains a list of land NFTs owned by the user.

    Raises:
        HTTPException: If the retrieval operation fails.
    """
    try:
        land_nfts = await blockchain_service.get_land_nft(user_id)
        return {"land_nfts": land_nfts}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/get_balance/{user_id}")
async def get_balance(user_id: str):
    """
    Retrieve the balance of Metaverse tokens for a user.

    Args:
        user_id (str): The ID of the user.

    Returns:
        dict: Contains the balance of Metaverse tokens.

    Raises:
        HTTPException: If the retrieval operation fails.
    """
    try:
        balance = await blockchain_service.get_balance(user_id)
        return {"balance": balance}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/burn_land_nft")
async def burn_land_nft(user_id: str, nft_id: str):
    """
    Burn (delete) a specific Land NFT owned by a user.

    Args:
        user_id (str): The ID of the user.
        nft_id (str): The ID of the NFT to be burned.

    Returns:
        dict: Contains the transaction hash of the burn operation.

    Raises:
        HTTPException: If the burn operation fails.
    """
    try:
        transaction_hash = await blockchain_service.burn_land_nft(user_id, nft_id)
        return {"transaction_hash": transaction_hash}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/get_transaction_history/{user_id}")
async def get_transaction_history(user_id: str):
    """
    Retrieve the transaction history for a user.

    Args:
        user_id (str): The ID of the user.

    Returns:
        dict: Contains a list of transactions associated with the user.

    Raises:
        HTTPException: If the retrieval operation fails.
    """
    try:
        transaction_history = await blockchain_service.get_transaction_history(user_id)
        return {"transaction_history": transaction_history}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))