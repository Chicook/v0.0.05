import reflex as rx

def index() -> rx.Component:
    return rx.container(
        rx.vstack(
            # Header
            rx.heading(
                "World Virtual",
                size="9",
                color="white",
                text_align="center",
                margin_bottom="1rem"
            ),
            
            # Subtitle
            rx.text(
                "Un metaverso descentralizado 3D donde tú eres el principal protagonista",
                size="5",
                color="gray.300",
                text_align="center",
                margin_bottom="2rem"
            ),
            
            # Main content
            rx.vstack(
                rx.text(
                    "🌍 Explora mundos infinitos",
                    size="4",
                    color="white",
                    margin_bottom="1rem"
                ),
                rx.text(
                    "🎮 Crea tu propia realidad",
                    size="4", 
                    color="white",
                    margin_bottom="1rem"
                ),
                rx.text(
                    "🚀 Conecta con otros usuarios",
                    size="4",
                    color="white",
                    margin_bottom="2rem"
                ),
                spacing="4",
                align="center"
            ),
            
            # Call to action button
            rx.button(
                "Entrar al Metaverso",
                size="4",
                color_scheme="blue",
                margin_top="2rem"
            ),
            
            spacing="6",
            align="center",
            min_height="100vh",
            justify="center"
        ),
        style={
            "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "min_height": "100vh",
            "padding": "2rem"
        }
    )

app = rx.App()
app.add_page(index, route="/")