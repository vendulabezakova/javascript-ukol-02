 /*Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů. Při objednávce pod 50 kusů stojí jedno tričko 300 Kč. Pokud si objednáme alespoň 50 kusů, je cena 250 Kč za kus. Při objednávce nad 200 kusů je cena 200 Kč za tričko. Nad 500 kusů zaplatíme 150 Kč za tričko a nad 1000 kusů zaplatíme 120 korun za tričko.

Napište stránku, která od uživatele obdrží počet kusů, které si chce objednat, a program odpoví celkovou ceny objednávky výpisem do stránky. */

const count =  Number(prompt("Požadovaný počet kusů:"))


if(count < 50) {
    price = 300
} else if(count >= 50 && count < 200) {
    price = 250
} else if(count >= 200 && count < 500) {
    price = 200
} else if (count >= 500 && count < 1000) {
    price = 150
} else {
    price = 120
}

document.body.innerHTML = `
<p style="font-size:32px">Objednáváte ${count} kusů triček. Zaplatíte ${price*count} Kč. Jeden kus vás vyjde na ${price} Kč.</p>
`