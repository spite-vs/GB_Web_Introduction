cels = parseFloat(prompt('Введите температуру в градусах Цельсия: '));
alert(`градусов по Цельсий: ${cels.toFixed(2)}°C\nградусов по Фаренгейту: ${(cels * 9 / 5 + 32).toFixed(2)}°F`);