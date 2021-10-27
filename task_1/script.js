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


// function matrixSpiral(w, h, innerWidth, innerHeight, direction) {
//   return Array.from(new Array(w), (value, wIndex) => {
//       return Array.from(new Array(h),(value, hIndex) => {
//         return hIndex + 1 + wIndex * h;
//       }) 
//     }



function matrix(width, height, innerHeight, innerWidth) {
    let matrix = [];
    let q = 1
   for( let i = 0; i < height; i++) {
        matrix[i] = [];
        for (let j =0; j < width; j++) {
            matrix[i][j]= q++
        }
    }
   let newA = [];
   let startCol = 0;
   let startRow = 0;
   let endCol = width - 1;
   let endRow = height - 1;
   let innerRow = innerHeight - 1;
   let innerCol = innerWidth - 1;
   while (startCol <= endCol && startRow <= endRow) {
       for(let i = innerCol; i >= startCol; i--) {  // start from 17 to 16
           newA.push(matrix[innerRow][i]);
       }
       innerRow-- 
       for(let i = startCol; i <= innerCol; i++) { //start from 11 to 12
           newA.push(matrix[innerRow][i]);
       }
       innerCol++  
       for(let j = innerRow; j <= innerHeight; j++) { //start  from 13 to 18
           newA.push(matrix[j][innerCol]);
       } 
       innerCol--; 
       for(let i = innerCol; i >= startCol; i--) { //18 to 23
           newA.push(matrix[innerHeight][i]);
       }
       innerRow--;
       innerCol++;
       
       for(let i = startCol; i <= innerCol; i++) {
           newA.push(matrix[innerRow][i]);
       }
       innerCol++;
       for(let j = innerRow; j <= endRow; j++) {
           newA.push(matrix[j][innerCol]);
       }
       innerCol--;
       for(let i = innerCol; i >= startCol; i--) {
           newA.push(matrix[endRow][i])
       }
       for(i=startCol; i<= endCol; i++) {
           newA.push(matrix[startRow][i]);
       } 
       startRow++;
       for(let j = startRow; j <= endRow; j++) {
           newA.push(matrix[j][endCol]);
       } 
       return newA;
   }
}
console.log(matrix(5,6,4,2));

