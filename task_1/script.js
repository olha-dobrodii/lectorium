/* тестовое задание: обход 2-х мерного массива по спирали. функция должна принимать в себя 5 параметров(мерность массива, 
    точку старта, направление первого шага) то есть к примеру: someFunction = (5, 6, 2, 4, left) => {
...........
}
5,6 => 2-х мерный массив 5 столбиков по 6 элементов. заполняется по строчно
2, 4 => точка старта (2 столбик, 4-строка)
направление обхода массива - по часовой стрелке (кто хочет - можете сделать и против часовой)
1.2.3.4.5
6.7.8.9.10
11.12.13.14.15
16.17.18.19.20
21.22.23.24.25
26.27.28.29.30
Вывод: 17.16.11.12.13.18.23.22.21.6.7.8.9.14.19.24.29.28.27.26.1.2.3.4.5.10.15.20.25.30 - по часовой
Вывод: 17.16.21.22.23.18.13.12.11.26.27.28.29.24.19.14.9.8.7.6.30.25.20.16.10.5.4.3.2.1 - против часовой
срок на выполнение: 10 дней. Буду смотреть по вашим комитам в Гите */

const w = 1;
const h = 5;

//const wi = 0-2;
//const hi = 0-4;
//const d = 1 || -1
//d = w % 2 === 0 ? 1:-1


 function matrix(w, h) {
     return Array.from(new Array(w), (value, wIndex) =>
       Array.from(new Array(h), (value, hIndex) => hIndex + 1 + wIndex * h) 
     );
    }
    console.log(matrix(w, h).reverse());

