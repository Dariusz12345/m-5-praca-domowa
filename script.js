// Funkcja przyjmująca tablicę liczb i zwracająca nową tablicę z podwojonymi wartościami
const podwojLiczby = (liczby) => liczby.map(liczba => liczba * 2);

// Przykładowa tablica liczb
const liczby = [1, 2, 3, 4, 5];

// Wywołanie funkcji i przypisanie wyniku do nowej zmiennej
const podwojoneLiczby = podwojLiczby(liczby);

// Wyświetlenie oryginalnej i nowej tablicy w konsoli
console.log("Oryginalna tablica:", liczby);
console.log("Podwojona tablica:", podwojoneLiczby);




// Funkcja przyjmująca tablicę obiektów studentów i zwracająca tablicę ich imion
const imionaStudentow = (studenci) => studenci.map(student => student.name);

// Przykładowa tablica obiektów studentów
const studenci = [
    { name: "Jan", age: 20 },
    { name: "Anna", age: 22 },
    { name: "Piotr", age: 19 }
];

// Wywołanie funkcji i przypisanie wyniku do nowej zmiennej
const imiona = imionaStudentow(studenci);

// Wyświetlenie oryginalnej tablicy studentów i tablicy imion w konsoli
console.log("Oryginalna tablica studentów:", studenci);
console.log("Tablica imion studentów:", imiona);