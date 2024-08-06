// Dados fictícios (substitua pelos seus próprios dados)
const data = [
    { label: "Eve", value: 10 },
    { label: "Cain", value: 14 },
    // ... outros dados ...
];

// Tamanho do canvas
const canvas = document.getElementById("treemapCanvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Calcula o tamanho dos retângulos com base nos valores
function calculateRectangles(data) {
    const totalValue = data.reduce((sum, item) => sum + item.value, 0);

    return data.map(item => ({
        label: item.label,
        width: (item.value / totalValue) * canvasWidth,
        height: (item.value / totalValue) * canvasHeight,
    }));
}

// Desenha os retângulos no canvas
function drawRectangles(rectangles) {
    let x = 0;
    let y = 0;

    rectangles.forEach(rect => {
        ctx.fillStyle = "#377eb8"; // Cor dos retângulos (pode personalizar)
        ctx.fillRect(x, y, rect.width, rect.height);

        // Atualiza a posição para o próximo retângulo
        x += rect.width;
        if (x >= canvasWidth) {
            x = 0;
            y += rect.height;
        }
    });
}

// Chama as funções para criar o treemap
const rectangles = calculateRectangles(data);
drawRectangles(rectangles);
