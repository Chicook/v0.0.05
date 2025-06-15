"""Configuration for Reflex."""

import reflex as rx

config = rx.Config(
    app_name="metaverso_crypto_3D",
    db_url="sqlite:///reflex.db",
    env=rx.Env.DEV,
) 