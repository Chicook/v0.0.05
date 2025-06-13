# World Virtual - Metaverso Crypto 3D

Este es un proyecto de interfaz de usuario para un metaverso descentralizado 3D, construido con Reflex.

## Resumen de Cambios y Proceso de Desarrollo

Durante el desarrollo de esta interfaz, se realizaron los siguientes ajustes para lograr el diseño deseado:

### 1. Ajustes Iniciales de Diseño y Navegación

-   **Movimiento de Pestañas:** Las pestañas "Acerca de", "Características" y "Comunidad" se movieron desde el área de contenido principal a la barra de navegación superior, junto al título "World Virtual" y el botón "Redes Blockchain".
-   **Área Blanca de Contenido:** El área blanca principal se dejó vacía para futuras implementaciones de la escena 3D, y se ajustó su tamaño para maximizar el espacio vertical.

### 2. Optimización del Espacio y Eliminación del Desplazamiento Vertical

Para asegurar que no fuera necesario el desplazamiento vertical en la interfaz:

-   Se ajustó la `min_height` del cuadro blanco principal varias veces para encontrar el equilibrio perfecto, antes de cambiar a un enfoque de `height="100%"` para ocupar todo el espacio disponible.
-   Se eliminaron y ajustaron los `padding` y `border` en varios componentes (contenedor principal, cuadro blanco, barra de navegación) para minimizar los márgenes y maximizar el área de contenido visible.
-   Se implementó `box_sizing="border-box"` en los contenedores relevantes para asegurar que los bordes y rellenos se incluyeran dentro del tamaño total del elemento, evitando desbordamientos.
-   Finalmente, se añadió `overflow_y="hidden"` al contenedor principal para ocultar explícitamente cualquier barra de desplazamiento vertical remanente.
-   La altura del contenedor principal se ajustó a `calc(100vh - 1px)` para solucionar problemas de un píxel de desbordamiento en algunos navegadores.

### 3. Ajustes de Marcos y Apariencia

-   Se restauró el marco azul exterior de `4px` en el contenedor principal para mantener la estética deseada en las cuatro esquinas del navegador.
-   El cuadro blanco interior recuperó su `border` de `2px` y `border_radius` de `15px`.
-   El `width` del cuadro blanco se estableció en `100%` para que ocupara el máximo ancho posible dentro del marco exterior, y se eliminó `margin_x="auto"` por ser redundante.

### 4. Adaptabilidad (Responsive Design) para Dispositivos Móviles

Para asegurar que la interfaz se adaptara horizontalmente a diferentes tamaños de pantalla, especialmente en móviles, sin necesidad de desplazamiento lateral:

-   Se aplicó `flex_wrap="wrap"` al `rx.hstack` de la barra de navegación y al `rx.tabs.list` para permitir que los elementos se envuelvan en múltiples líneas cuando el espacio horizontal es limitado.
-   Se hicieron responsivos los tamaños de texto y elementos (`size` y `padding_left`) en el título "World Virtual", el botón "Redes Blockchain" y los `rx.tabs.trigger` utilizando el formato `rx.breakpoints(initial="valor_movil", md="valor_escritorio")`.

### 5. Corrección de Errores Comunes

Durante el proceso, se corrigieron `TypeError` relacionados con la forma incorrecta de pasar propiedades responsivas a los componentes de Radix UI en Reflex. Se aprendió que se debía usar `rx.breakpoints` con un diccionario de puntos de interrupción en lugar de listas directas o `rx.responsive()`.

## Instalación y Ejecución

Para instalar y ejecutar este proyecto desde otro directorio, sigue estos pasos:

1.  **Clonar el repositorio:**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_DIRECTORIO_CLONADO> # Por ejemplo, cd metaverso_crypto_3D
    ```

2.  **Crear y activar un entorno virtual (recomendado):**

    ```bash
    python -m venv venv
    # En Windows:
    .\venv\Scripts\activate
    # En macOS/Linux:
    source venv/bin/activate
    ```

3.  **Instalar las dependencias:**

    ```bash
    pip install -r requirements.txt
    ```

4.  **Ejecutar la aplicación Reflex:**

    ```bash
    reflex run
    ```

    Esto iniciará el servidor de desarrollo de Reflex y abrirá la aplicación en tu navegador (normalmente en `http://localhost:3000`).

---

¡Espero que este `README` te sea de gran utilidad para entender y gestionar tu proyecto! Si tienes alguna otra pregunta o necesitas más ajustes, no dudes en consultarme. 