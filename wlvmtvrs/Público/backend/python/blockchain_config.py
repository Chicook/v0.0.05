# blockchain_config.py

from web3 import Web3, exceptions

class BlockchainConfig:
    """
    Clase para configurar la conexión a la blockchain y gestionar contratos.

    Atributos:
        network_url (str): URL del nodo de la blockchain.
        contract_addresses (dict): Diccionario con las direcciones de los contratos.
        web3 (Web3): Instancia de Web3 para interactuar con la blockchain.
    """

    def __init__(self, network_url=None, contract_addresses=None):
        """
        Inicializa la configuración de la blockchain.

        Args:
            network_url (str): URL del nodo de la blockchain. Si no se proporciona, se usa un valor predeterminado.
            contract_addresses (dict): Diccionario con las direcciones de los contratos. Si no se proporciona, se usa un valor predeterminado.
        """
        self.network_url = network_url or "https://your-network-url"  # URL predeterminada del nodo de la blockchain
        self.contract_addresses = contract_addresses or {
            "land_nft": "0xYourLandNFTContractAddress",  # Dirección del contrato NFT de terrenos
            "metaverse_token": "0xYourMetaverseTokenAddress"  # Dirección del contrato del token ERC-20
        }
        self.web3 = Web3(Web3.HTTPProvider(self.network_url))

    def is_connected(self):
        """
        Verifica si la conexión a la blockchain es exitosa.

        Returns:
            bool: True si la conexión es exitosa, False en caso contrario.
        """
        try:
            return self.web3.isConnected()
        except exceptions.ConnectionError as e:
            print(f"Error de conexión: {e}")
            return False

    def get_contract_address(self, contract_name):
        """
        Obtiene la dirección de un contrato específico.

        Args:
            contract_name (str): Nombre del contrato (por ejemplo, 'land_nft' o 'metaverse_token').

        Returns:
            str: Dirección del contrato si existe, None en caso contrario.
        """
        return self.contract_addresses.get(contract_name)

    def set_contract_address(self, contract_name, address):
        """
        Establece la dirección de un contrato específico.

        Args:
            contract_name (str): Nombre del contrato.
            address (str): Dirección del contrato.
        """
        if Web3.isAddress(address):
            self.contract_addresses[contract_name] = address
        else:
            print(f"La dirección proporcionada '{address}' no es válida.")

    def validate_network_url(self):
        """
        Valida la URL del nodo de la blockchain.

        Returns:
            bool: True si la URL es válida, False en caso contrario.
        """
        if not self.network_url.startswith("http"):
            print("La URL del nodo de la blockchain no es válida.")
            return False
        return True