import reflex as rx
from rxconfig import config

class State(rx.State):
    """El estado de la aplicación."""
    show_networks_menu: bool = False
    selected_network: str = "Redes Blockchain"
    # Se eliminan current_section y set_section ya que rx.tabs.root maneja su propio estado

    def toggle_networks_menu(self):
        self.show_networks_menu = not self.show_networks_menu

    def select_network(self, network: str):
        self.selected_network = network
        self.show_networks_menu = False # Cerrar el menú después de la selección


def index() -> rx.Component:
    return rx.box( # Marco azul que ocupa toda la pantalla con el borde
        # Barra de navegación superior
        rx.hstack(
            rx.heading("World Virtual", size=rx.breakpoints(initial="6", md="7"), color="#34495e", font_family="Helvetica, Arial, sans-serif", padding_left=rx.breakpoints(initial="10px", md="20px")), # Tamaño más pequeño y responsive
            rx.tabs.root(
                rx.tabs.list(
                    rx.tabs.trigger("Acerca de", value="acerca", font_family="Helvetica, Arial, sans-serif", size=rx.breakpoints(initial="1", md="2")),
                    rx.tabs.trigger("Características", value="caracteristicas", font_family="Helvetica, Arial, sans-serif", size=rx.breakpoints(initial="1", md="2")),
                    rx.tabs.trigger("Comunidad", value="comunidad", font_family="Helvetica, Arial, sans-serif", size=rx.breakpoints(initial="1", md="2")),
                    flex_wrap="wrap", # Permite que los elementos se envuelvan en pantallas pequeñas
                ),
                color_scheme="blue",
                min_height="auto",
            ),
            rx.spacer(), # Empuja el menú de redes a la derecha
            rx.menu.root(
                rx.menu.trigger(
                    rx.button(
                        State.selected_network,
                        bg=rx.cond(State.selected_network == "Redes Blockchain", "#6c757d", "#28a745"),
                        color="white",
                        border_radius="md",
                        _hover={"bg": rx.cond(State.selected_network == "Redes Blockchain", "#5a6268", "#218838")},
                        size=rx.breakpoints(initial="1", md="2") # Tamaño más pequeño y responsive
                    )
                ),
                rx.menu.content(
                    rx.menu.item("Ethereum", on_click=lambda: State.select_network("Ethereum")),
                    rx.menu.item("Polygon", on_click=lambda: State.select_network("Polygon")),
                    rx.menu.item("Binance Smart Chain", on_click=lambda: State.select_network("Binance Smart Chain")),
                    rx.menu.item("Solana", on_click=lambda: State.select_network("Solana")),
                ),
                is_open=State.show_networks_menu,
                on_open_change=State.set_show_networks_menu,
            ),
            padding_y="0px", # Reducir padding vertical para una barra más pequeña
            padding_x="0px",
            width="100%",
            bg="white", # Fondo de la barra de navegación
            border_bottom="0px solid #3498db",
            align_items="center",
            z_index="10",
            flex_wrap="wrap", # Permite que los elementos se envuelvan en pantallas pequeñas
        ),
        # Contenido principal (el cuadro blanco con las pestañas)
        rx.center( # Este center asegura que el cuadro blanco esté centrado horizontal y verticalmente
            rx.box(
                # Aquí va el componente completo de pestañas rx.tabs.root
                
                bg="white",
                border="2px solid #3498db",
                border_radius="15px",
                padding="0px",
                width="100%", # Ahora mucho más grande
                box_shadow="lg",
                height="100%", # Ocupar la mayor parte de la altura
                box_sizing="border-box",
            ),
            flex_grow="1", # Permitir que el center ocupe el espacio vertical restante
            width="100%", # Asegurar que se extienda horizontalmente para permitir el centrado
            height="100%",
            display="flex", # Hacerlo un contenedor flex
            align_items="center", # Centrar el contenido verticalmente dentro de este centro
            justify_content="center", # Centrar el contenido horizontalmente dentro de este centro
            padding_y="0px", # Reducir padding vertical para que el cuadro blanco ocupe más espacio
            box_sizing="border-box", # Asegurar que padding y border se incluyan en la altura
        ),
        bg="linear-gradient(to right, #a8c0ff, #3f2b96)",
        height="calc(100vh - 1px)",
        width="100vw",
        display="flex",
        flex_direction="column",
        align_items="center", # Alinear hijos (navbar y área de contenido) al centro horizontalmente
        justify_content="flex-start", # Empujar el contenido hacia arriba
        border="4px solid #3498db",
        box_sizing="border-box",
        padding_y="0px",
        overflow_y="hidden",
    )

app = rx.App(
    theme=rx.theme(
        accent_color="violet",
        gray_color="slate",
    ),
)
app.add_page(index)

