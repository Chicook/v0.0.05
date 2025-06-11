from web3 import Web3
from blockchain_config import blockchain_settings

class BlockchainService:
    """
    Clase para interactuar con contratos inteligentes en la blockchain.
    Proporciona métodos para consultar propietarios de NFTs, mintear NFTs y transferir tokens.

    Atributos:
        web3 (Web3): Instancia de Web3 para interactuar con la blockchain.
        land_nft_contract (Contract): Contrato inteligente del NFT de terrenos.
        metaverse_token_contract (Contract): Contrato inteligente del token del metaverso.
    """
    def __init__(self):
        """
        Inicializa la conexión con la blockchain y los contratos inteligentes.
        """
        try:
            self.web3 = Web3(Web3.HTTPProvider(blockchain_settings['provider_url']))
            if not self.web3.isConnected():
                raise ConnectionError("No se pudo conectar a la blockchain.")
            
            self.land_nft_contract = self.web3.eth.contract(
                address=blockchain_settings['land_nft_address'],
                abi=blockchain_settings['land_nft_abi']
            )
            self.metaverse_token_contract = self.web3.eth.contract(
                address=blockchain_settings['metaverse_token_address'],
                abi=blockchain_settings['metaverse_token_abi']
            )
        except Exception as e:
            raise RuntimeError(f"Error al inicializar BlockchainService: {e}")

    def get_land_nft_owner(self, token_id):
        """
        Obtiene el propietario de un NFT de terreno dado su token ID.

        Args:
            token_id (int): ID del token del NFT.

        Returns:
            str: Dirección del propietario del NFT.

        Raises:
            ValueError: Si ocurre un error al consultar el propietario.
        """
        try:
            return self.land_nft_contract.functions.ownerOf(token_id).call()
        except Exception as e:
            raise ValueError(f"Error al obtener el propietario del NFT: {e}")

    def mint_land_nft(self, to_address, token_id, private_key):
        """
        Mintea un nuevo NFT de terreno y lo asigna a una dirección.

        Args:
            to_address (str): Dirección del destinatario.
            token_id (int): ID del token del NFT.
            private_key (str): Clave privada del remitente.

        Returns:
            str: Hash de la transacción.

        Raises:
            ValueError: Si ocurre un error al mintear el NFT.
        """
        try:
            transaction = self.land_nft_contract.functions.mint(to_address, token_id).buildTransaction({
                'chainId': blockchain_settings['chain_id'],
                'gas': 2000000,
                'gasPrice': self.web3.toWei('50', 'gwei'),
                'nonce': self.web3.eth.getTransactionCount(to_address),
            })
            signed_txn = self.web3.eth.account.signTransaction(transaction, private_key)
            txn_hash = self.web3.eth.sendRawTransaction(signed_txn.rawTransaction)
            return txn_hash.hex()
        except Exception as e:
            raise ValueError(f"Error al mintear el NFT: {e}")

    def transfer_metaverse_token(self, to_address, amount, from_address, private_key):
        """
        Transfiere tokens del metaverso de una dirección a otra.

        Args:
            to_address (str): Dirección del destinatario.
            amount (int): Cantidad de tokens a transferir.
            from_address (str): Dirección del remitente.
            private_key (str): Clave privada del remitente.

        Returns:
            str: Hash de la transacción.

        Raises:
            ValueError: Si ocurre un error al transferir los tokens.
        """
        try:
            transaction = self.metaverse_token_contract.functions.transfer(to_address, amount).buildTransaction({
                'chainId': blockchain_settings['chain_id'],
                'gas': 2000000,
                'gasPrice': self.web3.toWei('50', 'gwei'),
                'nonce': self.web3.eth.getTransactionCount(from_address),
            })
            signed_txn = self.web3.eth.account.signTransaction(transaction, private_key)
            txn_hash = self.web3.eth.sendRawTransaction(signed_txn.rawTransaction)
            return txn_hash.hex()
        except Exception as e:
            raise ValueError(f"Error al transferir tokens: {e}")