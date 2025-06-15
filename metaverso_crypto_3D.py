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

def header() -> rx.Component:
    return rx.hstack(
        rx.text("World Virtual", font_size="1.2em", color="black", font_weight="bold"),
        rx.spacer(),
        rx.text("Mapa del proyecto.", margin_left="0.5em", color="black", font_size="0.8em"),
        rx.text("Libro blanco", margin_left="0.5em", color="black", font_size="0.8em"),
        rx.text("Código abierto", margin_left="0.5em", color="black", font_size="0.8em"),
        rx.button(
            State.selected_network,
            on_click=State.toggle_networks_menu,
            bg="#343a40",
            color="white",
            margin_left="0.5em",
            font_size="0.65em",
            padding="0.3em 0.6em",
            cursor="pointer",
            border_radius="4px",
        ),
        rx.cond(
            State.show_networks_menu,
            rx.vstack(
                rx.button("Binance Smart Chain", on_click=lambda: State.select_network("Binance Smart Chain"), 
                         width="100%", font_size="0.7em", padding="0.3em"),
                rx.button("Ethereum", on_click=lambda: State.select_network("Ethereum"), 
                         width="100%", font_size="0.7em", padding="0.3em"),
                rx.button("Polygon", on_click=lambda: State.select_network("Polygon"), 
                         width="100%", font_size="0.7em", padding="0.3em"),
                rx.button("Avalanche", on_click=lambda: State.select_network("Avalanche"), 
                         width="100%", font_size="0.7em", padding="0.3em"),
                rx.button("Arbitrum", on_click=lambda: State.select_network("Arbitrum"), 
                         width="100%", font_size="0.7em", padding="0.3em"),
                rx.button("Solana", on_click=lambda: State.select_network("Solana"), 
                         width="100%", font_size="0.7em", padding="0.3em"),
                
                position="absolute",
                top="100%",
                right="0",
                background_color="white",
                border="1px solid #ddd",
                border_radius="4px",
                box_shadow="0 2px 8px rgba(0,0,0,0.1)",
                z_index="1000",
                width="160px",
                align_items="stretch",
                spacing="0",
            ),
        ),
        width="100%",
        height="50px",
        background_color="#FFD700",
        align_items="center",
        padding_x="1rem",
        z_index="100",
        position="relative",
    )

def main_content_area() -> rx.Component:
    return rx.box(
        # Contenedor blanco (zona blanca) para el contenido
        rx.box(
            rx.vstack(
                rx.text("Área de Contenido Principal", 
                       font_size="1.5em", 
                       font_weight="bold", 
                       color="#333"),
                rx.text("Aquí va el contenido principal de la aplicación.", 
                       font_size="1em", 
                       color="#666",
                       text_align="center"),
                rx.text("El área se ajusta automáticamente al tamaño de la ventana.", 
                       font_size="0.9em", 
                       color="#888",
                       text_align="center"),
                spacing="1rem",
                align_items="center",
                justify_content="center",
                height="100%",
            ),
            background_color="white",
            border="2px solid #4A90E2",
            border_radius="30px",
            box_shadow="0 4px 20px rgba(0,0,0,0.1)",
            width="90%",
            height="85%",
            padding="2rem",
            margin="auto",
            display="flex",
            align_items="center",
            justify_content="center",
        ),
        width="100%",
        height="100%",
        background_color="#228B22",
        display="flex",
        align_items="center",
        justify_content="center",
        padding="1rem",
    )

def index() -> rx.Component:
    return rx.box(
        rx.vstack(
            header(),
            main_content_area(),
            width="90vw",
            height="90vh",
            border="2px solid #4A90E2",
            border_radius="15px",
            spacing="0",
            overflow="hidden",
        ),
        width="100vw",
        height="100vh",
        display="flex",
        align_items="center",
        justify_content="center",
        background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        margin="0",
        padding="0",
    )

app = rx.App(
    theme=rx.theme(
        accent_color="violet",
        gray_color="slate",
        styles={
            "*": {
                "margin": "0",
                "padding": "0",
                "boxSizing": "border-box",
            },
            "html, body": {
                "height": "100%",
                "width": "100%",
                "overflow": "hidden",
                "fontFamily": "system-ui, -apple-system, sans-serif",
            },
            "body": {
                "&::-webkit-scrollbar": {
                    "display": "none",
                },
                "scrollbarWidth": "none",
                "msOverflowStyle": "none",
            },
        },
    ),
)
app.add_page(index)