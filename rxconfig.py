import reflex as rx

config = rx.Config(
    app_name="WoldVirtual_Crypto_3D",
    db_url="sqlite:///reflex.db",
    env=rx.Env.DEV,
    tailwind=None,  # Desactivamos Tailwind ya que no lo estamos usando
) 