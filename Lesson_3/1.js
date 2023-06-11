const cels = parseFloat(prompt('Введите температуру в градусах Цельсия: '));
const fahr = cels * 9 / 5 + 32;
alert(`градусов по Цельсий: ${cels.toFixed(2)}°C\nградусов по Фаренгейту: ${fahr.toFixed(2)}°F`);