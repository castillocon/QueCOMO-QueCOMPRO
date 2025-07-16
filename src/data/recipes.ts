import { Recipe } from "@/types";

export const mockRecipes: Recipe[] = [
  {
    id: "rec-1",
    name: "Ensalada César con Pollo",
    description: "Una clásica ensalada César con pechuga de pollo a la parrilla.",
    ingredients: [
      { name: "Pechuga de pollo", quantity: "200g" },
      { name: "Lechuga romana", quantity: "1 cabeza" },
      { name: "Crutones", quantity: "1 taza" },
      { name: "Queso parmesano", quantity: "50g" },
      { name: "Aderezo César", quantity: "4 cucharadas" },
    ],
    instructions: [
      "Cocinar la pechuga de pollo a la parrilla y cortarla en tiras.",
      "Lavar y picar la lechuga romana.",
      "Mezclar la lechuga, el pollo, los crutones y el queso parmesano en un bol grande.",
      "Añadir el aderezo César y mezclar bien.",
      "Servir inmediatamente."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "rec-2",
    name: "Salmón al Horno con Espárragos",
    description: "Salmón jugoso al horno con espárragos tiernos.",
    ingredients: [
      { name: "Filete de salmón", quantity: "150g" },
      { name: "Espárragos", quantity: "1 manojo" },
      { name: "Aceite de oliva", quantity: "1 cucharada" },
      { name: "Limón", quantity: "1/2 unidad" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Precalentar el horno a 200°C (400°F).",
      "Colocar el salmón y los espárragos en una bandeja para hornear.",
      "Rociar con aceite de oliva, salpimentar y exprimir el jugo de limón por encima.",
      "Hornear durante 12-15 minutos, o hasta que el salmón esté cocido y los espárragos tiernos.",
      "Servir caliente."
    ],
    mealtype: "Cena",
  },
  {
    id: "rec-3",
    name: "Batido de Frutas y Yogur",
    description: "Un batido refrescante y nutritivo para el desayuno.",
    ingredients: [
      { name: "Yogur natural", quantity: "1 taza" },
      { name: "Frutas mixtas (fresas, plátano, arándanos)", quantity: "1 taza" },
      { name: "Leche", quantity: "1/2 taza" },
      { name: "Miel", quantity: "1 cucharada (opcional)" },
    ],
    instructions: [
      "Combinar todos los ingredientes en una licuadora.",
      "Licuar hasta obtener una mezcla suave y homogénea.",
      "Servir frío."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "rec-4",
    name: "Tostadas de Aguacate y Huevo",
    description: "Un desayuno o merienda saludable y fácil de preparar.",
    ingredients: [
      { name: "Pan integral", quantity: "2 rebanadas" },
      { name: "Aguacate", quantity: "1/2 unidad" },
      { name: "Huevo", quantity: "1 unidad" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
      { name: "Chile en hojuelas", quantity: "una pizca (opcional)" },
    ],
    instructions: [
      "Tostar el pan.",
      "Hacer un huevo frito o escalfado.",
      "Machacar el aguacate y untarlo sobre las tostadas.",
      "Colocar el huevo encima del aguacate.",
      "Sazonar con sal, pimienta y chile en hojuelas si se desea.",
      "Servir inmediatamente."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "rec-5",
    name: "Sopa de Lentejas",
    description: "Una sopa reconfortante y nutritiva, perfecta para el almuerzo.",
    ingredients: [
      { name: "Lentejas", quantity: "1 taza" },
      { name: "Zanahoria", quantity: "1 unidad" },
      { name: "Apio", quantity: "1 tallo" },
      { name: "Cebolla", quantity: "1/2 unidad" },
      { name: "Ajo", quantity: "2 dientes" },
      { name: "Caldo de verduras", quantity: "4 tazas" },
      { name: "Tomate triturado", quantity: "1/2 taza" },
      { name: "Aceite de oliva", quantity: "1 cucharada" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Lavar las lentejas.",
      "Picar finamente la zanahoria, el apio, la cebolla y el ajo.",
      "En una olla grande, calentar el aceite de oliva y sofreír las verduras picadas hasta que estén tiernas.",
      "Añadir las lentejas, el caldo de verduras y el tomate triturado.",
      "Llevar a ebullición, luego reducir el fuego y cocinar a fuego lento durante 25-30 minutos, o hasta que las lentejas estén tiernas.",
      "Sazonar con sal y pimienta al gusto.",
      "Servir caliente."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "rec-6",
    name: "Pasta con Pesto y Tomates Cherry",
    description: "Una comida rápida y sabrosa con pasta, pesto y tomates frescos.",
    ingredients: [
      { name: "Pasta (espagueti, fusilli)", quantity: "200g" },
      { name: "Pesto", quantity: "4 cucharadas" },
      { name: "Tomates cherry", quantity: "1 taza" },
      { name: "Piñones", quantity: "2 cucharadas (tostados)" },
      { name: "Albahaca fresca", quantity: "unas hojas" },
      { name: "Aceite de oliva", quantity: "1 cucharada" },
      { name: "Sal", quantity: "al gusto" },
    ],
    instructions: [
      "Cocinar la pasta según las instrucciones del paquete.",
      "Mientras la pasta se cocina, cortar los tomates cherry por la mitad.",
      "Escurrir la pasta y volver a ponerla en la olla.",
      "Añadir el pesto, los tomates cherry y un chorrito de aceite de oliva. Mezclar bien.",
      "Servir con piñones tostados y hojas de albahaca fresca."
    ],
    mealtype: "Cena",
  },
  {
    id: "rec-7",
    name: "Yogur con Granola y Frutas",
    description: "Un desayuno o merienda rápida y saludable.",
    ingredients: [
      { name: "Yogur griego", quantity: "1 taza" },
      { name: "Granola", quantity: "1/2 taza" },
      { name: "Frutas frescas (bayas, plátano)", quantity: "1/2 taza" },
      { name: "Miel", quantity: "1 cucharadita (opcional)" },
    ],
    instructions: [
      "En un bol, combinar el yogur, la granola y las frutas frescas.",
      "Rociar con miel si se desea.",
      "Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "rec-8",
    name: "Wrap de Pollo y Verduras",
    description: "Un wrap ligero y lleno de sabor, ideal para el almuerzo o una merienda sustanciosa.",
    ingredients: [
      { name: "Tortilla de trigo", quantity: "1 unidad" },
      { name: "Pechuga de pollo cocida y desmenuzada", quantity: "100g" },
      { name: "Lechuga", quantity: "1 hoja" },
      { name: "Tomate", quantity: "1/2 unidad (en rodajas)" },
      { name: "Pepino", quantity: "1/4 unidad (en tiras)" },
      { name: "Hummus", quantity: "2 cucharadas" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Extender la tortilla de trigo.",
      "Untar el hummus sobre la tortilla.",
      "Colocar la lechuga, el pollo desmenuzado, las rodajas de tomate y las tiras de pepino.",
      "Sazonar con sal y pimienta.",
      "Enrollar la tortilla firmemente.",
      "Cortar por la mitad y servir."
    ],
    mealtype: "Almuerzo",
  },
];