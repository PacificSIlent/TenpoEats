# TenpoEats

Este proyecto consiste en un DEMO inspirado por aplicaciones de delivery de comida. Está realizado en React Native permitiendo ser funcional en dispositivos Android (versión 9+) e iOS (versión 13+).

## Previsualización 📱

![image](https://drive.google.com/uc?export=view&id=1ij4SknqnPdmuZfQ8J3DhZoUM8Q_YaR11)
![image](https://drive.google.com/uc?export=view&id=1j8SNhVn8feD-asYjkb-TZbp1SE1Sexqa)
![image](https://drive.google.com/uc?export=view&id=1tV7ss5eb5fZZKB6QSYTeUkP9uWtuF_za)

Puedes acceder al siguiente [enlace](https://drive.google.com/drive/folders/1_ff2YciQOSvq4rQ1_FCYTYbVOq_tahJ6?usp=sharing) Drive para previsualizar la aplicación en video, tanto para Android como en iOS.

También puedes descargar el apk directamente a través de este [enlace](https://drive.google.com/drive/folders/1The2RXX-FJtJULMXC1KDyrRk7Ta_xnkq?usp=sharing)

## Funcionalidades/Características que incluye el DEMO

### Funcionalidades 🔧

- Pantalla principal
  - Muestreo de secciones de Restaurants, Categorías y Favoritos.
  - Muestreo de dirección guardada en el dispositivo.
  - Llamada de API para obtener información a mostrar.
  - Manejo de errores al llamar al API (este error es generado de manera aleatoria).
  - Implementación de Pull to Refresh (deslizamiento hacia abajo para realizar actualización y re llamar a los servicios del inicio).
  - Pantalla que indica la carga de información (loading)
- Pantalla de Error
  - Implementación de pantalla de error con botón reintentar.
- Detalle de Restaurant
  - Vista de información básica de Restaurant seleccionado previamente en la pantalla principal.
- Agregar dirección de entrega
  - Formulario de ingreso de dirección manual o con geolocalización usando lo servicios de Google Places.
  - Uso de Google Maps para mostrar ubicación seleccionada desde el input de ingreso de dirección.
  - Formulario para añadir información adicional a la dirección de entrega.
  - Guardado de información en Storage del dispositivo.

### Características 🔧

- Icono Launcher + Splash Screen includos
- Mocking de servicios con [MirageJs](https://miragejs.com/) (simulación de llamada de API real)
- Llamado de servicios con [Axios](https://axios-http.com/docs/intro)
  - Uso de interceptor en llamadas con axios
- Uso de redux con [Redux Toolkit](https://redux-toolkit.js.org/)
- Uso de animación con [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- Uso de [Formik](https://formik.org/docs/guides/react-native) (creación y manejo de formularios con validaciones con [Yup](https://formik.org/docs/guides/validation))
- Uso de storage con [Async Storage](https://react-native-async-storage.github.io/async-storage/) para la persistencia de datos en el dispositivo.
- Uso de [Google Maps](https://github.com/react-native-maps/react-native-maps)
  - Uso de [Buscador de direcciones + geolocalización](https://github.com/FaridSafi/react-native-google-places-autocomplete)
    - Uso de Geolocalización para obtener ubicación del usuario y marcarlo en Google Maps
    - Ingreso manual de la dirección para posicionarla en el mapa
- Uso de librería de componentes [React Native Paper](https://reactnativepaper.com/)
- Uso de internacionalización con [i18next](https://www.i18next.com/)
  - Lenguajes configurados:
    - Español
    - Inglés

## Comenzando 🚀

Una vez clonado el proyecto se deben seguir las instrucciones referenciadas a continuación. Estas instrucciones permitirán tener el proyecto en funcionamiento en su máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

1. Seguir estrictamente las instrucciones detalladas en el sitio oficial de [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) según el sistema operativo que estés utilizando y qué dispositivo usarás para fines de ejecutar la aplicación.vAquí encontrarás información de qué elementos debes instalar en tu S.O para tener el ambiente listo para React Native.

> NOTA: Este proyecto fue realizado mediante `React Native CLI`.

### Instalación / Modo de uso 🔧

En la raiz del proyecto ejecutar las siguientes lineas de comando:

1. Instalación de paquetes

   ```bash
   npm install
   ```

2. iOS: Instalación de pods (sólo si estás en Mac y ejecutarás la app para iOS)

   ```bash
   npx pod-install
   ```

3. iOS: Ejecutar el proyecto

   ```bash
   npx react-native run-ios
   ```

4. Android: Ejecutar el proyecto

   ```bash
   npx react-native run-android
   ```

5. Android: Generar APK para pruebas en dispositivos físicos

   ```bash
   npm run build_apk
   ```

   Una vez termine el proceso de compilación, podrás encontrar el apk en la siguiente ruta `android/app/build/outputs/apk/debug/app-debug.apk`

6. Debbug con Flipper

   Una vez haya levantado la aplicación, ya puedes abrir el debbuger Flipper para comenzar a inspeccionar la aplicación.

### Debug con Flipper 🔧

Este proyecto cuenta con completa compatibilidad con el debugger Flipper. Para descargarlo puedes hacerlo mediante el siguiente [enlace](https://fbflipper.com/docs/features/react-native/).
En él podrás inspeccionar los cambios de estado en redux, llamadas de servicio, logs, y realizar debug en los archivos en tiempo real con Hermes Debugger permitiendo poner breakpoints en los fuentes y ver con mejor detenimiento el flujo de la información.

## Estructura de proyecto 📋

La estructura del proyecto base se define de la siguiente forma

- ios: Proyecto nativo iOS generado por React Native
- android: Proyecto nativo Android generado por React Native
- src:
  - assets: Incluye todos los recursos visuales
    - fonts
    - icons
    - images
    - styles
  - components: Componentes transversales en la aplicación que se puedan reutilizar
  - config: Elementos de configuración del proyecto
  - helpers: Funciones utilitarias
  - hooks: Hooks o funcionalidades personalizadas para utilizar en react
  - i18n: Archivos de internacionalización
  - models: Interfaces de modelo de datos usados para el transporte de información en la aplicación
  - navigation: Stacks de navegación donde se declaran los routes de la app
  - screens: Pantallas/Escenas de la aplicación
  - server: Servicio Mock con MirageJs para API Rest
  - services: Archivos de conexiones a servicios externos
  - storage: Funciones de guardado de información en el dispositivo
  - store: Configuración de manejo de estados de la aplicación

## Autor ✒️

- [**Jonathan Gallegos**](https://github.com/PacificSIlent)
