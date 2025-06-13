import reflex as rx
from wlvmtvrs.Público.frontend.pruebas.src.web.web_principal.reflex_nuevo.rxconfig import config


config = rx.Config(
    app_name="reflex_nuevo",
    plugins=[rx.plugins.TailwindV3Plugin()],
    
)
