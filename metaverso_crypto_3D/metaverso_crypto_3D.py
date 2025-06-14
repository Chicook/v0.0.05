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
        rx.hstack(
            rx.heading("World Virtual", size=rx.breakpoints(initial="6", md="7"), color="#34495e", font_family="Helvetica, Arial, sans-serif", padding_left=rx.breakpoints(initial="10px", md="20px")),
            rx.tabs.root(
                rx.tabs.list(
                    rx.tabs.trigger("Acerca de", value="acerca", font_family="Helvetica, Arial, sans-serif", size=rx.breakpoints(initial="1", md="2")),
                    rx.tabs.trigger("Características", value="caracteristicas", font_family="Helvetica, Arial, sans-serif", size=rx.breakpoints(initial="1", md="2")),
                    rx.tabs.trigger("Comunidad", value="comunidad", font_family="Helvetica, Arial, sans-serif", size=rx.breakpoints(initial="1", md="2")),
                    flex_wrap="wrap",
                ),
                color_scheme="blue",
                min_height="auto",
            ),
            rx.spacer(),
            rx.menu.root(
                rx.menu.trigger(
                    rx.button(
                        State.selected_network,
                        bg=rx.cond(State.selected_network == "Redes Blockchain", "#6c757d", "#28a745"),
                        color="white",
                        border_radius="md",
                        _hover={"bg": rx.cond(State.selected_network == "Redes Blockchain", "#5a6268", "#218838")},
                        size=rx.breakpoints(initial="1", md="2")
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
            padding_y="0px",
            padding_x="0px",
            width="100%",
            bg="white",
            border_bottom="0px solid #3498db",
            align_items="center",
            z_index="10",
            flex_wrap="wrap",
        ),
        rx.center(
            rx.box(
                bg="white",
                border="2px solid #3498db",
                border_radius="15px",
                padding="0px",
                width="100%",
                box_shadow="lg",
                height="100%",
                box_sizing="border-box",
            ),
            flex_grow="1",
            width="100%",
            height="100%",
            display="flex",
            align_items="center",
            justify_content="center",
            padding_y="0px",
            box_sizing="border-box",
        ),
        bg="linear-gradient(to right, #a8c0ff, #3f2b96)",
        height="100vh",
        width="100vw",
        display="flex",
        flex_direction="column",
        align_items="center",
        justify_content="flex-start",
        border="4px solid #3498db",
        box_sizing="border-box",
        padding_y="0px",
        overflow="hidden",  # Evita el desplazamiento
    )

app = rx.App(
    theme=rx.theme(
        accent_color="violet",
        gray_color="slate",
    ),
)
app.add_page(index)
