# Backend Documentation

## Estructura del Backend
- `app.py`: Aplicación principal FastAPI
- `blockchain_service.py`: Servicios blockchain
- `settings.py`: Configuración del servidor

### Pasos de Configuración
1. Instalar dependencias:
```bash
pip install -r requirements.txt
```

2. Configurar variables de entorno:
```env
SECRET_KEY=your_secret_key
DEBUG=False
DATABASE_URL=your_db_url
```

3. Iniciar servidor:
```bash
uvicorn app:app --reload
```

### Mejoras Pendientes
- [ ] Implementar sistema de logs
- [ ] Mejorar manejo de errores
- [ ] Añadir tests automatizados
- [ ] Optimizar endpoints