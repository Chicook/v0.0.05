DATABASE_URL = "mysql://user:password@localhost:3306/metaverse_db"

"""
Archivo de configuración para el backend de la aplicación.

Este archivo contiene las configuraciones esenciales para la conexión con la base de datos,
la red blockchain, los contratos inteligentes, el almacenamiento IPFS, y otros parámetros
importantes para el funcionamiento del sistema.

Variables:
----------
DATABASE_URL : str
    URL de conexión a la base de datos MySQL. Incluye el usuario, contraseña, host, puerto y nombre de la base de datos.
BLOCKCHAIN_NETWORK : str
    URL del nodo RPC de la red blockchain utilizada (por ejemplo, Polygon).
CONTRACT_ADDRESS_LAND_NFT : str
    Dirección del contrato inteligente para los tokens NFT de terrenos en el metaverso.
CONTRACT_ADDRESS_METAVERSE_TOKEN : str
    Dirección del contrato inteligente para el token del metaverso.
IPFS_URL : str
    URL del endpoint API de IPFS para almacenamiento descentralizado.
SECRET_KEY : str
    Clave secreta utilizada para la seguridad de la aplicación (por ejemplo, en la generación de tokens).
DEBUG : bool
    Indica si el modo de depuración está activado. True para desarrollo, False para producción.
ALLOWED_HOSTS : list
    Lista de hosts permitidos para acceder a la aplicación. "*" permite todos los hosts.

Herramientas adicionales:
-------------------------
1. Asegúrate de proteger la información sensible como `DATABASE_URL` y `SECRET_KEY` utilizando variables de entorno.
2. Configura `DEBUG` como False en producción para evitar la exposición de información sensible.
3. Utiliza una lista específica de dominios en `ALLOWED_HOSTS` en lugar de "*", para mejorar la seguridad.
4. Verifica que las direcciones de los contratos inteligentes sean correctas y estén actualizadas.
5. Considera usar un servicio de gestión de secretos para almacenar claves sensibles como `SECRET_KEY`.

"""

BLOCKCHAIN_NETWORK = "https://polygon-rpc.com"
CONTRACT_ADDRESS_LAND_NFT = "0xYourLandNFTContractAddress"
CONTRACT_ADDRESS_METAVERSE_TOKEN = "0xYourMetaverseTokenContractAddress"
IPFS_URL = "https://ipfs.infura.io:5001/api/v0/"
SECRET_KEY = "your_secret_key"
DEBUG = True
ALLOWED_HOSTS = ["*"]