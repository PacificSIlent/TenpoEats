# TenpoEats

Este proyecto consiste en un DEMO inspirado por aplicaciones de delivery de comida. Est谩 realizado en React Native permitiendo ser funcional en dispositivos Android (versi贸n 9+) e iOS (versi贸n 13+).

## Previsualizaci贸n 馃摫

![image](https://drive.google.com/uc?export=view&id=1ij4SknqnPdmuZfQ8J3DhZoUM8Q_YaR11)
![image](https://drive.google.com/uc?export=view&id=1j8SNhVn8feD-asYjkb-TZbp1SE1Sexqa)
![image](https://drive.google.com/uc?export=view&id=1tV7ss5eb5fZZKB6QSYTeUkP9uWtuF_za)

Puedes acceder al siguiente [enlace](https://drive.google.com/drive/folders/1_ff2YciQOSvq4rQ1_FCYTYbVOq_tahJ6?usp=sharing) Drive para previsualizar la aplicaci贸n en video, tanto para Android como en iOS.

Tambi茅n puedes descargar el apk directamente a trav茅s de este [enlace](https://drive.google.com/drive/folders/1The2RXX-FJtJULMXC1KDyrRk7Ta_xnkq?usp=sharing)

## Funcionalidades/Caracter铆sticas que incluye el DEMO

### Funcionalidades 馃敡

- Pantalla principal
  - Muestreo de secciones de Restaurants, Categor铆as y Favoritos.
  - Muestreo de direcci贸n guardada en el dispositivo.
  - Llamada de API para obtener informaci贸n a mostrar.
  - Manejo de errores al llamar al API (este error es generado de manera aleatoria).
  - Implementaci贸n de Pull to Refresh (deslizamiento hacia abajo para realizar actualizaci贸n y re llamar a los servicios del inicio).
  - Pantalla que indica la carga de informaci贸n (loading)
- Pantalla de Error
  - Implementaci贸n de pantalla de error con bot贸n reintentar.
- Detalle de Restaurant
  - Vista de informaci贸n b谩sica de Restaurant seleccionado previamente en la pantalla principal.
- Agregar direcci贸n de entrega
  - Formulario de ingreso de direcci贸n manual o con geolocalizaci贸n usando lo servicios de Google Places.
  - Uso de Google Maps para mostrar ubicaci贸n seleccionada desde el input de ingreso de direcci贸n.
  - Formulario para a帽adir informaci贸n adicional a la direcci贸n de entrega.
  - Guardado de informaci贸n en Storage del dispositivo.

### Caracter铆sticas 馃敡

- Icono Launcher + Splash Screen includos
- Mocking de servicios con [MirageJs](https://miragejs.com/) (simulaci贸n de llamada de API real)
- Llamado de servicios con [Axios](https://axios-http.com/docs/intro)
  - Uso de interceptor en llamadas con axios
- Uso de redux con [Redux Toolkit](https://redux-toolkit.js.org/)
- Uso de animaci贸n con [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- Uso de [Formik](https://formik.org/docs/guides/react-native) (creaci贸n y manejo de formularios con validaciones con [Yup](https://formik.org/docs/guides/validation))
- Uso de storage con [Async Storage](https://react-native-async-storage.github.io/async-storage/) para la persistencia de datos en el dispositivo.
- Uso de [Google Maps](https://github.com/react-native-maps/react-native-maps)
  - Uso de [Buscador de direcciones + geolocalizaci贸n](https://github.com/FaridSafi/react-native-google-places-autocomplete)
    - Uso de Geolocalizaci贸n para obtener ubicaci贸n del usuario y marcarlo en Google Maps
    - Ingreso manual de la direcci贸n para posicionarla en el mapa
- Uso de librer铆a de componentes [React Native Paper](https://reactnativepaper.com/)
- Uso de internacionalizaci贸n con [i18next](https://www.i18next.com/)
  - Lenguajes configurados:
    - Espa帽ol
    - Ingl茅s

## Comenzando 馃殌

Una vez clonado el proyecto se deben seguir las instrucciones referenciadas a continuaci贸n. Estas instrucciones permitir谩n tener el proyecto en funcionamiento en su m谩quina local para prop贸sitos de desarrollo y pruebas.

### Pre-requisitos 馃搵

1. Seguir estrictamente las instrucciones detalladas en el sitio oficial de [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) seg煤n el sistema operativo que est茅s utilizando y qu茅 dispositivo usar谩s para fines de ejecutar la aplicaci贸n.vAqu铆 encontrar谩s informaci贸n de qu茅 elementos debes instalar en tu S.O para tener el ambiente listo para React Native.

> NOTA: Este proyecto fue realizado mediante `React Native CLI`.

### Instalaci贸n / Modo de uso 馃敡

En la raiz del proyecto ejecutar las siguientes lineas de comando:

1. Instalaci贸n de paquetes

   ```bash
   npm install
   ```

2. iOS: Instalaci贸n de pods (s贸lo si est谩s en Mac y ejecutar谩s la app para iOS)

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

5. Android: Generar APK para pruebas en dispositivos f铆sicos

   ```bash
   npm run build_apk
   ```

   Una vez termine el proceso de compilaci贸n, podr谩s encontrar el apk en la siguiente ruta `android/app/build/outputs/apk/debug/app-debug.apk`

6. Debbug con Flipper

   Una vez haya levantado la aplicaci贸n, ya puedes abrir el debbuger Flipper para comenzar a inspeccionar la aplicaci贸n.

### Debug con Flipper 馃敡

Este proyecto cuenta con completa compatibilidad con el debugger Flipper. Para descargarlo puedes hacerlo mediante el siguiente [enlace](https://fbflipper.com/docs/features/react-native/).
En 茅l podr谩s inspeccionar los cambios de estado en redux, llamadas de servicio, logs, y realizar debug en los archivos en tiempo real con Hermes Debugger permitiendo poner breakpoints en los fuentes y ver con mejor detenimiento el flujo de la informaci贸n.

## Estructura de proyecto 馃搵

La estructura del proyecto se define de la siguiente forma

- ios: Proyecto nativo iOS generado por React Native
- android: Proyecto nativo Android generado por React Native
- src:
  - assets: Incluye todos los recursos visuales
    - fonts
    - icons
    - images
    - styles
  - components: Componentes transversales en la aplicaci贸n que se puedan reutilizar
  - config: Elementos de configuraci贸n del proyecto
  - helpers: Funciones utilitarias
  - hooks: Hooks o funcionalidades personalizadas para utilizar en react
  - i18n: Archivos de internacionalizaci贸n
  - models: Interfaces de modelo de datos usados para el transporte de informaci贸n en la aplicaci贸n
  - navigation: Stacks de navegaci贸n donde se declaran los routes de la app
  - screens: Pantallas/Escenas de la aplicaci贸n
  - server: Servicio Mock con MirageJs para API Rest
  - services: Archivos de conexiones a servicios externos
  - storage: Funciones de guardado de informaci贸n en el dispositivo
  - store: Configuraci贸n de manejo de estados de la aplicaci贸n

## Autor 鉁掞笍

- [**Jonathan Gallegos**](https://github.com/PacificSIlent)
