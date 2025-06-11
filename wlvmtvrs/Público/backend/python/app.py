from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from blockchain_router import router as blockchain_router
from wlvmtvrs.backend.python.settings import settings

# Crear la instancia de la aplicación
app = FastAPI(
    title="3D Metaverse API",
    description="API para interactuar con el Metaverso en 3D utilizando blockchain.",
    version="0.0.02",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ajusta esto según tus necesidades
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir el router de blockchain
app.include_router(blockchain_router)

# Manejo de errores globales
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail},
    )

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(
        status_code=422,
        content={"detail": exc.errors()},
    )

# Punto raíz
@app.get("/")
def read_root():
    return {"message": "Welcome to the 3D Metaverse API!"}

# Punto de salud para verificar el estado del servidor
@app.get("/health", tags=["Health"])
def health_check():
    return {"status": "ok"}

# Ejemplo de endpoint adicional
@app.get("/info", tags=["Info"])
def get_info():
    return {
        "app_name": "3D Metaverse API",
        "version": "0.0.02",
        "developer": "Usuario",
        "description": "API para interactuar con el Metaverso en 3D utilizando blockchain.",
    }