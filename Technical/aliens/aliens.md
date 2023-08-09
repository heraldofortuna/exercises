[Input](https://gist.github.com/cococov/9c3bad3ad672186fa6a674d040f44c5c)

## Parte 1

Unos aliens llegaron a la tierra y no pensamos que fuese un problema, pero luego de un tiempo hemos notado que su población no para de crecer y nos estamos preocupando.

Unos científicos notaron que un alien adulto tarda 7 días en dar a luz a otro alien y que un alien recién nacido alcanza la adultez en 2 días.

Los aliens no están necesariamente sincronizados entre sí, por lo que a un alien le podría quedar 2 días para dar a luz y a otro 4.

Por lo que si tenemos un alien con un contador interno de 3:

- Luego de un día será 2.
- Luego de otro día será 1.
- Luego de otro día será 0.
- Luego de otro día será 6 nuevamente y habrá nacido otro alien nuevo con un contador en 8.
- Luego de otro día el contador será 5 y el contador del alien nuevo será 7.

Como se pudo ver un alien adulto reinicia su contador a 6, mientras que un alien recién nacido parte en 8. También tener en cuenta que se usó 6 y 8 en vez de 7 y 9 porque se cuenta el 0.

Entonces si tenemos un estado inicial de 5 aliens:

```
3,4,3,1,2
```

Luego de 18 días tendremos una iteración como la siguiente:

```
Initial state: 3,4,3,1,2
Luego de  1 día:  2,3,2,0,1
Luego de  2 días: 1,2,1,6,0,8
Luego de  3 días: 0,1,0,5,6,7,8
Luego de  4 días: 6,0,6,4,5,6,7,8,8
Luego de  5 días: 5,6,5,3,4,5,6,7,7,8
Luego de  6 días: 4,5,4,2,3,4,5,6,6,7
Luego de  7 días: 3,4,3,1,2,3,4,5,5,6
Luego de  8 días: 2,3,2,0,1,2,3,4,4,5
Luego de  9 días: 1,2,1,6,0,1,2,3,3,4,8
Luego de 10 días: 0,1,0,5,6,0,1,2,2,3,7,8
Luego de 11 días: 6,0,6,4,5,6,0,1,1,2,6,7,8,8,8
Luego de 12 días: 5,6,5,3,4,5,6,0,0,1,5,6,7,7,7,8,8
Luego de 13 días: 4,5,4,2,3,4,5,6,6,0,4,5,6,6,6,7,7,8,8
Luego de 14 días: 3,4,3,1,2,3,4,5,5,6,3,4,5,5,5,6,6,7,7,8
Luego de 15 días: 2,3,2,0,1,2,3,4,4,5,2,3,4,4,4,5,5,6,6,7
Luego de 16 días: 1,2,1,6,0,1,2,3,3,4,1,2,3,3,3,4,4,5,5,6,8
Luego de 17 días: 0,1,0,5,6,0,1,2,2,3,0,1,2,2,2,3,3,4,4,5,7,8
Luego de 18 días: 6,0,6,4,5,6,0,1,1,2,6,0,1,1,1,2,2,3,3,4,6,7,8,8,8,8
```

En el día 18 tenemos un total de 26 aliens, y luego de 80 días tendríamos un total de 5934 aliens.

**¿Cuantos aliens tendríamos en el planeta luego de 80 días?**

## Parte 2

Creemos que aun no es preocupante, pero viendo que estos aliens no necesitan comer y por el momento no mueren, queremos saber cuantos habría luego de un periodo de tiempo más largo.

**¿Cuantos aliens tendríamos en el planeta luego de 256 días?**