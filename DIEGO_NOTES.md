# Decisiones tomadas

- Se ha usado la versión node v16.20.2 y npm 8.19.4 ya que el proyecto requería una versión antigua de node y he optado por no complicarme actualizando dependencias. Esto aplica también para el warning de sass que sale al arrancar el proyecto.
- Lo he convertido a Typescript ya que era rápido y sencillo y eso me hace ser más ágil en el desarrollo.
- He trabajado con Redux, pero no con MobX, que lo conocía sólo de oídas. Me ha gustado mucho cómo funciona, pero es posible que haya cometido algún error de principiante ya que la documentación la he leído en diagonal.
- He trabajado con ramas de git pero no las he borrado para dejar constancia de ellas al ser una prueba técnica..
- Para seleccionar varias cajas hay que pulsar la tecla Ctrl. Sin entrar a replicar exactamente Genially y por simplicidad me he tomado alguna licencia para conseguir un efecto parecido, simple y cómodo.
- No me siento orgulloso de la forma que he implementado `undoManager`, pero bueno, _funciona_. Los dos `any` que he puesto no los dejaría así en un proyecto real, pero revisé la documentación y no encontré bien cómo tiparlos. Que fuera una versión tan antigua quizás tampoco ayuda.
- Ya que la prueba no hacía hincapié en el diseño sólo he añadido scss modules sin ninguna sobreingeniería más. Por ejemplo, podría haber creado un tema básico con tokens de diseño en lugar de tener valores aleatorios desperdigados por los estilos que complicaría mucho el mantenimiento de una aplicación real.
- Normalmente tanto componentes como hooks o librerías tendrían su propia carpeta en la que incluiría los test, el `*.module.scss`, etc., pero por no destrozar la base del proyecto que se suministraba los he dejado planos dentro de sus respectivas categorías.
- En la prueba no se pedían test. Yo solamente los he habilitado para probar el hook `useKeyCombination` ya que me facilitaba mucho el desarrollo.

# Highlights

- Funciona todo lo solicitado en la prueba.
- ¡Un montón de combinaciones de teclas\!
- Tiene un minitutorial de combinaciones de teclas por si no estás leyendo esto.
- Está online en https://diegosanz.github.io/frontend-code-test/
