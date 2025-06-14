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
            rx.heading("World Virtual", size=rx.breakpoints(initial="6", md="7"), color="#34495e", font_family="Helvetica, Arial, sans-serif"),
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
            width="100%",
            bg="white",
            align_items="center",
            z_index="10",
            flex_wrap="wrap",
            height="70px",
        ),
        rx.center(
            rx.box(
                rx.text("AQUI: tiene que ir la zona blanca., del tamaño del marco blanco", font_family="Helvetica, Arial, sans-serif", color="#34495e", size="6"),
                bg="white",
                border_radius="15px",
                padding="0px",
                width="95%",
                box_shadow="lg",
                height="100%",
                box_sizing="border-box",
            ),
            flex_grow="1",
            width="100%",
            display="flex",
            align_items="center",
            justify_content="center",
            box_sizing="border-box",
            overflow="hidden",
        ),
        bg="linear-gradient(to right, #a8c0ff, #3f2b96)",
        height="calc(100vh - 5px)",
        width="calc(100vw - 5px)",
        display="flex",
        flex_direction="column",
        align_items="center",
        justify_content="flex-start",
        border="0px",
        box_shadow="0px 0px 0px 4px #3498db",
        box_sizing="border-box",
        padding="0px",
        overflow_y="hidden",
        overflow_x="hidden",
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
                    "display": "none", # Para navegadores basados en Webkit (Chrome, Safari)
                },
                "scrollbarWidth": "none", # Para Firefox
            },
        },
    ),
)
app.add_page(index) 