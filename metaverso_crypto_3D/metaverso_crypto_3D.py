import reflex as rx
from rxconfig import config

class State(rx.State):
    """El estado de la aplicación."""
    show_networks_menu: bool = False
    selected_network: str = "Redes Blockchain"

    def toggle_networks_menu(self):
        self.show_networks_menu = not self.show_networks_menu

    def select_network(self, network: str):
        self.selected_network = network
        self.show_networks_menu = False

def index() -> rx.Component:
    return rx.box(
        # Barra superior amarilla (Header)
        rx.hstack(
            rx.text("World Virtual", font_size="1.3em", color="black"),
            rx.spacer(),
            rx.text("Acerca de", margin_left="0.7em", color="black", font_size="0.85em"),
            rx.text("Características", margin_left="0.7em", color="black", font_size="0.85em"),
            rx.text("Comunidad", margin_left="0.7em", color="black", font_size="0.85em"),
            rx.button("Redes Blockchain", bg="#343a40", color="white", margin_left="1.2em", font_size="0.85em", padding="0.4em 0.9em"),
            width="100%",
            height="33px",
            background_color="#FFD700",
            align_items="center",
            padding_left="12px",
            padding_right="12px",
            z_index="10",
            flex_shrink="0",
            box_sizing="border-box",
        ),
        # Contenedor principal con el fondo verde y el contenido blanco (Main Content Area)
        rx.box(
            rx.box(
                rx.text("AQUÍ tiene que ir la zona blanca., del tamaño del marco blanco", color="black", padding="20px"),
                background_color="white",
                border="2px solid blue",
                border_radius="15px",
                box_shadow="lg",
                width="90%", # Aumentado el ancho de la zona blanca
                height="100%",
                padding="0",
                margin="0",
                box_sizing="border-box",
                overflow="hidden",
            ),
            width="100%",
            flex_grow="1", # Permitir que ocupe el espacio restante
            background_color="#228B22",
            padding="2px",
            box_sizing="border-box",
            display="flex",
            align_items="center",
            justify_content="center",
        ),
        width="100%",
        height="100vh", # Asegura que la altura total de la página sea del 100% del viewport
        display="flex",
        flex_direction="column",
        border="0px",
        box_shadow="none",
        padding="0px",
        bg="linear-gradient(to right, #a8c0ff, #3f2b96)",
        box_sizing="border-box",
    )

app = rx.App(
    theme=rx.theme(
        accent_color="violet",
        gray_color="slate",
        styles={
            "*": {
                "margin": "0",
                "padding": "0",
            },
            "html": {
                "margin": "0",
                "padding": "0",
                "overflow": "hidden",
                "height": "100%",
                "width": "100%",
            },
            "body": {
                "margin": "0",
                "padding": "0",
                "overflow": "hidden",
                "height": "100%",
                "width": "100%",
                "&::-webkit-scrollbar": {
                    "display": "none",
                },
                "scrollbarWidth": "none",
            },
        },
    ),
)
app.add_page(index)
