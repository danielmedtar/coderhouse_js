let productos = [
    {id: 1, nombre: "lenovo14", tipo: "Notebooks", marca: "lenovo", desc: "LENOVO 14 Intel", precio: 60000, img: 'img/pc1.lenovo-14-intel.webp'},
    {id: 2, nombre: "lenovoPad", tipo: "Notebooks", marca: "lenovo", desc: "LENOVO IDEA PAD 3", precio: 80000, img: 'img/pc2.lenovo-ideapad-3.webp'},
    {id: 3, nombre: "lenovoP15", tipo: "Notebooks", marca: "lenovo", desc: "Lenovo P15", precio: 50000, img: 'img/pc3.lenovo-p15.webp'},
    {id: 4, nombre: "estudio", tipo: "Notebooks", marca: "cx", desc: "CX PC ESTUDIO A3000. AMD", precio: 120000, img: 'img/pc4.compu_escritorio1.jpg'},
    {id: 5, nombre: "comboJ7", tipo: "Notebooks", marca: "exo", desc: "EXO COMBO READY J7-V1345Y", precio: 110000, img: 'img/pc5.compu_escritorio2.jpg'},
    {id: 6, nombre: "allInOne", tipo: "Notebooks", marca: "hp", desc: "HP All in One 20-c307la", precio: 75000, img: 'img/pc6.compu_escritorio3.jpg'},
    {id: 7, nombre: "javascript", tipo: "Remeras", marca: "dev", desc: "JAVASCRIPT", precio: 3500, img: 'img/remera1.jpg'},
    {id: 8, nombre: "html", tipo: "Remeras", marca: "dev", desc: "HTML", precio: 2000, img: 'img/remera2.jpg'},
    {id: 9, nombre: "sass", tipo: "Remeras", marca: "dev", desc: "SASS", precio: 2500, img: 'img/remera3.jpg'},
    {id: 10, nombre: "angular", tipo: "Remeras", marca: "dev", desc: "ANGULAR", precio: 3000, img: 'img/remera4.jpg'},
    {id: 11, nombre: "node", tipo: "Remeras", marca: "dev", desc: "NODE.JS", precio: 1500, img: 'img/remera5.jpg'},
    {id: 12, nombre: "github", tipo: "Remeras", marca: "dev", desc: "GITHUB", precio: 4000, img: 'img/remera6.jpg'}
]





//     {id: 2, nombre: "Buzo 2", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1100, talle: "L", img: 'img/buzo.jpg'},
//     {id: 3, nombre: "Buzo 3", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1200, talle: "M", img: 'img/buzo.jpg'},
//     {id: 4, nombre: "Buzo 4", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1400, talle: "M", img: 'img/buzo.jpg'},
//     {id: 5, nombre: "Buzo 5", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1200, talle: "S", img: 'img/buzo.jpg'},
//     {id: 6, nombre: "Buzo 6", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1500, talle: "S", img: 'img/buzo.jpg'},
//     {id: 7, nombre: "Remera 1", tipo: "remera", desc: "Una remera que re va con vos", precio: 500, talle: "L", img: 'img/remera.jpg'},
//     {id: 8, nombre: "Remera 2", tipo: "remera", desc: "Una remera que re va con vos", precio: 500, talle: "L", img: 'img/remera.jpg'},
//     {id: 9, nombre: "Remera 3", tipo: "remera", desc: "Una remera que re va con vos", precio: 500, talle: "M", img: 'img/remera.jpg'},
//     {id: 10, nombre: "Remera 4", tipo: "remera", desc: "Una remera que re va con vos", precio: 700, talle: "M", img: 'img/remera.jpg'},
//     {id: 11, nombre: "Remera 5", tipo: "remera", desc: "Una remera que re va con vos", precio: 700, talle: "S", img: 'img/remera.jpg'},
//     {id: 12, nombre: "Remera 6", tipo: "remera", desc: "Una remera que re va con vos", precio: 700, talle: "S", img: 'img/remera.jpg'},
//     {id: 13, nombre: "Camisa 1", tipo: "camisa", desc: "Una camisa que re va con vos", precio: 900, talle: "L", img: 'img/camisa.jpg'},
//     {id: 14, nombre: "Camisa 2", tipo: "camisa", desc: "Una camisa que re va con vos", precio: 1400, talle: "S", img: 'img/camisa.jpg'},
//     {id: 15, nombre: "Camisa 3", tipo: "camisa", desc: "Una camisa que re va con vos", precio: 7000, talle: "L", img: 'img/camisa.jpg'},
//     {id: 16, nombre: "Camisa 4", tipo: "camisa", desc: "Una camisa que re va con vos", precio: 777, talle: "S", img: 'img/camisa.jpg'},
//     {id: 17, nombre: "Camisa 5", tipo: "camisa", desc: "Una camisa que re va con vos", precio: 234, talle: "S", img: 'img/camisa.jpg'},
//     {id: 18, nombre: "Camisa 6", tipo: "camisa", desc: "Una camisa que re va con vos", precio: 155600, talle: "M", img: 'img/camisa.jpg'},
//     {id: 19, nombre: "Pantalon 1", tipo: "pantalon", desc: "Una pantalon que re va con vos", precio: 1600, talle: "L", img: 'img/pantalon.jpg'},
//     {id: 20, nombre: "Pantalon 2", tipo: "pantalon", desc: "Una pantalon que re va con vos", precio: 3200, talle: "L", img: 'img/pantalon.jpg'},
//     {id: 21, nombre: "Pantalon 3", tipo: "pantalon", desc: "Una pantalon que re va con vos", precio: 2300, talle: "M", img: 'img/pantalon.jpg'},
//     {id: 22, nombre: "Pantalon 4", tipo: "pantalon", desc: "Una pantalon que re va con vos", precio: 5600, talle: "M", img: 'img/pantalon.jpg'},
//     {id: 23, nombre: "Pantalon 5", tipo: "pantalon", desc: "Una pantalon que re va con vos", precio: 1700, talle: "S", img: 'img/pantalon.jpg'},
//     {id: 24, nombre: "Pantalon 6", tipo: "pantalon", desc: "Una pantalon que re va con vos", precio: 800, talle: "S", img: 'img/pantalon.jpg'},
// ]








// let productos = [
//   {
//       producto: "notebooks",
//       precio: 100000
//     },
//     {
//       producto: "remeras",
//       precio: 2000
//     }
//   ]