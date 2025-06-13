import reflex as rx

""""
from wlvmtvrs.Público.frontend.pruebas.src.web.web_principal.reflex_nuevo.rxconfig import config

""""

class State(rx.State):
    """The app state."""
    show_networks_menu: bool = False

    def toggle_networks_menu(self):
        self.show_networks_menu = not self.show_networks_menu

def index() -> rx.Component:
    return rx.container(
        rx.vstack(
            rx.center(
                rx.heading("World Virtual", size="9", color="#34495e", font_family="Helvetica, Arial, sans-serif"),
                width="100%",
            ),
            rx.center(
                rx.text(
                    "Un metaverso descentralizado 3D donde tú eres el principal protagonista",
                    size="5",
                    color="#2c3e50",
                    font_family="Helvetica, Arial, sans-serif"
                ),
                width="100%",
            ),
            # Lista de características con iconos
            rx.center(
                rx.vstack(
                    rx.hstack(rx.icon(tag="globe", color="#28a745"), rx.text("Explora mundos infinitos", color="#2c3e50")),
                    rx.hstack(rx.icon(tag="gamepad", color="#17a2b8"), rx.text("Crea tu propia realidad", color="#2c3e50")),
                    rx.hstack(rx.icon(tag="rocket", color="#fd7e14"), rx.text("Conecta con otros usuarios", color="#2c3e50")),
                    spacing="3",
                    align_items="flex-start",
                ),
                width="100%",
            ),
            rx.spacer(), # Empuja el contenido hacia arriba
            # Botón "Conectar" y menú desplegable
            rx.hstack(
                rx.button(
                    "Conectar",
                    on_click=State.toggle_networks_menu,
                    bg="#007bff",
                    color="white",
                    border_radius="md",
                    _hover={"bg": "#0056b3"},
                    size="3"
                ),
                rx.menu.root(
                    rx.menu.trigger(
                        rx.button("Redes Blockchain", bg="#6c757d", color="white", border_radius="md", _hover={"bg": "#5a6268"}, size="3")
                    ),
                    rx.menu.content(
                        rx.menu.item("Ethereum"),
                        rx.menu.item("Polygon"),
                        rx.menu.item("Binance Smart Chain"),
                        rx.menu.item("Solana"),
                    ),
                    is_open=State.show_networks_menu,
                    on_open_change=State.set_show_networks_menu,
                ),
                width="100%",
                justify="end",
                padding_right="20px",
            ),
            spacing="5",
            justify="start",
            min_height="85vh",
            bg="white",
            border="2px solid #3498db",
            border_radius="15px",
            padding="30px",
            width="80%",
            max_width="900px",
            box_shadow="lg"
        ),
        # Contenedor principal con fondo de degradado azul
        bg="linear-gradient(to right, #a8c0ff, #3f2b96)",
        height="100vh",
        width="100vw",
        display="flex",
        align_items="center",
        justify_content="center",
    )

app = rx.App(
    theme=rx.theme(
        accent_color="violet",
        gray_color="slate",
    ),
)
app.add_page(index) 