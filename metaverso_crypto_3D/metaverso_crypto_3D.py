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
        rx.text("World Virtual", font_size="1.3em", color="black"),
        rx.spacer(),
        rx.text("Acerca de", margin_left="0.7em", color="black", font_size="0.85em"),
        rx.text("Características", margin_left="0.7em", color="black", font_size="0.85em"),
        rx.text("Comunidad", margin_left="0.7em", color="black", font_size="0.85em"),
        rx.button(
            State.selected_network,
            on_click=State.toggle_networks_menu,
            bg="#343a40",
            color="white",
            margin_left="1.2em",
            font_size="0.85em",
            padding="0.4em 0.9em",
            cursor="pointer",
        ),
        rx.cond(
            State.show_networks_menu,
            rx.vstack(
                rx.button("Red A", on_click=lambda: State.select_network("Red A"), width="100%"),
                rx.button("Red B", on_click=lambda: State.select_network("Red B"), width="100%"),
                rx.button("Red C", on_click=lambda: State.select_network("Red C"), width="100%"),
                position="absolute",
                top="40px",  # Adjust as needed to be below the button
                right="12px", # Aligned with the button's right edge
                background_color="white",
                border="1px solid #ddd",
                border_radius="5px",
                z_index="100",
                width="150px", # Or match button width
                align_items="stretch",
            ),
        ),
        width="100%",
        height="33px", # Fixed height for the header
        background_color="#FFD700", # Yellow header background
        align_items="center",
        padding_left="12px",
        padding_right="12px",
        z_index="10",
        flex_shrink="0", # Prevents header from shrinking
        box_sizing="border-box",
        position="relative", # For the dropdown menu positioning
    )

def main_content_area() -> rx.Component:
    # We will use flex_grow in the parent (main_page_frame) to make this
    # fill the remaining space.
    return rx.box(
        # Contenedor blanco (zona blanca) para el contenido
        rx.box(
            rx.text("AQUÍ tiene que ir la zona blanca., del tamaño del marco blanco", color="black", padding="20px"),
            background_color="white",
            border="2px solid blue", # Blue border for the white box
            border_radius="15px",
            box_shadow="lg",
            width="90%", # Ancho de la zona blanca
            height="90%", # Alto de la zona blanca
            padding="0",
            margin="auto", # Centers the white box
            box_sizing="border-box",
            overflow="hidden",
        ),
        width="100%",
        flex_grow="1", # Occupies remaining vertical space in its parent
        background_color="#228B22", # Green background for the main content area
        padding="2px", # This creates the visual "blue frame" around the green area if the outer box has a blue border
        box_sizing="border-box",
        display="flex",
        align_items="center",
        justify_content="center",
        overflow="hidden",
    )

def index() -> rx.Component:
    # Define the padding for the overall page frame
    page_padding = "2cm"
    # Define the border thickness for the main content area
    main_frame_border_thickness = "2px"

    return rx.box(
        # This is the absolute root container, spanning the entire viewport
        width="100vw",
        height="100vh",
        display="flex",
        align_items="center",
        justify_content="center",
        bg="linear-gradient(to right, #a8c0ff, #3f2b96)", # Background for the entire page
        box_sizing="border-box", # Crucial for including padding in width/height
        padding=page_padding, # This creates the "desfase" or offset around the blue frame
        # The content of this box is the main blue-bordered frame
        rx.vstack(
            header(),
            main_content_area(),
            # Calculate width and height to fit perfectly within the parent box
            # Subtract 2 * padding (left/right, top/bottom) from 100%
            width=f"calc(100% - (2 * {page_padding}))",
            height=f"calc(100% - (2 * {page_padding}))",
            border=f"{main_frame_border_thickness} solid blue", # Blue border around the entire visible content area
            border_radius="15px", # Apply border-radius to match the screenshot
            box_sizing="border-box", # Ensure border/padding are included in its own dimensions
            overflow="hidden", # Hide overflow for this main frame
        )
    )

app = rx.App(
    theme=rx.theme(
        accent_color="violet",
        gray_color="slate",
        styles={
            "*": {
                "margin": "0",
                "padding": "0",
                "boxSizing": "border-box", # Universal box-sizing
            },
            "html": {
                "height": "100%",
                "width": "100%",
                "overflow": "hidden", # No scrollbars on html element
            },
            "body": {
                "height": "100%",
                "width": "100%",
                "overflow": "hidden", # No scrollbars on body element
                "&::-webkit-scrollbar": {
                    "display": "none",
                },
                "scrollbarWidth": "none", # For Firefox
            },
        },
    ),
)
app.add_page(index)