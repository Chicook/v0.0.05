"""Configuration for the Reflex app."""

import reflex as rx

config = rx.Config(
    app_name="WoldVirtual_Crypto_3D",
    db_url="sqlite:///reflex.db",
    env=rx.Env.DEV,
) 