/* function calcularVelocidad() {
    const distancia = 10
    const tiempo = 2
    const velocidad = distancia / tiempo;
    alert("La velocidad del móvil es " + velocidad);
    }

calcularVelocidad();
calcularVelocidad();
calcularVelocidad(); */

const calcularVelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
        return velocidad
    }

    const velocidad1 = calcularVelocidad(10, 3);
    console.log("La velocidad de Manuel es " + velocidad1);

    const velocidad2 = calcularVelocidad(30, 15);
    console.log("La velocidad de Flor es " + velocidad2);

    const velocidad3 = calcularVelocidad(60, 20);
    console.log("La velocidad de Celestino es " + velocidad3);
