import { Recipe } from "@/types";

export const breakfastRecipes: Recipe[] = [
  {
    id: "pre-4",
    name: "Smoothie Verde Energizante",
    description: "Un batido refrescante y lleno de nutrientes, perfecto para un desayuno rápido o merienda.",
    ingredients: [
      { name: "Espinacas frescas", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Plátano", quantity: "1 unidad (congelado)", supplier: "Frutería" },
      { name: "Mango", quantity: "1/2 taza (congelado)", supplier: "Frutería" },
      { name: "Leche de almendras", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Semillas de chía", quantity: "1 cucharada", supplier: "Tienda Saludable" },
      { name: "Miel o sirope de arce", quantity: "1 cucharadita (opcional)" },
    ],
    instructions: [
      "Combinar todos los ingredientes en una licuadora.",
      "Licuar hasta obtener una mezcla suave y homogénea.",
      "Servir inmediatamente."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-10",
    name: "Desayuno Inglés Completo",
    description: "Un desayuno sustancioso con huevos, salchichas, tocino, frijoles y tostadas.",
    ingredients: [
      { name: "Huevos", quantity: "2 unidades", supplier: "Granja Local" },
      { name: "Salchichas de desayuno", quantity: "2 unidades", supplier: "Carnicería Local" },
      { name: "Tocino (bacon)", quantity: "2 tiras", supplier: "Carnicería Local" },
      { name: "Frijoles horneados", quantity: "1/2 lata", supplier: "Supermercado A" },
      { name: "Pan de molde", quantity: "2 rebanadas", supplier: "Panadería Local" },
      { name: "Mantequilla", quantity: "al gusto", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Cocinar las salchichas en una sartén a fuego medio hasta que estén doradas y cocidas. Retirar y reservar.",
      "En la misma sartén, cocinar el tocino hasta que esté crujiente. Retirar y reservar.",
      "Freír o escalfar los huevos al gusto en la misma sartén.",
      "Calentar los frijoles horneados en una cacerola pequeña o en el microondas.",
      "Tostar el pan y untar con mantequilla.",
      "Servir todo junto en un plato grande."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-11",
    name: "Avena Cremosa con Frutas y Nueces",
    description: "Un desayuno caliente y reconfortante, lleno de fibra y energía.",
    ingredients: [
      { name: "Avena en hojuelas", quantity: "1/2 taza", supplier: "Tienda Saludable" },
      { name: "Agua o leche (vegetal)", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Frutas frescas (ej. bayas, plátano)", quantity: "1/2 taza", supplier: "Frutería" },
      { name: "Nueces o semillas (ej. chía, linaza)", quantity: "1 cucharada", supplier: "Tienda Saludable" },
      { name: "Miel o sirope de arce", quantity: "1 cucharadita (opcional)" },
    ],
    instructions: [
      "En una olla pequeña, combinar la avena y el agua/leche. Llevar a ebullición, luego reducir el fuego y cocinar a fuego lento durante 5-7 minutos, revolviendo ocasionalmente, hasta que espese.",
      "Verter la avena en un bol.",
      "Decorar con frutas frescas, nueces/semillas y un chorrito de miel si se desea.",
      "Servir caliente."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-12",
    name: "Huevos Revueltos con Espinacas y Queso",
    description: "Un desayuno rápido y rico en proteínas, ideal para empezar el día.",
    ingredients: [
      { name: "Huevos", quantity: "2 unidades", supplier: "Granja Local" },
      { name: "Espinacas frescas", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Queso rallado (opcional)", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Aceite de oliva o mantequilla", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol, batir los huevos con sal y pimienta.",
      "Calentar el aceite/mantequilla en una sartén a fuego medio.",
      "Añadir las espinacas y cocinar hasta que se marchiten.",
      "Verter los huevos batidos sobre las espinacas. Cocinar, revolviendo suavemente, hasta que los huevos estén casi cocidos.",
      "Si se usa, espolvorear el queso y cocinar por un minuto más hasta que se derrita.",
      "Servir inmediatamente."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-13",
    name: "Batido de Plátano y Mantequilla de Cacahuete",
    description: "Un batido cremoso y energético, perfecto para un desayuno rápido o post-entrenamiento.",
    ingredients: [
      { name: "Plátano", quantity: "1 unidad (congelado)", supplier: "Frutería" },
      { name: "Leche (o bebida vegetal)", quantity: "1 taza", supplier: "Supermercado B" },
      { name: "Mantequilla de cacahuete", quantity: "1 cucharada", supplier: "Tienda Saludable" },
      { name: "Cacao en polvo (opcional)", quantity: "1 cucharadita", supplier: "Supermercado B" },
    ],
    instructions: [
      "Combinar todos los ingredientes en una licuadora.",
      "Licuar hasta obtener una mezcla suave y homogénea.",
      "Servir frío."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-14",
    name: "Tostadas Francesas de Avena",
    description: "Una versión más saludable de las tostadas francesas, con avena para mayor fibra.",
    ingredients: [
      { name: "Pan integral", quantity: "2 rebanadas", supplier: "Panadería Local" },
      { name: "Huevo", quantity: "1 unidad", supplier: "Granja Local" },
      { name: "Leche", quantity: "1/4 taza", supplier: "Supermercado A" },
      { name: "Avena molida (o harina de avena)", quantity: "2 cucharadas", supplier: "Tienda Saludable" },
      { name: "Canela", quantity: "1/4 cucharadita", supplier: "Tienda de Especias" },
      { name: "Aceite o mantequilla", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Frutas y sirope (para servir)", quantity: "al gusto" },
    ],
    instructions: [
      "En un plato hondo, batir el huevo, la leche, la avena molida y la canela.",
      "Remojar cada rebanada de pan en la mezcla, asegurándose de que esté bien cubierta.",
      "Calentar el aceite/mantequilla en una sartén a fuego medio.",
      "Cocinar las tostadas hasta que estén doradas por ambos lados.",
      "Servir con frutas frescas y un chorrito de sirope."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-15",
    name: "Pudín de Chía con Frutas",
    description: "Un desayuno fácil de preparar la noche anterior, nutritivo y refrescante.",
    ingredients: [
      { name: "Semillas de chía", quantity: "3 cucharadas", supplier: "Tienda Saludable" },
      { name: "Leche (o bebida vegetal)", quantity: "1 taza", supplier: "Supermercado B" },
      { name: "Miel o sirope de arce", quantity: "1 cucharadita (opcional)" },
      { name: "Frutas frescas (ej. mango, bayas)", quantity: "1/2 taza", supplier: "Frutería" },
    ],
    instructions: [
      "En un frasco o bol, combinar las semillas de chía, la leche y la miel/sirope. Mezclar bien.",
      "Tapar y refrigerar durante al menos 4 horas o toda la noche, revolviendo una vez después de 15 minutos para evitar grumos.",
      "Por la mañana, añadir las frutas frescas por encima.",
      "Servir frío."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-16",
    name: "Tortilla de Verduras Individual",
    description: "Una tortilla rápida y personalizable, perfecta para un desayuno salado.",
    ingredients: [
      { name: "Huevos", quantity: "2 unidades", supplier: "Granja Local" },
      { name: "Pimiento (picado)", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Cebolla (picada)", quantity: "1 cucharada", supplier: "Mercado Local" },
      { name: "Champiñones (en rodajas)", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol, batir los huevos con sal y pimienta.",
      "Calentar el aceite en una sartén antiadherente a fuego medio.",
      "Añadir el pimiento, la cebolla y los champiñones. Cocinar hasta que estén tiernos.",
      "Verter los huevos batidos sobre las espinacas. Cocinar, revolviendo suavemente, hasta que los huevos estén casi cocidos.",
      "Si se usa, espolvorear el queso y cocinar por un minuto más hasta que se derrita.",
      "Servir inmediatamente."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-17",
    name: "Yogur con Granola y Miel",
    description: "Un desayuno sencillo y nutritivo, con la dulzura natural de la miel.",
    ingredients: [
      { name: "Yogur natural (griego o normal)", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Granola", quantity: "1/4 taza", supplier: "Tienda Saludable" },
      { name: "Miel", quantity: "1 cucharadita", supplier: "Tienda de Miel" },
    ],
    instructions: [
      "En un bol, colocar el yogur.",
      "Espolvorear la granola por encima.",
      "Rociar con miel.",
      "Servir inmediatamente."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-18",
    name: "Sándwich de Huevo y Aguacate",
    description: "Un sándwich de desayuno completo y saludable, fácil de llevar.",
    ingredients: [
      { name: "Pan integral", quantity: "2 rebanadas", supplier: "Panadería Local" },
      { name: "Huevo cocido (duro o revuelto)", quantity: "1 unidad", supplier: "Granja Local" },
      { name: "Aguacate", quantity: "1/4 unidad (machacado)", supplier: "Frutería" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Tostar el pan si se desea.",
      "Machacar el aguacate en un bol y sazonar con sal y pimienta.",
      "Si el huevo es duro, picarlo y mezclarlo con el aguacate machacado. Si es revuelto, simplemente colocarlo sobre el aguacate.",
      "Untar la mezcla de aguacate (o solo aguacate) en una rebanada de pan.",
      "Colocar el huevo encima (o la mezcla de huevo y aguacate).",
      "Cubrir con la otra rebanada de pan.",
      "Servir."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-19",
    name: "Gachas de Maíz (Polenta) con Leche y Canela",
    description: "Un desayuno caliente y económico, una alternativa a la avena.",
    ingredients: [
      { name: "Harina de maíz (polenta instantánea)", quantity: "1/2 taza", supplier: "Supermercado B" },
      { name: "Leche (o agua)", quantity: "2 tazas", supplier: "Supermercado B" },
      { name: "Azúcar o edulcorante", quantity: "1-2 cucharadas (al gusto)" },
      { name: "Canela en polvo", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Mantequilla (opcional)", quantity: "1 cucharadita", supplier: "Supermercado B" },
    ],
    instructions: [
      "En una olla, combinar la harina de maíz, la leche (o agua), el azúcar y la canela.",
      "Llevar a ebullición a fuego medio, revolviendo constantemente para evitar grumos.",
      "Reducir el fuego a bajo y cocinar, revolviendo con frecuencia, durante 5-7 minutos o hasta que espese a la consistencia deseada.",
      "Retirar del fuego, añadir la mantequilla si se usa y mezclar.",
      "Servir caliente."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-20",
    name: "Muffins de Huevo y Verduras (sin harina)",
    description: "Muffins salados ricos en proteínas, perfectos para preparar con antelación.",
    ingredients: [
      { name: "Huevos", quantity: "6 unidades", supplier: "Granja Local" },
      { name: "Pimiento rojo (picado)", quantity: "1/4 taza", supplier: "Mercado Local" },
      { name: "Espinacas (picadas)", quantity: "1/2 taza", supplier: "Mercado Local" },
      { name: "Cebolla (picada)", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Leche", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
      { name: "Aceite en spray o papelitos para muffins", quantity: "cantidad necesaria" },
    ],
    instructions: [
      "Precalentar el horno a 180°C (350°F). Engrasar un molde para muffins o usar papelitos.",
      "En un bol grande, batir los huevos con la leche, sal y pimienta.",
      "Añadir el pimiento, las espinacas y la cebolla a la mezcla de huevo y mezclar bien.",
      "Verter la mezcla en los moldes para muffins, llenando cada uno hasta 3/4 de su capacidad.",
      "Hornear durante 15-20 minutos, o hasta que los muffins estén firmes y ligeramente dorados.",
      "Dejar enfriar un poco antes de desmoldar. Se pueden guardar en el refrigerador por varios días."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-41",
    name: "Tostadas de Aguacate y Tomate Cherry",
    description: "Desayuno rápido y nutritivo con aguacate cremoso y tomates frescos.",
    ingredients: [
      { name: "Pan integral", quantity: "2 rebanadas", supplier: "Panadería Local" },
      { name: "Aguacate", quantity: "1/2 unidad", supplier: "Frutería" },
      { name: "Tomates cherry", quantity: "5-6 unidades", supplier: "Mercado Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
      { name: "Aceite de oliva", quantity: "1 cucharadita", supplier: "Supermercado A" },
    ],
    instructions: [
      "Tostar el pan.",
      "Machacar el aguacate y untarlo sobre las tostadas.",
      "Cortar los tomates cherry por la mitad y colocarlos encima.",
      "Rociar con aceite de oliva, sal y pimienta.",
      "Servir inmediatamente."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-42",
    name: "Batido de Frutos Rojos y Yogur",
    description: "Batido refrescante y antioxidante, ideal para un desayuno ligero.",
    ingredients: [
      { name: "Frutos rojos congelados", quantity: "1 taza", supplier: "Supermercado B" },
      { name: "Yogur natural", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Leche (o bebida vegetal)", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Miel o sirope de arce", quantity: "1 cucharadita (opcional)" },
    ],
    instructions: [
      "Combinar todos los ingredientes en una licuadora.",
      "Licuar hasta obtener una mezcla suave y homogénea.",
      "Servir frío."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-43",
    name: "Tortitas de Avena y Plátano",
    description: "Tortitas saludables y fáciles de hacer, sin azúcar añadido.",
    ingredients: [
      { name: "Avena en hojuelas", quantity: "1/2 taza", supplier: "Tienda Saludable" },
      { name: "Plátano maduro", quantity: "1 unidad", supplier: "Frutería" },
      { name: "Huevo", quantity: "1 unidad", supplier: "Granja Local" },
      { name: "Leche", quantity: "1/4 taza", supplier: "Supermercado A" },
      { name: "Canela en polvo", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Aceite de coco (para cocinar)", quantity: "1 cucharadita", supplier: "Supermercado B" },
    ],
    instructions: [
      "En un bol, machacar el plátano. Añadir el huevo, la leche, la avena y la canela. Mezclar bien.",
      "Calentar una sartén antiadherente con aceite de coco a fuego medio.",
      "Verter porciones de la mezcla para formar las tortitas. Cocinar hasta que aparezcan burbujas en la superficie y los bordes estén firmes, luego voltear y cocinar el otro lado.",
      "Servir con frutas frescas o un poco de miel."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-44",
    name: "Cereal Integral con Leche y Fruta",
    description: "Desayuno clásico y rápido, fuente de fibra.",
    ingredients: [
      { name: "Cereal integral (sin azúcar)", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Leche (o bebida vegetal)", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Fruta fresca (ej. fresas, arándanos)", quantity: "1/2 taza", supplier: "Frutería" },
    ],
    instructions: [
      "En un bol, servir el cereal.",
      "Añadir la leche y la fruta fresca cortada.",
      "Disfrutar inmediatamente."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-45",
    name: "Pan con Tomate y Jamón Serrano",
    description: "Desayuno mediterráneo sencillo y sabroso.",
    ingredients: [
      { name: "Pan de pueblo o baguette", quantity: "2 rebanadas", supplier: "Panadería Local" },
      { name: "Tomate maduro", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Jamón serrano (opcional)", quantity: "2 lonchas", supplier: "Charcutería" },
      { name: "Aceite de oliva virgen extra", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "una pizca" },
    ],
    instructions: [
      "Tostar el pan.",
      "Rallar el tomate o cortarlo por la mitad y frotarlo sobre el pan tostado.",
      "Rociar con aceite de oliva y una pizca de sal.",
      "Colocar las lonchas de jamón serrano si se usa.",
      "Servir."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-46",
    name: "Bowl de Yogur con Semillas y Fruta",
    description: "Desayuno cremoso y crujiente, personalizable con tus toppings favoritos.",
    ingredients: [
      { name: "Yogur griego natural", quantity: "1 taza", supplier: "Supermercado B" },
      { name: "Semillas de chía o lino", quantity: "1 cucharada", supplier: "Tienda Saludable" },
      { name: "Fruta picada (ej. kiwi, mango)", quantity: "1/2 taza", supplier: "Frutería" },
      { name: "Miel o sirope de agave", quantity: "1 cucharadita (opcional)" },
    ],
    instructions: [
      "En un bol, colocar el yogur.",
      "Añadir las semillas y la fruta picada.",
      "Rociar con miel o sirope si se desea.",
      "Servir."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-47",
    name: "Huevos Cocidos con Tostada",
    description: "Desayuno simple y rico en proteínas.",
    ingredients: [
      { name: "Huevos", quantity: "2 unidades", supplier: "Granja Local" },
      { name: "Pan integral", quantity: "1 rebanada", supplier: "Panadería Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Hervir los huevos durante 6-7 minutos para que la yema quede blanda o 10 minutos para dura. Enfriar y pelar.",
      "Tostar el pan.",
      "Cortar los huevos por la mitad y colocarlos sobre la tostada.",
      "Sazonar con sal y pimienta.",
      "Servir."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-48",
    name: "Batido de Espinacas y Plátano",
    description: "Batido verde nutritivo y energizante.",
    ingredients: [
      { name: "Espinacas frescas", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Plátano", quantity: "1 unidad", supplier: "Frutería" },
      { name: "Leche de almendras", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Semillas de lino", quantity: "1 cucharada", supplier: "Tienda Saludable" },
    ],
    instructions: [
      "Combinar todos los ingredientes en una licuadora.",
      "Licuar hasta obtener una mezcla suave y homogénea.",
      "Servir frío."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-49",
    name: "Gachas de Avena con Manzana y Canela",
    description: "Desayuno caliente y reconfortante, ideal para días fríos.",
    ingredients: [
      { name: "Avena en hojuelas", quantity: "1/2 taza", supplier: "Tienda Saludable" },
      { name: "Agua o leche", quantity: "1.5 tazas", supplier: "Supermercado A" },
      { name: "Manzana (picada)", quantity: "1/2 unidad", supplier: "Frutería" },
      { name: "Canela en polvo", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Miel (opcional)", quantity: "1 cucharadita" },
    ],
    instructions: [
      "En una olla, combinar la avena, el agua/leche, la manzana y la canela.",
      "Llevar a ebullición, luego reducir el fuego y cocinar a fuego lento, revolviendo, hasta que espese.",
      "Servir caliente con un chorrito de miel si se desea."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-50",
    name: "Tostada con Queso Fresco y Mermelada",
    description: "Desayuno clásico y dulce.",
    ingredients: [
      { name: "Pan de molde", quantity: "2 rebanadas", supplier: "Panadería Local" },
      { name: "Queso fresco para untar", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Mermelada de frutas (sin azúcar)", quantity: "1 cucharada", supplier: "Supermercado A" },
    ],
    instructions: [
      "Tostar el pan.",
      "Untar el queso fresco sobre las tostadas.",
      "Añadir la mermelada por encima.",
      "Servir."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-51",
    name: "Huevos Rancheros (versión rápida)",
    description: "Desayuno mexicano con huevos y salsa de tomate.",
    ingredients: [
      { name: "Huevos", quantity: "2 unidades", supplier: "Granja Local" },
      { name: "Tortillas de maíz", quantity: "2 unidades", supplier: "Tortillería Local" },
      { name: "Salsa de tomate (natural)", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Cebolla (picada)", quantity: "1 cucharada", supplier: "Mercado Local" },
      { name: "Cilantro fresco", quantity: "al gusto", supplier: "Mercado Local" },
      { name: "Aceite vegetal", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Calentar el aceite en una sartén. Sofreír la cebolla. Añadir la salsa de tomate y cocinar a fuego lento por 5 minutos.",
      "Freír los huevos en otra sartén.",
      "Calentar las tortillas. Colocar un huevo sobre cada tortilla y cubrir con la salsa.",
      "Espolvorear con cilantro y servir."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-52",
    name: "Batido de Café y Plátano",
    description: "Batido energizante con café, plátano y leche.",
    ingredients: [
      { name: "Café frío (preparado)", quantity: "1/2 taza", supplier: "Cafetería" },
      { name: "Plátano congelado", quantity: "1 unidad", supplier: "Frutería" },
      { name: "Leche", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Cacao en polvo (opcional)", quantity: "1 cucharadita", supplier: "Supermercado B" },
    ],
    instructions: [
      "Combinar todos los ingredientes en una licuadora.",
      "Licuar hasta obtener una mezcla suave y homogénea.",
      "Servir frío."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-53",
    name: "Panqueques de Avena y Zanahoria",
    description: "Panqueques nutritivos con un toque dulce de zanahoria.",
    ingredients: [
      { name: "Avena en hojuelas", quantity: "1/2 taza", supplier: "Tienda Saludable" },
      { name: "Zanahoria rallada", quantity: "1/4 taza", supplier: "Mercado Local" },
      { name: "Huevo", quantity: "1 unidad", supplier: "Granja Local" },
      { name: "Leche", quantity: "1/4 taza", supplier: "Supermercado A" },
      { name: "Canela", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Polvo para hornear", quantity: "1/2 cucharadita", supplier: "Supermercado A" },
    ],
    instructions: [
      "Mezclar todos los ingredientes en un bol hasta obtener una masa homogénea.",
      "Cocinar en una sartén antiadherente a fuego medio hasta que estén dorados por ambos lados.",
      "Servir con sirope o fruta."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-54",
    name: "Tostada con Mantequilla de Cacahuete y Plátano",
    description: "Desayuno energético y saciante.",
    ingredients: [
      { name: "Pan integral", quantity: "1 rebanada", supplier: "Panadería Local" },
      { name: "Mantequilla de cacahuete", quantity: "2 cucharadas", supplier: "Tienda Saludable" },
      { name: "Plátano (en rodajas)", quantity: "1/2 unidad", supplier: "Frutería" },
      { name: "Semillas de chía (opcional)", quantity: "1 cucharadita", supplier: "Tienda Saludable" },
    ],
    instructions: [
      "Tostar el pan.",
      "Untar la mantequilla de cacahuete sobre la tostada.",
      "Colocar las rodajas de plátano encima.",
      "Espolvorear con semillas de chía si se desea.",
      "Servir."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-55",
    name: "Bowl de Frutas con Granola",
    description: "Desayuno fresco y crujiente.",
    ingredients: [
      { name: "Frutas variadas (ej. melón, uvas, naranja)", quantity: "1.5 tazas", supplier: "Frutería" },
      { name: "Granola", quantity: "1/4 taza", supplier: "Tienda Saludable" },
      { name: "Miel (opcional)", quantity: "1 cucharadita" },
    ],
    instructions: [
      "Cortar las frutas en trozos y colocarlas en un bol.",
      "Espolvorear la granola por encima.",
      "Rociar con miel si se desea.",
      "Servir."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-56",
    name: "Huevos Revueltos con Pimiento y Cebolla",
    description: "Desayuno salado y lleno de sabor.",
    ingredients: [
      { name: "Huevos", quantity: "2 unidades", supplier: "Granja Local" },
      { name: "Pimiento (picado)", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Cebolla (picada)", quantity: "1 cucharada", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Calentar el aceite en una sartén. Sofreír el pimiento y la cebolla hasta que estén tiernos.",
      "Batir los huevos con sal y pimienta. Verter sobre las verduras y cocinar, revolviendo, hasta que estén cocidos.",
      "Servir caliente."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-57",
    name: "Batido de Cacao y Aguacate",
    description: "Batido cremoso y nutritivo, con grasas saludables.",
    ingredients: [
      { name: "Aguacate", quantity: "1/2 unidad", supplier: "Frutería" },
      { name: "Cacao en polvo sin azúcar", quantity: "2 cucharadas", supplier: "Supermercado B" },
      { name: "Leche (o bebida vegetal)", quantity: "1 taza", supplier: "Supermercado B" },
      { name: "Miel o dátiles (para endulzar)", quantity: "al gusto" },
    ],
    instructions: [
      "Combinar todos los ingredientes en una licuadora.",
      "Licuar hasta obtener una mezcla suave y homogénea.",
      "Servir frío."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-58",
    name: "Tostada con Ricotta y Miel",
    description: "Desayuno dulce y cremoso.",
    ingredients: [
      { name: "Pan de centeno", quantity: "1 rebanada", supplier: "Panadería Local" },
      { name: "Ricotta", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Miel", quantity: "1 cucharadita", supplier: "Tienda de Miel" },
      { name: "Canela (opcional)", quantity: "una pizca", supplier: "Tienda de Especias" },
    ],
    instructions: [
      "Tostar el pan.",
      "Untar la ricotta sobre la tostada.",
      "Rociar con miel y espolvorear canela si se desea.",
      "Servir."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-59",
    name: "Avena con Semillas de Lino y Bayas",
    description: "Desayuno rico en fibra y omega-3.",
    ingredients: [
      { name: "Avena en hojuelas", quantity: "1/2 taza", supplier: "Tienda Saludable" },
      { name: "Agua", quantity: "1 taza" },
      { name: "Semillas de lino molidas", quantity: "1 cucharada", supplier: "Tienda Saludable" },
      { name: "Bayas frescas o congeladas", quantity: "1/2 taza", supplier: "Frutería" },
    ],
    instructions: [
      "En una olla, cocinar la avena con agua hasta que espese.",
      "Retirar del fuego y mezclar con las semillas de lino.",
      "Servir con las bayas por encima."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-60",
    name: "Fruta Fresca con Queso Cottage",
    description: "Desayuno ligero y proteico.",
    ingredients: [
      { name: "Queso cottage", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Fruta picada (ej. piña, melocotón)", quantity: "1 taza", supplier: "Frutería" },
      { name: "Miel (opcional)", quantity: "1 cucharadita" },
    ],
    instructions: [
      "En un bol, combinar el queso cottage y la fruta picada.",
      "Rociar con miel si se desea.",
      "Servir frío."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-61",
    name: "Batido de Proteínas Casero",
    description: "Batido post-entrenamiento o desayuno rápido.",
    ingredients: [
      { name: "Proteína en polvo (vainilla o chocolate)", quantity: "1 scoop", supplier: "Tienda de Suplementos" },
      { name: "Leche (o agua)", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Plátano", quantity: "1/2 unidad", supplier: "Frutería" },
      { name: "Hielo", quantity: "al gusto" },
    ],
    instructions: [
      "Combinar todos los ingredientes en una licuadora.",
      "Licuar hasta obtener una mezcla suave.",
      "Servir inmediatamente."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-62",
    name: "Tostada con Huevo y Espinacas",
    description: "Desayuno completo y equilibrado.",
    ingredients: [
      { name: "Pan integral", quantity: "1 rebanada", supplier: "Panadería Local" },
      { name: "Huevo", quantity: "1 unidad", supplier: "Granja Local" },
      { name: "Espinacas frescas", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Tostar el pan.",
      "En una sartén, saltear las espinacas con aceite de oliva hasta que se marchiten. Retirar.",
      "Freír o escalfar el huevo en la misma sartén.",
      "Colocar las espinacas sobre la tostada, luego el huevo. Salpimentar.",
      "Servir."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-63",
    name: "Bowl de Yogur con Frutos Secos y Semillas",
    description: "Desayuno crujiente y nutritivo.",
    ingredients: [
      { name: "Yogur natural", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Mix de frutos secos", quantity: "1/4 taza", supplier: "Tienda Saludable" },
      { name: "Semillas de calabaza", quantity: "1 cucharada", supplier: "Tienda Saludable" },
      { name: "Miel (opcional)", quantity: "1 cucharadita" },
    ],
    instructions: [
      "En un bol, combinar el yogur, los frutos secos y las semillas.",
      "Rociar con miel si se desea.",
      "Servir."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-64",
    name: "Avena con Leche y Miel",
    description: "Desayuno clásico y reconfortante.",
    ingredients: [
      { name: "Avena en hojuelas", quantity: "1/2 taza", supplier: "Tienda Saludable" },
      { name: "Leche", quantity: "1.5 tazas", supplier: "Supermercado A" },
      { name: "Miel", quantity: "1 cucharada", supplier: "Tienda de Miel" },
      { name: "Canela (opcional)", quantity: "una pizca", supplier: "Tienda de Especias" },
    ],
    instructions: [
      "En una olla, combinar la avena y la leche. Cocinar a fuego medio, revolviendo, hasta que espese.",
      "Retirar del fuego y mezclar con la miel. Espolvorear canela si se desea.",
      "Servir caliente."
    ],
    mealtype: "Desayuno",
  },
  {
    id: "pre-65",
    name: "Smoothie de Mango y Yogur",
    description: "Batido tropical y cremoso.",
    ingredients: [
      { name: "Mango congelado", quantity: "1 taza", supplier: "Frutería" },
      { name: "Yogur natural", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Jugo de naranja", quantity: "1/2 taza", supplier: "Frutería" },
    ],
    instructions: [
      "Combinar todos los ingredientes en una licuadora.",
      "Licuar hasta obtener una mezcla suave y homogénea.",
      "Servir frío."
    ],
    mealtype: "Desayuno",
  },
];

export const lunchRecipes: Recipe[] = [
  {
    id: "pre-2",
    name: "Ensalada Quinoa Mediterránea",
    description: "Una ensalada fresca y completa con quinoa, verduras mediterráneas y aderezo de limón.",
    ingredients: [
      { name: "Quinoa cocida", quantity: "1 taza", supplier: "Tienda Saludable" },
      { name: "Pepino", quantity: "1/2 unidad (picado)", supplier: "Mercado Local" },
      { name: "Tomates cherry", quantity: "1 taza (cortados a la mitad)", supplier: "Mercado Local" },
      { name: "Pimiento rojo", quantity: "1/2 unidad (picado)", supplier: "Mercado Local" },
      { name: "Aceitunas negras", quantity: "1/4 taza (en rodajas)", supplier: "Supermercado A" },
      { name: "Queso feta", quantity: "50g (desmenuzado)", supplier: "Quesería Artesanal" },
      { name: "Perejil fresco", quantity: "2 cucharadas (picado)", supplier: "Mercado Local" },
      { name: "Jugo de limón", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Aceite de oliva virgen extra", quantity: "3 cucharadas", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol grande, combinar la quinoa cocida, el pepino, los tomates cherry, el pimiento rojo, las aceitunas negras y el perejil.",
      "En un bol pequeño, batir el jugo de limón, el aceite de oliva, la sal y la pimienta para hacer el aderezo.",
      "Verter el aderezo sobre la ensalada y mezclar bien.",
      "Añadir el queso feta desmenuzado y mezclar suavemente.",
      "Servir fría."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-8",
    name: "Hamburguesas Caseras de Carne",
    description: "Jugosas hamburguesas caseras, perfectas para una comida rápida y deliciosa.",
    ingredients: [
      { name: "Carne picada de res", quantity: "500g", supplier: "Carnicería Local" },
      { name: "Pan de hamburguesa", quantity: "4 unidades", supplier: "Panadería Local" },
      { name: "Lechuga", quantity: "4 hojas", supplier: "Mercado Local" },
      { name: "Tomate", quantity: "1 unidad (en rodajas)", supplier: "Mercado Local" },
      { name: "Cebolla", quantity: "1/2 unidad (en rodajas)", supplier: "Mercado Local" },
      { name: "Queso (opcional)", quantity: "4 lonchas", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
      { name: "Aceite vegetal", quantity: "1 cucharada", supplier: "Supermercado A" },
    ],
    instructions: [
      "Dividir la carne picada en 4 porciones iguales y formar hamburguesas de aproximadamente 1.5 cm de grosor.",
      "Sazonar ambos lados de las hamburguesas con sal y pimienta.",
      "Calentar el aceite vegetal en una sartén grande a fuego medio-alto.",
      "Cocinar las hamburguesas durante 3-5 minutos por cada lado, o hasta alcanzar el punto de cocción deseado. Si se usa queso, añadirlo en los últimos 2 minutos de cocción y tapar la sartén para que se derrita.",
      "Tostar ligeramente los panes de hamburguesa.",
      "Armar las hamburguesas con lechuga, tomate, cebolla y cualquier otro aderezo deseado."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-21",
    name: "Ensalada de Pasta con Atún y Verduras",
    description: "Una ensalada de pasta fresca y completa, ideal para un almuerzo ligero.",
    ingredients: [
      { name: "Pasta corta (fusilli, macarrones)", quantity: "200g", supplier: "Supermercado A" },
      { name: "Atún en lata (en agua o aceite)", quantity: "1 lata (escurrido)", supplier: "Supermercado A" },
      { name: "Tomates cherry", quantity: "1 taza (cortados a la mitad)", supplier: "Mercado Local" },
      { name: "Pepino", quantity: "1/2 unidad (picado)", supplier: "Mercado Local" },
      { name: "Maíz dulce (enlatado)", quantity: "1/2 taza (escurrido)", supplier: "Supermercado A" },
      { name: "Cebolla morada", quantity: "1/4 unidad (finamente picada)", supplier: "Mercado Local" },
      { name: "Mayonesa ligera", quantity: "3 cucharadas", supplier: "Supermercado A" },
      { name: "Mostaza Dijon", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Perejil fresco", quantity: "2 cucharadas (picado)", supplier: "Mercado Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Cocinar la pasta según las instrucciones del paquete. Escurrir y enfriar con agua fría.",
      "En un bol grande, combinar la pasta fría, el atún desmenuzado, los tomates cherry, el pepino, el maíz y la cebolla morada.",
      "En un bol pequeño, mezclar la mayonesa, la mostaza, el perejil, la sal y la pimienta para hacer el aderezo.",
      "Verter el aderezo sobre la ensalada de pasta y mezclar bien hasta que todos los ingredientes estén cubiertos.",
      "Refrigerar por al menos 30 minutos antes de servir para que los sabores se mezclen."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-22",
    name: "Sopa de Verduras y Pollo",
    description: "Una sopa reconfortante y nutritiva, perfecta para aprovechar restos de pollo.",
    ingredients: [
      { name: "Pechuga de pollo cocida (desmenuzada)", quantity: "1 taza", supplier: "Carnicería Local" },
      { name: "Caldo de pollo", quantity: "6 tazas", supplier: "Supermercado B" },
      { name: "Zanahorias", quantity: "2 unidades (en rodajas)", supplier: "Mercado Local" },
      { name: "Apio", quantity: "2 tallos (en rodajas)", supplier: "Mercado Local" },
      { name: "Papas", quantity: "1 unidad (en cubos pequeños)", supplier: "Mercado Local" },
      { name: "Guisantes (congelados)", quantity: "1/2 taza", supplier: "Supermercado B" },
      { name: "Cebolla", quantity: "1/2 unidad (picada)", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado B" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
      { name: "Perejil fresco", quantity: "para decorar", supplier: "Mercado Local" },
    ],
    instructions: [
      "En una olla grande, calentar el aceite de oliva a fuego medio. Añadir la cebolla, zanahorias y apio. Cocinar por 5-7 minutos hasta que estén ligeramente tiernas.",
      "Incorporar las papas y el caldo de pollo. Llevar a ebullición, luego reducir el fuego y cocinar a fuego lento durante 15-20 minutos, o hasta que las papas estén tiernas.",
      "Añadir el pollo desmenuzado y los guisantes. Cocinar por 5 minutos más, o hasta que los guisantes estén cocidos y el pollo caliente.",
      "Sazonar con sal y pimienta al gusto. Servir caliente, espolvoreado con perejil fresco."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-23",
    name: "Wrap de Hummus y Vegetales",
    description: "Un wrap rápido y fresco, lleno de fibra y vitaminas.",
    ingredients: [
      { name: "Tortilla de trigo integral", quantity: "1 unidad", supplier: "Supermercado A" },
      { name: "Hummus", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Lechuga romana", quantity: "1 hoja grande", supplier: "Mercado Local" },
      { name: "Zanahoria rallada", quantity: "1/4 taza", supplier: "Mercado Local" },
      { name: "Pepino (en tiras finas)", quantity: "1/4 unidad", supplier: "Mercado Local" },
      { name: "Pimiento rojo (en tiras finas)", quantity: "1/4 unidad", supplier: "Mercado Local" },
      { name: "Tomate (en rodajas finas)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Sal", quantity: "una pizca" },
      { name: "Pimienta", quantity: "una pizca" },
    ],
    instructions: [
      "Extender la tortilla de trigo sobre una superficie plana.",
      "Untar el hummus uniformemente sobre la tortilla, dejando un borde libre.",
      "Colocar la lechuga en el centro de la tortilla.",
      "Distribuir la zanahoria rallada, las tiras de pepino y pimiento, y las rodajas de tomate sobre la lechuga.",
      "Sazonar ligeramente con sal y pimienta.",
      "Doblar los lados de la tortilla hacia adentro y luego enrollar firmemente desde la parte inferior hacia arriba.",
      "Cortar el wrap por la mitad en diagonal y servir inmediatamente."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-24",
    name: "Arroz con Pollo y Verduras (salteado)",
    description: "Un plato completo y sabroso, ideal para aprovechar sobras de arroz y pollo.",
    ingredients: [
      { name: "Arroz cocido", quantity: "2 tazas", supplier: "Supermercado B" },
      { name: "Pechuga de pollo (cocida y picada)", quantity: "150g", supplier: "Carnicería Local" },
      { name: "Zanahoria (picada en cubos pequeños)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Guisantes (congelados)", quantity: "1/2 taza", supplier: "Supermercado B" },
      { name: "Maíz (congelado)", quantity: "1/2 taza", supplier: "Supermercado B" },
      { name: "Huevo", quantity: "1 unidad (batido)", supplier: "Granja Local" },
      { name: "Salsa de soja baja en sodio", quantity: "2 cucharadas", supplier: "Supermercado B" },
      { name: "Aceite vegetal", quantity: "1 cucharada", supplier: "Supermercado B" },
      { name: "Cebollino (picado)", quantity: "para decorar", supplier: "Mercado Local" },
    ],
    instructions: [
      "Calentar el aceite vegetal en un wok o sartén grande a fuego medio-alto.",
      "Añadir la zanahoria y cocinar por 2-3 minutos. Luego añadir los guisantes y el maíz, cocinar por 2 minutos más.",
      "Empujar las verduras a un lado de la sartén. Verter el huevo batido en el espacio vacío y revolver rápidamente para hacer huevos revueltos. Mezclar con las verduras.",
      "Añadir el arroz cocido y el pollo picado a la sartén. Mezclar bien con las verduras y el huevo.",
      "Verter la salsa de soja sobre el arroz y mezclar hasta que todo esté bien combinado y caliente.",
      "Servir caliente, espolvoreado con cebollino picado."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-25",
    name: "Tostada de Aguacate y Huevo Poché",
    description: "Un clásico saludable y delicioso, perfecto para un almuerzo ligero o brunch.",
    ingredients: [
      { name: "Pan integral (rebanada gruesa)", quantity: "1 unidad", supplier: "Panadería Local" },
      { name: "Aguacate", quantity: "1/2 unidad (machacado)", supplier: "Frutería" },
      { name: "Huevo", quantity: "1 unidad", supplier: "Granja Local" },
      { name: "Vinagre blanco", quantity: "1 cucharadita (para pochar)", supplier: "Supermercado A" },
      { name: "Chile en hojuelas (opcional)", quantity: "una pizca", supplier: "Tienda de Especias" },
      { name: "Sal marina", quantity: "al gusto" },
      { name: "Pimienta negra", quantity: "al gusto" },
    ],
    instructions: [
      "Tostar el pan hasta que esté dorado y crujiente.",
      "Mientras tanto, pochar el huevo: llevar una olla pequeña con agua a ebullición suave. Añadir el vinagre. Con una cuchara, crear un remolino en el agua y verter el huevo con cuidado en el centro. Cocinar por 3-4 minutos para una yema líquida.",
      "Machacar el aguacate en un bol y sazonar con sal y pimienta.",
      "Untar el aguacate machacado sobre la tostada.",
      "Con una espumadera, retirar el huevo pochado del agua y escurrirlo bien. Colocarlo suavemente sobre el aguacate.",
      "Espolvorear con chile en hojuelas, sal y pimienta al gusto. Servir inmediatamente."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-26",
    name: "Ensalada de Garbanzos y Pepino",
    description: "Una ensalada refrescante y proteica, ideal para un almuerzo vegetariano.",
    ingredients: [
      { name: "Garbanzos cocidos", quantity: "1 lata (escurrida y enjuagada)", supplier: "Supermercado A" },
      { name: "Pepino", quantity: "1 unidad (picado en cubos)", supplier: "Mercado Local" },
      { name: "Tomate", quantity: "1 unidad (picado en cubos)", supplier: "Mercado Local" },
      { name: "Cebolla morada", quantity: "1/4 unidad (finamente picada)", supplier: "Mercado Local" },
      { name: "Perejil fresco", quantity: "3 cucharadas (picado)", supplier: "Mercado Local" },
      { name: "Jugo de limón", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Aceite de oliva virgen extra", quantity: "3 cucharadas", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol grande, combinar los garbanzos, pepino, tomate, cebolla morada y perejil.",
      "En un bol pequeño, batir el jugo de limón, el aceite de oliva, la sal y la pimienta para hacer el aderezo.",
      "Verter el aderezo sobre la ensalada y mezclar bien.",
      "Refrigerar por al menos 15 minutos antes de servir para que los sabores se integren."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-27",
    name: "Sándwich de Queso a la Parrilla con Tomate",
    description: "Un sándwich clásico y reconfortante, con un toque de tomate fresco.",
    ingredients: [
      { name: "Pan de molde", quantity: "2 rebanadas", supplier: "Panadería Local" },
      { name: "Queso cheddar (o tu favorito)", quantity: "2 lonchas", supplier: "Supermercado B" },
      { name: "Tomate", quantity: "2 rodajas finas", supplier: "Mercado Local" },
      { name: "Mantequilla", quantity: "1 cucharada", supplier: "Supermercado B" },
      { name: "Sal", quantity: "una pizca" },
      { name: "Pimienta", quantity: "una pizca" },
    ],
    instructions: [
      "Untar mantequilla en un lado de cada rebanada de pan.",
      "Colocar una rebanada de pan con el lado de la mantequilla hacia abajo en una sartén fría.",
      "Poner una loncha de queso, las rodajas de tomate, la otra loncha de queso y finalmente la segunda rebanada de pan con el lado de la mantequilla hacia arriba.",
      "Cocinar a fuego medio-bajo durante 3-5 minutos por cada lado, o hasta que el pan esté dorado y crujiente y el queso se haya derretido.",
      "Cortar por la mitad y servir caliente."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-28",
    name: "Tortilla de Patatas Individual",
    description: "Una pequeña tortilla de patatas, perfecta para una porción individual.",
    ingredients: [
      { name: "Papas", quantity: "1 unidad pequeña (cocida y en cubos)", supplier: "Mercado Local" },
      { name: "Huevos", quantity: "2 unidades", supplier: "Granja Local" },
      { name: "Cebolla", quantity: "1/4 unidad (picada finamente)", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una sartén pequeña antiadherente, calentar 1 cucharada de aceite de oliva a fuego medio-bajo.",
      "Añadir la cebolla y cocinar hasta que esté transparente y suave, unos 5-7 minutos. Retirar de la sartén.",
      "En un bol, batir los huevos con sal y pimienta. Añadir las papas cocidas y la cebolla cocida. Mezclar bien.",
      "Calentar la cucharada restante de aceite en la misma sartén a fuego medio.",
      "Verter la mezcla de huevo y papas en la sartén. Cocinar sin mover durante 5-7 minutos, o hasta que los bordes estén cuajados y la parte superior casi.",
      "Con la ayuda de un plato, voltear la tortilla y cocinar por el otro lado durante 3-5 minutos más, o hasta que esté dorada y cocida por completo.",
      "Servir caliente o a temperatura ambiente."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-29",
    name: "Ensalada de Lentejas con Verduras Asadas",
    description: "Una ensalada tibia y nutritiva con lentejas y vegetales de temporada asados.",
    ingredients: [
      { name: "Lentejas cocidas", quantity: "1.5 tazas", supplier: "Supermercado B" },
      { name: "Calabacín", quantity: "1/2 unidad (en cubos)", supplier: "Mercado Local" },
      { name: "Pimiento (cualquier color)", quantity: "1/2 unidad (en cubos)", supplier: "Mercado Local" },
      { name: "Cebolla roja", quantity: "1/4 unidad (en gajos)", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "2 cucharadas", supplier: "Supermercado B" },
      { name: "Vinagre balsámico", quantity: "1 cucharada", supplier: "Supermercado B" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
      { name: "Hierbas provenzales (opcional)", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
    ],
    instructions: [
      "Precalentar el horno a 200°C (400°F).",
      "En un bol, mezclar el calabacín, pimiento y cebolla con 1 cucharada de aceite de oliva, sal, pimienta y hierbas provenzales.",
      "Extender las verduras en una bandeja para hornear y asar durante 20-25 minutos, o hasta que estén tiernas y ligeramente doradas.",
      "En un bol grande, combinar las lentejas cocidas y las verduras asadas.",
      "Aderezar con la cucharada restante de aceite de oliva y el vinagre balsámico. Mezclar bien.",
      "Servir tibia o a temperatura ambiente."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-30",
    name: "Pasta con Salsa de Tomate y Atún",
    description: "Una comida rápida y fácil, perfecta para un almuerzo entre semana.",
    ingredients: [
      { name: "Pasta (espagueti, penne)", quantity: "150g", supplier: "Supermercado A" },
      { name: "Atún en lata (en aceite o agua)", quantity: "1 lata (escurrido)", supplier: "Supermercado A" },
      { name: "Salsa de tomate (passata)", quantity: "200g", supplier: "Supermercado A" },
      { name: "Ajo", quantity: "1 diente (picado)", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Orégano seco", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
      { name: "Perejil fresco (picado)", quantity: "para decorar", supplier: "Mercado Local" },
    ],
    instructions: [
      "Cocinar la pasta según las instrucciones del paquete. Reservar 1/4 taza del agua de cocción antes de escurrir.",
      "Mientras la pasta se cocina, calentar el aceite de oliva en una sartén a fuego medio. Añadir el ajo picado y cocinar por 1 minuto hasta que esté fragante.",
      "Incorporar la salsa de tomate y el orégano. Cocinar a fuego lento durante 5-7 minutos.",
      "Añadir el atún escurrido a la salsa y mezclar bien. Si la salsa está muy espesa, añadir un poco del agua de cocción de la pasta.",
      "Escurrir la pasta y añadirla directamente a la sartén con la salsa. Mezclar bien para que la pasta se impregne de la salsa.",
      "Sazonar con sal y pimienta al gusto. Servir caliente, espolvoreado con perejil fresco."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-66",
    name: "Ensalada de Pollo y Aguacate",
    description: "Ensalada fresca y completa con pollo desmenuzado y aguacate.",
    ingredients: [
      { name: "Pechuga de pollo cocida", quantity: "150g", supplier: "Carnicería Local" },
      { name: "Aguacate", quantity: "1 unidad", supplier: "Frutería" },
      { name: "Lechuga mixta", quantity: "2 tazas", supplier: "Mercado Local" },
      { name: "Tomates cherry", quantity: "1/2 taza", supplier: "Mercado Local" },
      { name: "Aderezo de limón y aceite de oliva", quantity: "2 cucharadas" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Desmenuzar el pollo cocido. Cortar el aguacate en cubos y los tomates cherry por la mitad.",
      "En un bol grande, combinar la lechuga, el pollo, el aguacate y los tomates.",
      "Aderezar con limón, aceite de oliva, sal y pimienta. Mezclar bien y servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-67",
    name: "Sopa de Tomate y Albahaca",
    description: "Sopa cremosa y reconfortante, ideal para un almuerzo ligero.",
    ingredients: [
      { name: "Tomates enlatados (pelados)", quantity: "800g", supplier: "Supermercado A" },
      { name: "Caldo de verduras", quantity: "2 tazas", supplier: "Supermercado B" },
      { name: "Cebolla", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Ajo", quantity: "2 dientes", supplier: "Mercado Local" },
      { name: "Albahaca fresca", quantity: "1/4 taza", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla, sofreír la cebolla y el ajo en aceite de oliva. Añadir los tomates y el caldo.",
      "Cocinar a fuego lento por 15 minutos. Retirar del fuego, añadir la albahaca y licuar hasta que esté suave.",
      "Sazonar y servir caliente."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-68",
    name: "Wrap de Pavo y Queso",
    description: "Wrap rápido y fácil, perfecto para llevar.",
    ingredients: [
      { name: "Tortilla de trigo", quantity: "1 unidad", supplier: "Supermercado A" },
      { name: "Lonchas de pavo", quantity: "3-4 unidades", supplier: "Charcutería" },
      { name: "Queso suizo (lonchas)", quantity: "1 loncha", supplier: "Supermercado A" },
      { name: "Lechuga", quantity: "1 hoja", supplier: "Mercado Local" },
      { name: "Tomate (en rodajas)", quantity: "2 rodajas", supplier: "Mercado Local" },
      { name: "Mostaza o mayonesa", quantity: "1 cucharada", supplier: "Supermercado A" },
    ],
    instructions: [
      "Extender la tortilla. Untar mostaza/mayonesa.",
      "Colocar la lechuga, pavo, queso y tomate.",
      "Enrollar firmemente y cortar por la mitad.",
      "Servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-69",
    name: "Arroz con Verduras Salteadas",
    description: "Plato vegetariano rápido y nutritivo.",
    ingredients: [
      { name: "Arroz cocido", quantity: "1.5 tazas", supplier: "Supermercado B" },
      { name: "Brócoli (floretes)", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Zanahoria (en juliana)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Pimiento rojo (en tiras)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Salsa de soja", quantity: "2 cucharadas", supplier: "Supermercado B" },
      { name: "Aceite de sésamo", quantity: "1 cucharadita", supplier: "Supermercado B" },
    ],
    instructions: [
      "Calentar el aceite de sésamo en un wok o sartén grande. Añadir las verduras y saltear hasta que estén tiernas pero crujientes.",
      "Incorporar el arroz cocido y la salsa de soja. Mezclar bien y cocinar por unos minutos hasta que todo esté caliente.",
      "Servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-70",
    name: "Ensalada Caprese con Balsámico",
    description: "Ensalada italiana simple y deliciosa.",
    ingredients: [
      { name: "Tomates (en rodajas)", quantity: "2 unidades", supplier: "Mercado Local" },
      { name: "Mozzarella fresca (en rodajas)", quantity: "150g", supplier: "Quesería Artesanal" },
      { name: "Albahaca fresca", quantity: "un puñado", supplier: "Mercado Local" },
      { name: "Aceite de oliva virgen extra", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Vinagre balsámico", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Alternar rodajas de tomate, mozzarella y hojas de albahaca en un plato.",
      "Rociar con aceite de oliva y vinagre balsámico.",
      "Salpimentar y servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-71",
    name: "Tostada de Hummus y Pepino",
    description: "Almuerzo ligero y refrescante.",
    ingredients: [
      { name: "Pan de pita o tostada", quantity: "1 unidad", supplier: "Panadería Local" },
      { name: "Hummus", quantity: "3 cucharadas", supplier: "Supermercado A" },
      { name: "Pepino (en rodajas finas)", quantity: "1/4 unidad", supplier: "Mercado Local" },
      { name: "Pimentón (opcional)", quantity: "una pizca", supplier: "Tienda de Especias" },
    ],
    instructions: [
      "Tostar el pan de pita o la tostada.",
      "Untar el hummus generosamente.",
      "Colocar las rodajas de pepino encima.",
      "Espolvorear con pimentón si se desea.",
      "Servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-72",
    name: "Sopa de Lentejas Roja (rápida)",
    description: "Sopa nutritiva y fácil de hacer con lentejas rojas.",
    ingredients: [
      { name: "Lentejas rojas", quantity: "1 taza", supplier: "Supermercado B" },
      { name: "Caldo de verduras", quantity: "4 tazas", supplier: "Supermercado B" },
      { name: "Zanahoria (picada)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Cebolla (picada)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Comino", quantity: "1 cucharadita", supplier: "Tienda de Especias" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla, sofreír la cebolla y la zanahoria en aceite. Añadir las lentejas, el comino y el caldo.",
      "Llevar a ebullición, luego reducir el fuego y cocinar a fuego lento por 15-20 minutos hasta que las lentejas estén tiernas.",
      "Sazonar y servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-73",
    name: "Ensalada de Garbanzos con Maíz y Pimiento",
    description: "Ensalada vegetariana colorida y llena de proteínas.",
    ingredients: [
      { name: "Garbanzos cocidos", quantity: "1 lata", supplier: "Supermercado A" },
      { name: "Maíz dulce (enlatado)", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Pimiento rojo (picado)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Cebolla morada (picada)", quantity: "1/4 unidad", supplier: "Mercado Local" },
      { name: "Jugo de limón", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Perejil fresco", quantity: "al gusto", supplier: "Mercado Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol, combinar los garbanzos, maíz, pimiento y cebolla.",
      "En otro bol, mezclar el jugo de limón, aceite de oliva, sal y pimienta.",
      "Verter el aderezo sobre la ensalada y mezclar. Añadir perejil y servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-74",
    name: "Pasta con Brócoli y Ajo",
    description: "Plato de pasta sencillo y saludable.",
    ingredients: [
      { name: "Pasta (penne o espagueti)", quantity: "200g", supplier: "Supermercado A" },
      { name: "Brócoli (floretes)", quantity: "2 tazas", supplier: "Mercado Local" },
      { name: "Ajo (picado)", quantity: "3 dientes", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "3 cucharadas", supplier: "Supermercado A" },
      { name: "Pimienta roja en hojuelas (opcional)", quantity: "una pizca", supplier: "Tienda de Especias" },
      { name: "Queso parmesano (opcional)", quantity: "al gusto", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
    ],
    instructions: [
      "Cocinar la pasta según las instrucciones, añadiendo el brócoli en los últimos 3-4 minutos.",
      "Mientras, en una sartén, calentar el aceite y sofreír el ajo y las hojuelas de pimienta.",
      "Escurrir la pasta y el brócoli, reservando un poco de agua de cocción. Añadir a la sartén con el ajo.",
      "Mezclar bien, añadir un poco de agua de cocción si es necesario. Servir con parmesano."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-75",
    name: "Sándwich de Huevo y Lechuga",
    description: "Sándwich clásico y rápido.",
    ingredients: [
      { name: "Pan de molde", quantity: "2 rebanadas", supplier: "Panadería Local" },
      { name: "Huevo cocido (picado)", quantity: "2 unidades", supplier: "Granja Local" },
      { name: "Mayonesa", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Mostaza", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Lechuga", quantity: "1 hoja", supplier: "Mercado Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol, mezclar el huevo picado con mayonesa, mostaza, sal y pimienta.",
      "Untar la mezcla en una rebanada de pan. Colocar la lechuga y cubrir con la otra rebanada.",
      "Servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-76",
    name: "Ensalada de Atún y Apio",
    description: "Ensalada ligera y proteica, ideal para un almuerzo rápido.",
    ingredients: [
      { name: "Atún en lata (escurrido)", quantity: "1 lata", supplier: "Supermercado A" },
      { name: "Apio (picado)", quantity: "1 tallo", supplier: "Mercado Local" },
      { name: "Cebolla morada (picada finamente)", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Mayonesa ligera", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Jugo de limón", quantity: "1 cucharadita", supplier: "Mercado Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol, combinar el atún, apio y cebolla.",
      "Añadir la mayonesa, jugo de limón, sal y pimienta. Mezclar bien.",
      "Servir sobre lechuga, tostadas o en un sándwich."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-77",
    name: "Tortilla de Champiñones y Queso",
    description: "Tortilla rápida y sabrosa.",
    ingredients: [
      { name: "Huevos", quantity: "2 unidades", supplier: "Granja Local" },
      { name: "Champiñones (en rodajas)", quantity: "1/2 taza", supplier: "Mercado Local" },
      { name: "Queso rallado", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Aceite de oliva", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una sartén, saltear los champiñones en aceite hasta que estén tiernos. Retirar.",
      "Batir los huevos con sal y pimienta. Verter en la sartén.",
      "Cuando los huevos estén casi cuajados, añadir los champiñones y el queso. Doblar la tortilla y cocinar hasta que el queso se derrita.",
      "Servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-78",
    name: "Bowl de Arroz con Frijoles Negros y Maíz",
    description: "Bowl vegetariano completo y económico.",
    ingredients: [
      { name: "Arroz cocido", quantity: "1 taza", supplier: "Supermercado B" },
      { name: "Frijoles negros (enlatados)", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Maíz dulce (enlatado)", quantity: "1/4 taza", supplier: "Supermercado A" },
      { name: "Aguacate (en cubos)", quantity: "1/4 unidad", supplier: "Frutería" },
      { name: "Cilantro fresco", quantity: "al gusto", supplier: "Mercado Local" },
      { name: "Jugo de limón", quantity: "1 cucharada", supplier: "Mercado Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol, combinar el arroz cocido, frijoles negros, maíz, aguacate y cilantro.",
      "Aderezar con jugo de limón, sal y pimienta. Mezclar bien y servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-79",
    name: "Sopa de Pollo y Fideos (rápida)",
    description: "Sopa reconfortante para un almuerzo rápido.",
    ingredients: [
      { name: "Caldo de pollo", quantity: "4 tazas", supplier: "Supermercado B" },
      { name: "Fideos finos", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Pechuga de pollo cocida (picada)", quantity: "1 taza", supplier: "Carnicería Local" },
      { name: "Zanahoria (rallada)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Apio (picado)", quantity: "1 tallo", supplier: "Mercado Local" },
      { name: "Perejil fresco", quantity: "al gusto", supplier: "Mercado Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla, llevar el caldo a ebullición. Añadir los fideos, zanahoria y apio. Cocinar hasta que los fideos estén tiernos.",
      "Incorporar el pollo picado y cocinar por unos minutos más hasta que esté caliente.",
      "Sazonar con sal y pimienta. Servir con perejil fresco."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-80",
    name: "Ensalada de Col y Manzana",
    description: "Ensalada crujiente y refrescante.",
    ingredients: [
      { name: "Col (repollo) rallada", quantity: "2 tazas", supplier: "Mercado Local" },
      { name: "Manzana (en juliana)", quantity: "1 unidad", supplier: "Frutería" },
      { name: "Zanahoria (rallada)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Mayonesa ligera", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Vinagre de manzana", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol grande, combinar la col, manzana y zanahoria.",
      "En un bol pequeño, mezclar la mayonesa, vinagre, sal y pimienta.",
      "Verter el aderezo sobre la ensalada y mezclar bien. Refrigerar por 15 minutos antes de servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-81",
    name: "Tostada con Queso de Cabra y Miel",
    description: "Almuerzo gourmet rápido y delicioso.",
    ingredients: [
      { name: "Pan rústico", quantity: "1 rebanada", supplier: "Panadería Local" },
      { name: "Queso de cabra", quantity: "50g", supplier: "Quesería Artesanal" },
      { name: "Miel", quantity: "1 cucharadita", supplier: "Tienda de Miel" },
      { name: "Nueces picadas (opcional)", quantity: "1 cucharada", supplier: "Tienda Saludable" },
    ],
    instructions: [
      "Tostar el pan.",
      "Untar el queso de cabra sobre la tostada.",
      "Rociar con miel y espolvorear nueces si se desea.",
      "Servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-82",
    name: "Ensalada de Pasta con Pesto y Tomates Secos",
    description: "Ensalada de pasta con sabores mediterráneos.",
    ingredients: [
      { name: "Pasta corta", quantity: "200g", supplier: "Supermercado A" },
      { name: "Pesto", quantity: "3 cucharadas", supplier: "Supermercado A" },
      { name: "Tomates secos en aceite", quantity: "1/4 taza", supplier: "Supermercado A" },
      { name: "Aceitunas negras (en rodajas)", quantity: "1/4 taza", supplier: "Supermercado A" },
      { name: "Rúcula (opcional)", quantity: "1 taza", supplier: "Mercado Local" },
    ],
    instructions: [
      "Cocinar la pasta. Escurrir y enfriar.",
      "En un bol, combinar la pasta fría, pesto, tomates secos y aceitunas.",
      "Mezclar bien. Añadir rúcula si se desea y servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-83",
    name: "Sopa de Calabaza y Jengibre",
    description: "Sopa cremosa y aromática, ideal para el otoño.",
    ingredients: [
      { name: "Calabaza (en cubos)", quantity: "500g", supplier: "Mercado Local" },
      { name: "Jengibre fresco (rallado)", quantity: "1 cucharadita", supplier: "Mercado Local" },
      { name: "Cebolla (picada)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Caldo de verduras", quantity: "3 tazas", supplier: "Supermercado B" },
      { name: "Leche de coco (opcional)", quantity: "1/4 taza", supplier: "Supermercado A" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla, sofreír la cebolla y el jengibre en aceite. Añadir la calabaza y el caldo.",
      "Cocinar hasta que la calabaza esté tierna. Licuar hasta que esté suave. Añadir leche de coco si se desea.",
      "Sazonar y servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-84",
    name: "Wrap de Pollo al Curry (frío)",
    description: "Wrap con ensalada de pollo al curry, ideal para llevar.",
    ingredients: [
      { name: "Tortilla de trigo", quantity: "1 unidad", supplier: "Supermercado A" },
      { name: "Pechuga de pollo cocida (picada)", quantity: "100g", supplier: "Carnicería Local" },
      { name: "Mayonesa ligera", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Curry en polvo", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Apio (picado)", quantity: "1/2 tallo", supplier: "Mercado Local" },
      { name: "Pasas (opcional)", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Lechuga", quantity: "1 hoja", supplier: "Mercado Local" },
    ],
    instructions: [
      "En un bol, mezclar el pollo, mayonesa, curry, apio y pasas.",
      "Extender la tortilla. Colocar la lechuga y la mezcla de pollo.",
      "Enrollar firmemente y servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-85",
    name: "Ensalada de Quinoa con Pepino y Menta",
    description: "Ensalada fresca y ligera, perfecta para el verano.",
    ingredients: [
      { name: "Quinoa cocida", quantity: "1 taza", supplier: "Tienda Saludable" },
      { name: "Pepino (en cubos)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Tomates (en cubos)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Menta fresca (picada)", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Jugo de limón", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol, combinar la quinoa, pepino, tomates y menta.",
      "Aderezar con jugo de limón, aceite de oliva, sal y pimienta. Mezclar y servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-86",
    name: "Sándwich de Atún y Aguacate",
    description: "Sándwich cremoso y nutritivo.",
    ingredients: [
      { name: "Pan integral", quantity: "2 rebanadas", supplier: "Panadería Local" },
      { name: "Atún en lata (escurrido)", quantity: "1/2 lata", supplier: "Supermercado A" },
      { name: "Aguacate (machacado)", quantity: "1/2 unidad", supplier: "Frutería" },
      { name: "Cebolla morada (picada finamente)", quantity: "1 cucharada", supplier: "Mercado Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol, mezclar el atún, aguacate, cebolla, sal y pimienta.",
      "Untar la mezcla en una rebanada de pan y cubrir con la otra.",
      "Servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-87",
    name: "Bowl de Lentejas con Espinacas y Huevo",
    description: "Bowl completo y rico en hierro.",
    ingredients: [
      { name: "Lentejas cocidas", quantity: "1 taza", supplier: "Supermercado B" },
      { name: "Espinacas frescas", quantity: "2 tazas", supplier: "Mercado Local" },
      { name: "Huevo frito o cocido", quantity: "1 unidad", supplier: "Granja Local" },
      { name: "Tomates cherry", quantity: "1/2 taza", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Vinagre balsámico", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol, combinar las lentejas, espinacas y tomates.",
      "Aderezar con aceite de oliva, vinagre, sal y pimienta.",
      "Colocar el huevo encima y servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-88",
    name: "Sopa de Champiñones Cremosa",
    description: "Sopa reconfortante y sabrosa.",
    ingredients: [
      { name: "Champiñones (en rodajas)", quantity: "2 tazas", supplier: "Mercado Local" },
      { name: "Cebolla (picada)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Caldo de verduras", quantity: "3 tazas", supplier: "Supermercado B" },
      { name: "Nata para cocinar (ligera)", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Perejil fresco", quantity: "al gusto", supplier: "Mercado Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla, sofreír la cebolla y los champiñones en aceite. Añadir el caldo y cocinar por 10 minutos.",
      "Licuar una parte de la sopa para hacerla cremosa (o toda). Volver a la olla, añadir la nata, sal y pimienta.",
      "Calentar sin hervir. Servir con perejil."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-89",
    name: "Wrap de Garbanzos Especiados",
    description: "Wrap vegetariano con garbanzos llenos de sabor.",
    ingredients: [
      { name: "Tortilla de trigo", quantity: "1 unidad", supplier: "Supermercado A" },
      { name: "Garbanzos cocidos", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Pimentón", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Comino", quantity: "1/4 cucharadita", supplier: "Tienda de Especias" },
      { name: "Jugo de limón", quantity: "1 cucharada", supplier: "Mercado Local" },
      { name: "Yogur natural (para aderezo)", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Lechuga", quantity: "1 hoja", supplier: "Mercado Local" },
      { name: "Tomate (picado)", quantity: "1/4 unidad", supplier: "Mercado Local" },
    ],
    instructions: [
      "En un bol, machacar los garbanzos. Mezclar con pimentón, comino, jugo de limón, sal y pimienta.",
      "Extender la tortilla. Colocar la lechuga, la mezcla de garbanzos y el tomate. Rociar con yogur.",
      "Enrollar y servir."
    ],
    mealtype: "Almuerzo",
  },
  {
    id: "pre-90",
    name: "Ensalada de Patata y Huevo",
    description: "Ensalada clásica y saciante.",
    ingredients: [
      { name: "Papas cocidas (en cubos)", quantity: "2 tazas", supplier: "Mercado Local" },
      { name: "Huevos cocidos (picados)", quantity: "2 unidades", supplier: "Granja Local" },
      { name: "Apio (picado)", quantity: "1 tallo", supplier: "Mercado Local" },
      { name: "Cebolla (picada finamente)", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Mayonesa", quantity: "3 cucharadas", supplier: "Supermercado A" },
      { name: "Mostaza Dijon", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Perejil fresco", quantity: "al gusto", supplier: "Mercado Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol grande, combinar las papas, huevos, apio y cebolla.",
      "En un bol pequeño, mezclar la mayonesa, mostaza, sal y pimienta.",
      "Verter el aderezo sobre la ensalada y mezclar bien. Refrigerar por 30 minutos antes de servir. Añadir perejil."
    ],
    mealtype: "Almuerzo",
  },
];

export const snackRecipes: Recipe[] = [
  {
    id: "pre-31",
    name: "Manzana con Mantequilla de Cacahuete",
    description: "Una merienda clásica, sencilla y llena de energía.",
    ingredients: [
      { name: "Manzana", quantity: "1 unidad", supplier: "Frutería" },
      { name: "Mantequilla de cacahuete natural", quantity: "2 cucharadas", supplier: "Tienda Saludable" },
      { name: "Canela en polvo (opcional)", quantity: "una pizca", supplier: "Tienda de Especias" },
    ],
    instructions: [
      "Lavar la manzana y cortarla en rodajas o gajos.",
      "Untar la mantequilla de cacahuete sobre las rodajas de manzana.",
      "Espolvorear con canela si se desea.",
      "Servir inmediatamente."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-32",
    name: "Tostada de Arroz con Aguacate y Tomate",
    description: "Una merienda ligera y crujiente, con grasas saludables.",
    ingredients: [
      { name: "Tostadas de arroz (galletas de arroz)", quantity: "2 unidades", supplier: "Supermercado B" },
      { name: "Aguacate", quantity: "1/4 unidad (machacado)", supplier: "Frutería" },
      { name: "Tomate cherry", quantity: "3-4 unidades (cortados a la mitad)", supplier: "Mercado Local" },
      { name: "Sal", quantity: "una pizca" },
      { name: "Pimienta", quantity: "una pizca" },
    ],
    instructions: [
      "Machacar el aguacate en un bol y sazonar con sal y pimienta.",
      "Untar el aguacate machacado sobre las tostadas de arroz.",
      "Colocar los tomates cherry cortados por encima.",
      "Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-33",
    name: "Palomitas de Maíz Caseras",
    description: "Una merienda divertida y saludable si se prepara sin exceso de grasa y sal.",
    ingredients: [
      { name: "Granos de maíz para palomitas", quantity: "1/4 taza", supplier: "Supermercado A" },
      { name: "Aceite vegetal (coco o girasol)", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla grande con tapa, calentar el aceite a fuego medio-alto.",
      "Añadir 2-3 granos de maíz. Cuando uno de ellos explote, añadir el resto de los granos en una sola capa.",
      "Tapar la olla y retirar del fuego por 30 segundos (esto ayuda a que todos los granos alcancen la misma temperatura).",
      "Volver a poner la olla a fuego medio. Agitar la olla ocasionalmente para evitar que se quemen. Los granos empezarán a explotar.",
      "Cuando las explosiones disminuyan a una cada 2-3 segundos, retirar la olla del fuego. Dejar reposar unos segundos hasta que dejen de explotar.",
      "Verter las palomitas en un bol grande y sazonar con sal al gusto. Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-34",
    name: "Zanahorias y Hummus",
    description: "Una merienda crujiente y nutritiva, rica en fibra y proteínas.",
    ingredients: [
      { name: "Zanahorias", quantity: "2 unidades (peladas y cortadas en bastones)", supplier: "Mercado Local" },
      { name: "Hummus", quantity: "1/4 taza", supplier: "Supermercado A" },
    ],
    instructions: [
      "Colocar los bastones de zanahoria en un plato.",
      "Servir el hummus en un pequeño bol junto a las zanahorias para mojar.",
      "Disfrutar."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-35",
    name: "Yogur Griego con Bayas",
    description: "Una merienda rica en proteínas y antioxidantes, muy refrescante.",
    ingredients: [
      { name: "Yogur griego natural", quantity: "1 taza", supplier: "Supermercado B" },
      { name: "Bayas mixtas (frescas o congeladas)", quantity: "1/2 taza", supplier: "Frutería" },
      { name: "Miel o sirope de arce (opcional)", quantity: "1 cucharadita" },
    ],
    instructions: [
      "En un bol, colocar el yogur griego.",
      "Añadir las bayas por encima.",
      "Si se desea, rociar con un poco de miel o sirope de arce.",
      "Servir frío."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-36",
    name: "Galletas de Arroz con Queso Fresco y Pepino",
    description: "Una merienda ligera y crujiente, con un toque refrescante.",
    ingredients: [
      { name: "Galletas de arroz", quantity: "2 unidades", supplier: "Supermercado A" },
      { name: "Queso fresco batido (o requesón)", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Pepino", quantity: "1/4 unidad (en rodajas finas)", supplier: "Mercado Local" },
      { name: "Eneldo fresco (opcional)", quantity: "una pizca", supplier: "Mercado Local" },
      { name: "Sal", quantity: "una pizca" },
      { name: "Pimienta", quantity: "una pizca" },
    ],
    instructions: [
      "Untar el queso fresco batido sobre las galletas de arroz.",
      "Colocar las rodajas finas de pepino encima del queso.",
      "Sazonar con sal, pimienta y eneldo si se desea.",
      "Servir inmediatamente."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-37",
    name: "Frutos Secos Mixtos",
    description: "Una merienda energética y saludable, rica en grasas buenas y fibra.",
    ingredients: [
      { name: "Mix de frutos secos (almendras, nueces, anacardos)", quantity: "1/4 taza", supplier: "Tienda Saludable" },
    ],
    instructions: [
      "Simplemente medir la porción deseada de frutos secos y disfrutar.",
      "Asegúrate de elegir opciones sin sal añadida o azúcares."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-38",
    name: "Tostada Integral con Tomate y Orégano",
    description: "Una merienda sencilla y mediterránea, ideal para un antojo salado.",
    ingredients: [
      { name: "Pan integral", quantity: "1 rebanada", supplier: "Panadería Local" },
      { name: "Tomate (rallado o en rodajas finas)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Aceite de oliva virgen extra", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Orégano seco", quantity: "una pizca", supplier: "Tienda de Especias" },
      { name: "Sal", quantity: "una pizca" },
    ],
    instructions: [
      "Tostar la rebanada de pan.",
      "Untar el tomate rallado sobre la tostada (o colocar las rodajas de tomate).",
      "Rociar con aceite de oliva, espolvorear orégano y una pizca de sal.",
      "Servir inmediatamente."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-39",
    name: "Batido de Leche y Cacao",
    description: "Un batido simple y reconfortante, una opción más saludable que los batidos comerciales.",
    ingredients: [
      { name: "Leche (o bebida vegetal)", quantity: "1 taza", supplier: "Supermercado B" },
      { name: "Cacao en polvo sin azúcar", quantity: "1 cucharada", supplier: "Supermercado B" },
      { name: "Miel o edulcorante (opcional)", quantity: "1 cucharadita" },
    ],
    instructions: [
      "En un vaso, combinar la leche, el cacao en polvo y la miel/edulcorante si se usa.",
      "Mezclar bien con una cuchara o batidor pequeño hasta que el cacao se disuelva y no haya grumos.",
      "Servir frío o ligeramente tibio."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-40",
    name: "Huevo Duro con Sal y Pimienta",
    description: "Una merienda rápida y rica en proteínas, perfecta para saciar el hambre.",
    ingredients: [
      { name: "Huevo", quantity: "1 unidad", supplier: "Granja Local" },
      { name: "Sal", quantity: "una pizca" },
      { name: "Pimienta", quantity: "una pizca" },
    ],
    instructions: [
      "Hervir el huevo en agua durante 8-10 minutos para que quede duro. Enfriar bajo agua fría y pelar.",
      "Cortar el huevo por la mitad o en rodajas.",
      "Sazonar con sal y pimienta al gusto.",
      "Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-91",
    name: "Rodajas de Manzana con Queso Cheddar",
    description: "Merienda dulce y salada, rica en fibra.",
    ingredients: [
      { name: "Manzana", quantity: "1 unidad", supplier: "Frutería" },
      { name: "Queso cheddar (en lonchas)", quantity: "2 lonchas", supplier: "Supermercado A" },
    ],
    instructions: [
      "Lavar y cortar la manzana en rodajas.",
      "Colocar una loncha de queso sobre cada rodaja de manzana.",
      "Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-92",
    name: "Mini Sándwiches de Pepino y Queso Crema",
    description: "Merienda ligera y refrescante.",
    ingredients: [
      { name: "Pan de molde (sin corteza)", quantity: "2 rebanadas", supplier: "Panadería Local" },
      { name: "Queso crema", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Pepino (en rodajas finas)", quantity: "1/4 unidad", supplier: "Mercado Local" },
      { name: "Eneldo fresco (opcional)", quantity: "una pizca", supplier: "Mercado Local" },
    ],
    instructions: [
      "Untar queso crema en ambas rebanadas de pan.",
      "Colocar las rodajas de pepino en una rebanada y espolvorear eneldo. Cubrir con la otra rebanada.",
      "Cortar en cuartos o triángulos pequeños y servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-93",
    name: "Zanahorias Baby con Dip de Yogur",
    description: "Merienda crujiente y saludable.",
    ingredients: [
      { name: "Zanahorias baby", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Yogur natural", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Jugo de limón", quantity: "1 cucharadita", supplier: "Mercado Local" },
      { name: "Ajo en polvo", quantity: "1/4 cucharadita", supplier: "Tienda de Especias" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol pequeño, mezclar el yogur, jugo de limón, ajo en polvo, sal y pimienta para hacer el dip.",
      "Servir las zanahorias baby con el dip."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-94",
    name: "Puñado de Almendras y Arándanos Secos",
    description: "Merienda energética y fácil de llevar.",
    ingredients: [
      { name: "Almendras", quantity: "1/4 taza", supplier: "Tienda Saludable" },
      { name: "Arándanos secos", quantity: "2 cucharadas", supplier: "Tienda Saludable" },
    ],
    instructions: [
      "Combinar las almendras y los arándanos secos en un pequeño recipiente.",
      "Disfrutar como merienda."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-95",
    name: "Tostada de Arroz con Mantequilla de Almendras",
    description: "Merienda crujiente y nutritiva.",
    ingredients: [
      { name: "Tostada de arroz", quantity: "1 unidad", supplier: "Supermercado B" },
      { name: "Mantequilla de almendras", quantity: "1 cucharada", supplier: "Tienda Saludable" },
      { name: "Rodajas de plátano (opcional)", quantity: "1/4 unidad", supplier: "Frutería" },
    ],
    instructions: [
      "Untar la mantequilla de almendras sobre la tostada de arroz.",
      "Colocar rodajas de plátano si se desea.",
      "Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-96",
    name: "Batido de Leche y Vainilla",
    description: "Batido simple y dulce.",
    ingredients: [
      { name: "Leche", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Extracto de vainilla", quantity: "1/2 cucharadita", supplier: "Supermercado A" },
      { name: "Miel o edulcorante (opcional)", quantity: "1 cucharadita" },
      { name: "Hielo", quantity: "al gusto" },
    ],
    instructions: [
      "Combinar todos los ingredientes en una licuadora.",
      "Licuar hasta que esté suave y espumoso.",
      "Servir frío."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-97",
    name: "Palitos de Apio con Mantequilla de Cacahuete",
    description: "Merienda clásica y crujiente.",
    ingredients: [
      { name: "Apio", quantity: "2 tallos", supplier: "Mercado Local" },
      { name: "Mantequilla de cacahuete", quantity: "2 cucharadas", supplier: "Tienda Saludable" },
    ],
    instructions: [
      "Lavar y cortar el apio en bastones.",
      "Untar mantequilla de cacahuete en el hueco de cada bastón de apio.",
      "Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-98",
    name: "Yogur con Semillas de Chía y Canela",
    description: "Merienda ligera y digestiva.",
    ingredients: [
      { name: "Yogur natural", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Semillas de chía", quantity: "1 cucharada", supplier: "Tienda Saludable" },
      { name: "Canela en polvo", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Miel (opcional)", quantity: "1 cucharadita" },
    ],
    instructions: [
      "En un bol, combinar el yogur, semillas de chía y canela.",
      "Mezclar bien. Rociar con miel si se desea.",
      "Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-99",
    name: "Galletas de Arroz con Aguacate y Huevo Cocido",
    description: "Merienda completa y saciante.",
    ingredients: [
      { name: "Galletas de arroz", quantity: "2 unidades", supplier: "Supermercado A" },
      { name: "Aguacate (machacado)", quantity: "1/4 unidad", supplier: "Frutería" },
      { name: "Huevo cocido (en rodajas)", quantity: "1 unidad", supplier: "Granja Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Untar el aguacate machacado sobre las galletas de arroz.",
      "Colocar las rodajas de huevo cocido encima.",
      "Salpimentar y servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-100",
    name: "Fruta Picada con Limón y Chile",
    description: "Merienda refrescante con un toque picante.",
    ingredients: [
      { name: "Fruta variada (ej. sandía, pepino, jícama)", quantity: "2 tazas", supplier: "Frutería" },
      { name: "Jugo de limón", quantity: "1 cucharada", supplier: "Mercado Local" },
      { name: "Chile en polvo (Tajín)", quantity: "1/2 cucharadita", supplier: "Supermercado B" },
    ],
    instructions: [
      "Cortar la fruta en cubos o bastones y colocar en un bol.",
      "Rociar con jugo de limón y espolvorear chile en polvo.",
      "Mezclar y servir frío."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-101",
    name: "Tostada con Crema de Cacahuete y Semillas de Chía",
    description: "Merienda energética y rica en fibra.",
    ingredients: [
      { name: "Pan integral", quantity: "1 rebanada", supplier: "Panadería Local" },
      { name: "Crema de cacahuete", quantity: "1 cucharada", supplier: "Tienda Saludable" },
      { name: "Semillas de chía", quantity: "1 cucharadita", supplier: "Tienda Saludable" },
    ],
    instructions: [
      "Tostar el pan.",
      "Untar la crema de cacahuete sobre la tostada.",
      "Espolvorear las semillas de chía.",
      "Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-102",
    name: "Yogur con Frutos Secos y Miel",
    description: "Merienda cremosa y crujiente.",
    ingredients: [
      { name: "Yogur natural", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Frutos secos picados", quantity: "2 cucharadas", supplier: "Tienda Saludable" },
      { name: "Miel", quantity: "1 cucharadita", supplier: "Tienda de Miel" },
    ],
    instructions: [
      "En un bol, combinar el yogur, frutos secos y miel.",
      "Mezclar y servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-103",
    name: "Batido de Plátano y Leche",
    description: "Batido clásico y sencillo.",
    ingredients: [
      { name: "Plátano", quantity: "1 unidad", supplier: "Frutería" },
      { name: "Leche", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Hielo (opcional)", quantity: "al gusto" },
    ],
    instructions: [
      "Combinar el plátano y la leche en una licuadora. Añadir hielo si se desea.",
      "Licuar hasta obtener una mezcla suave.",
      "Servir frío."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-104",
    name: "Galletas de Arroz con Queso Fresco y Tomate",
    description: "Merienda ligera y sabrosa.",
    ingredients: [
      { name: "Galletas de arroz", quantity: "2 unidades", supplier: "Supermercado A" },
      { name: "Queso fresco para untar", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Tomate (en rodajas finas)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Orégano (opcional)", quantity: "una pizca", supplier: "Tienda de Especias" },
    ],
    instructions: [
      "Untar queso fresco sobre las galletas de arroz.",
      "Colocar las rodajas de tomate encima.",
      "Espolvorear orégano si se desea.",
      "Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-105",
    name: "Pudín de Chía con Cacao",
    description: "Merienda dulce y nutritiva, ideal para preparar con antelación.",
    ingredients: [
      { name: "Semillas de chía", quantity: "3 cucharadas", supplier: "Tienda Saludable" },
      { name: "Leche (o bebida vegetal)", quantity: "1 taza", supplier: "Supermercado B" },
      { name: "Cacao en polvo sin azúcar", quantity: "1 cucharada", supplier: "Supermercado B" },
      { name: "Miel o sirope de arce", quantity: "1 cucharadita (opcional)" },
    ],
    instructions: [
      "En un frasco o bol, combinar las semillas de chía, leche, cacao y miel/sirope. Mezclar bien.",
      "Refrigerar por al menos 4 horas o toda la noche.",
      "Servir frío."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-106",
    name: "Barritas de Cereal Caseras (sin hornear)",
    description: "Merienda energética y personalizable.",
    ingredients: [
      { name: "Avena en hojuelas", quantity: "1 taza", supplier: "Tienda Saludable" },
      { name: "Mantequilla de cacahuete", quantity: "1/2 taza", supplier: "Tienda Saludable" },
      { name: "Miel o sirope de arce", quantity: "1/4 taza", supplier: "Tienda de Miel" },
      { name: "Chocolate negro picado (opcional)", quantity: "1/4 taza", supplier: "Supermercado A" },
    ],
    instructions: [
      "En un bol, mezclar la avena, mantequilla de cacahuete y miel/sirope hasta que estén bien combinados.",
      "Presionar la mezcla en un molde forrado con papel de horno. Espolvorear chocolate si se usa.",
      "Refrigerar por al menos 1 hora hasta que esté firme. Cortar en barritas y servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-107",
    name: "Yogur con Fruta y Semillas de Girasol",
    description: "Merienda sencilla y nutritiva.",
    ingredients: [
      { name: "Yogur natural", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Fruta picada (ej. pera, melocotón)", quantity: "1/2 taza", supplier: "Frutería" },
      { name: "Semillas de girasol", quantity: "1 cucharada", supplier: "Tienda Saludable" },
    ],
    instructions: [
      "En un bol, combinar el yogur, fruta picada y semillas de girasol.",
      "Mezclar y servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-108",
    name: "Tostada con Huevo Duro y Pimentón",
    description: "Merienda proteica y sabrosa.",
    ingredients: [
      { name: "Pan integral", quantity: "1 rebanada", supplier: "Panadería Local" },
      { name: "Huevo duro (en rodajas)", quantity: "1 unidad", supplier: "Granja Local" },
      { name: "Pimentón dulce", quantity: "una pizca", supplier: "Tienda de Especias" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Tostar el pan.",
      "Colocar las rodajas de huevo duro sobre la tostada.",
      "Espolvorear pimentón, sal y pimienta.",
      "Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-109",
    name: "Batido de Espinacas y Manzana",
    description: "Batido verde refrescante y desintoxicante.",
    ingredients: [
      { name: "Espinacas frescas", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Manzana (picada)", quantity: "1 unidad", supplier: "Frutería" },
      { name: "Agua", quantity: "1/2 taza" },
      { name: "Jugo de limón", quantity: "1 cucharada", supplier: "Mercado Local" },
    ],
    instructions: [
      "Combinar todos los ingredientes en una licuadora.",
      "Licuar hasta obtener una mezcla suave y homogénea.",
      "Servir frío."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-110",
    name: "Galletas de Arroz con Mantequilla de Cacahuete y Miel",
    description: "Merienda dulce y crujiente.",
    ingredients: [
      { name: "Galletas de arroz", quantity: "2 unidades", supplier: "Supermercado A" },
      { name: "Mantequilla de cacahuete", quantity: "2 cucharadas", supplier: "Tienda Saludable" },
      { name: "Miel", quantity: "1 cucharadita", supplier: "Tienda de Miel" },
    ],
    instructions: [
      "Untar mantequilla de cacahuete sobre las galletas de arroz.",
      "Rociar con miel.",
      "Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-111",
    name: "Fruta con Yogur y Granola",
    description: "Merienda completa y equilibrada.",
    ingredients: [
      { name: "Fruta picada (ej. melón, fresas)", quantity: "1 taza", supplier: "Frutería" },
      { name: "Yogur natural", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Granola", quantity: "2 cucharadas", supplier: "Tienda Saludable" },
    ],
    instructions: [
      "En un bol, combinar la fruta picada, yogur y granola.",
      "Mezclar y servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-112",
    name: "Tostada con Queso Fresco y Pepino",
    description: "Merienda ligera y refrescante.",
    ingredients: [
      { name: "Pan integral", quantity: "1 rebanada", supplier: "Panadería Local" },
      { name: "Queso fresco para untar", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Pepino (en rodajas finas)", quantity: "1/4 unidad", supplier: "Mercado Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Tostar el pan.",
      "Untar queso fresco sobre la tostada.",
      "Colocar las rodajas de pepino. Salpimentar.",
      "Servir."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-113",
    name: "Batido de Zanahoria y Naranja",
    description: "Batido vitamínico y dulce.",
    ingredients: [
      { name: "Zanahoria (picada)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Jugo de naranja", quantity: "1 taza", supplier: "Frutería" },
      { name: "Jengibre (opcional)", quantity: "1 trozo pequeño", supplier: "Mercado Local" },
    ],
    instructions: [
      "Combinar todos los ingredientes en una licuadora.",
      "Licuar hasta obtener una mezcla suave y homogénea.",
      "Servir frío."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-114",
    name: "Palitos de Pimiento con Hummus",
    description: "Merienda crujiente y colorida.",
    ingredients: [
      { name: "Pimiento (cualquier color)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Hummus", quantity: "1/4 taza", supplier: "Supermercado A" },
    ],
    instructions: [
      "Lavar y cortar el pimiento en bastones.",
      "Servir los bastones de pimiento con el hummus para mojar.",
      "Disfrutar."
    ],
    mealtype: "Merienda",
  },
  {
    id: "pre-115",
    name: "Manzana Asada con Canela",
    description: "Merienda caliente y reconfortante.",
    ingredients: [
      { name: "Manzana", quantity: "1 unidad", supplier: "Frutería" },
      { name: "Canela en polvo", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Miel (opcional)", quantity: "1 cucharadita" },
    ],
    instructions: [
      "Cortar la manzana por la mitad y retirar el corazón.",
      "Colocar en un plato apto para microondas o en una bandeja para horno.",
      "Espolvorear canela y rociar miel. Cocinar en microondas por 2-3 minutos o en horno a 180°C por 15-20 minutos hasta que esté tierna.",
      "Servir caliente."
    ],
    mealtype: "Merienda",
  },
];

export const dinnerRecipes: Recipe[] = [
  {
    id: "pre-1",
    name: "Curry de Garbanzos y Espinacas",
    description: "Un curry vegetariano aromático y nutritivo con garbanzos, espinacas y leche de coco.",
    ingredients: [
      { name: "Garbanzos cocidos", quantity: "400g", supplier: "Supermercado A" },
      { name: "Espinacas frescas", quantity: "200g", supplier: "Mercado Local" },
      { name: "Leche de coco", quantity: "400ml", supplier: "Supermercado A" },
      { name: "Cebolla", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Ajo", quantity: "2 dientes", supplier: "Mercado Local" },
      { name: "Jengibre fresco", quantity: "1 trozo (2cm)", supplier: "Mercado Local" },
      { name: "Tomate triturado", quantity: "200g", supplier: "Supermercado A" },
      { name: "Curry en polvo", quantity: "2 cucharaditas", supplier: "Tienda de Especias" },
      { name: "Comino", quantity: "1 cucharadita", supplier: "Tienda de Especias" },
      { name: "Cilantro fresco", quantity: "al gusto", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Picar finamente la cebolla, el ajo y el jengibre.",
      "En una olla grande, calentar el aceite de oliva y sofreír la cebolla hasta que esté transparente.",
      "Añadir el ajo, el jengibre, el curry y el comino. Cocinar por 1 minuto hasta que estén fragantes.",
      "Incorporar el tomate triturado y cocinar a fuego lento durante 5 minutos.",
      "Añadir los garbanzos y la leche de coco. Llevar a ebullición, luego reducir el fuego y cocinar a fuego lento durante 10-15 minutos.",
      "Agregar las espinacas y cocinar hasta que se marchiten.",
      "Sazonar con sal y pimienta. Servir caliente, espolvoreado con cilantro fresco."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-3",
    name: "Tacos de Lentejas Especiadas",
    description: "Tacos vegetarianos llenos de sabor con lentejas sazonadas y tus aderezos favoritos.",
    ingredients: [
      { name: "Lentejas cocidas", quantity: "1.5 tazas", supplier: "Supermercado B" },
      { name: "Tortillas de maíz", quantity: "8 unidades", supplier: "Tortillería Local" },
      { name: "Cebolla", quantity: "1/2 unidad (picada)", supplier: "Mercado Local" },
      { name: "Pimiento verde", quantity: "1/2 unidad (picado)", supplier: "Mercado Local" },
      { name: "Ajo", quantity: "1 diente (picado)", supplier: "Mercado Local" },
      { name: "Chile en polvo", quantity: "1 cucharadita", supplier: "Tienda de Especias" },
      { name: "Comino", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Pimentón", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Caldo de verduras", quantity: "1/4 taza", supplier: "Supermercado B" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado B" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
      { name: "Aderezos (aguacate, cilantro, salsa)", quantity: "al gusto" },
    ],
    instructions: [
      "En una sartén grande, calentar el aceite de oliva y sofreír la cebolla, el pimiento verde y el ajo hasta que estén tiernos.",
      "Añadir el chile en polvo, el comino y el pimentón. Cocinar por 30 segundos.",
      "Incorporar las lentejas cocidas y el caldo de verduras. Cocinar a fuego lento durante 5-7 minutos, o hasta que el líquido se haya absorbido.",
      "Sazonar con sal y pimienta.",
      "Calentar las tortillas de maíz.",
      "Rellenar las tortillas con la mezcla de lentejas y añadir tus aderezos favoritos."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-5",
    name: "Pizza de Vegetales Casera",
    description: "Una pizza deliciosa y saludable cargada de tus vegetales favoritos.",
    ingredients: [
      { name: "Base de pizza", quantity: "1 unidad", supplier: "Panadería Local" },
      { name: "Salsa de tomate", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Mozzarella rallada", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Pimiento verde", quantity: "1/2 unidad (en rodajas)", supplier: "Mercado Local" },
      { name: "Cebolla roja", quantity: "1/4 unidad (en rodajas finas)", supplier: "Mercado Local" },
      { name: "Champiñones", quantity: "1/2 taza (en rodajas)", supplier: "Mercado Local" },
      { name: "Aceitunas negras", quantity: "1/4 taza (en rodajas)", supplier: "Supermercado A" },
      { name: "Orégano", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
    ],
    instructions: [
      "Precalentar el horno según las instrucciones de la base de pizza.",
      "Extender la salsa de tomate sobre la base de pizza.",
      "Espolvorear la mitad de la mozzarella.",
      "Distribuir los vegetales y las aceitunas sobre la pizza.",
      "Espolvorear el resto de la mozzarella y el orégano.",
      "Rociar con un poco de aceite de oliva.",
      "Hornear durante 12-15 minutos, o hasta que la corteza esté dorada y el queso burbujeante.",
      "Cortar y servir caliente."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-6",
    name: "Estofado de Res Clásico",
    description: "Un estofado de res reconfortante y lleno de sabor, perfecto para días fríos.",
    ingredients: [
      { name: "Carne de res para estofado", quantity: "500g (cortada en cubos)", supplier: "Carnicería Local" },
      { name: "Zanahorias", quantity: "2 unidades (en rodajas gruesas)", supplier: "Mercado Local" },
      { name: "Papas", quantity: "3 unidades (cortadas en cubos)", supplier: "Mercado Local" },
      { name: "Cebolla", quantity: "1 unidad (picada)", supplier: "Mercado Local" },
      { name: "Ajo", quantity: "3 dientes (picados)", supplier: "Mercado Local" },
      { name: "Caldo de res", quantity: "4 tazas", supplier: "Supermercado B" },
      { name: "Pasta de tomate", quantity: "2 cucharadas", supplier: "Supermercado B" },
      { name: "Harina", quantity: "2 cucharadas", supplier: "Supermercado B" },
      { name: "Aceite vegetal", quantity: "2 cucharadas", supplier: "Supermercado B" },
      { name: "Laurel", quantity: "1 hoja", supplier: "Tienda de Especias" },
      { name: "Tomillo", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Sazonar la carne con sal y pimienta. En una olla grande o horno holandés, calentar el aceite a fuego medio-alto y dorar la carne por todos lados. Retirar la carne y reservar.",
      "Añadir la cebolla a la olla y cocinar hasta que esté transparente. Añadir el ajo y cocinar por 1 minuto más.",
      "Espolvorear la harina sobre las verduras y cocinar por 1 minuto, revolviendo constantemente.",
      "Incorporar la pasta de tomate y el caldo de res, raspando el fondo de la olla. Llevar a ebullición.",
      "Regresar la carne a la olla. Añadir las zanahorias, papas, hoja de laurel y tomillo.",
      "Reducir el fuego a bajo, tapar y cocinar a fuego lento durante 1.5 a 2 horas, o hasta que la carne esté tierna.",
      "Retirar la hoja de laurel antes de servir. Sazonar al gusto."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-7",
    name: "Pollo a la Naranja",
    description: "Trozos de pollo tiernos en una salsa agridulce de naranja, perfecto con arroz.",
    ingredients: [
      { name: "Pechuga de pollo", quantity: "500g (cortada en cubos)", supplier: "Carnicería Local" },
      { name: "Jugo de naranja", quantity: "1 taza", supplier: "Frutería" },
      { name: "Salsa de soja", quantity: "1/4 taza", supplier: "Supermercado A" },
      { name: "Vinagre de arroz", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Miel", quantity: "2 cucharadas", supplier: "Tienda de Miel" },
      { name: "Jengibre rallado", quantity: "1 cucharadita", supplier: "Mercado Local" },
      { name: "Ajo picado", quantity: "2 dientes", supplier: "Mercado Local" },
      { name: "Maicena", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Agua", quantity: "2 cucharadas" },
      { name: "Aceite vegetal", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Semillas de sésamo", quantity: "para decorar", supplier: "Tienda de Especias" },
      { name: "Cebollino picado", quantity: "para decorar", supplier: "Mercado Local" },
    ],
    instructions: [
      "En un bol, mezclar el jugo de naranja, salsa de soja, vinagre de arroz, miel, jengibre y ajo. Reservar.",
      "En una sartén grande, calentar el aceite vegetal a fuego medio-alto. Añadir el pollo y cocinar hasta que esté dorado y cocido por completo. Retirar el pollo y reservar.",
      "Verter la mezcla de salsa de naranja en la sartén. Llevar a ebullición.",
      "En un bol pequeño, mezclar la maicena con el agua hasta que no haya grumos. Añadir a la salsa, revolviendo constantemente, hasta que espese.",
      "Regresar el pollo a la sartén y mezclar con la salsa hasta que esté bien cubierto.",
      "Servir caliente, espolvoreado con semillas de sésamo y cebollino picado. Ideal con arroz blanco."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-9",
    name: "Salmón al Horno con Hierbas",
    description: "Filetes de salmón horneados con una mezcla de hierbas frescas y limón.",
    ingredients: [
      { name: "Filetes de salmón", quantity: "2 unidades (150g cada uno)", supplier: "Pescadería Fresca" },
      { name: "Limón", quantity: "1 unidad (en rodajas)", supplier: "Mercado Local" },
      { name: "Perejil fresco", quantity: "2 cucharadas (picado)", supplier: "Mercado Local" },
      { name: "Eneldo fresco", quantity: "1 cucharada (picado)", supplier: "Mercado Local" },
      { name: "Ajo", quantity: "1 diente (picado)", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "2 cucharadas", supplier: "Supermercado B" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Precalentar el horno a 200°C (400°F).",
      "Colocar los filetes de salmón en una bandeja para hornear forrada con papel de horno.",
      "En un bol pequeño, mezclar el aceite de oliva, perejil, eneldo, ajo, sal y pimienta.",
      "Untar la mezcla de hierbas sobre los filetes de salmón.",
      "Colocar rodajas de limón sobre cada filete.",
      "Hornear durante 12-15 minutos, o hasta que el salmón esté cocido y se desmenuce fácilmente con un tenedor.",
      "Servir caliente."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-116",
    name: "Pechuga de Pollo a la Plancha con Verduras Asadas",
    description: "Cena saludable y completa.",
    ingredients: [
      { name: "Pechuga de pollo", quantity: "1 unidad", supplier: "Carnicería Local" },
      { name: "Brócoli", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Zanahorias", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Pimiento", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
      { name: "Hierbas provenzales", quantity: "1 cucharadita", supplier: "Tienda de Especias" },
    ],
    instructions: [
      "Cortar las verduras en trozos. Mezclar con 1 cucharada de aceite, sal, pimienta y hierbas. Asar en el horno a 200°C por 20-25 minutos.",
      "Mientras, sazonar el pollo y cocinar a la plancha con la cucharada restante de aceite hasta que esté cocido.",
      "Servir el pollo con las verduras asadas."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-117",
    name: "Tortilla de Patatas y Cebolla",
    description: "Clásico español, ideal para una cena ligera.",
    ingredients: [
      { name: "Papas", quantity: "2 unidades", supplier: "Mercado Local" },
      { name: "Cebolla", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Huevos", quantity: "4 unidades", supplier: "Granja Local" },
      { name: "Aceite de oliva", quantity: "4 cucharadas", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
    ],
    instructions: [
      "Pelar y cortar las papas y la cebolla en rodajas finas. Freír en abundante aceite de oliva a fuego medio-bajo hasta que estén tiernas. Escurrir bien el aceite.",
      "Batir los huevos con sal en un bol grande. Añadir las papas y cebolla escurridas y mezclar.",
      "Calentar un poco de aceite en una sartén antiadherente. Verter la mezcla y cocinar a fuego medio hasta que los bordes estén cuajados. Voltear y cocinar el otro lado hasta que esté dorada.",
      "Servir caliente o a temperatura ambiente."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-118",
    name: "Pasta con Salsa de Tomate Casera",
    description: "Cena italiana sencilla y deliciosa.",
    ingredients: [
      { name: "Pasta (espagueti, penne)", quantity: "200g", supplier: "Supermercado A" },
      { name: "Tomates maduros (o enlatados)", quantity: "400g", supplier: "Mercado Local" },
      { name: "Ajo", quantity: "2 dientes", supplier: "Mercado Local" },
      { name: "Cebolla", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Albahaca fresca", quantity: "un puñado", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Cocinar la pasta. Mientras, sofreír cebolla y ajo en aceite. Añadir los tomates picados y cocinar a fuego lento por 15-20 minutos.",
      "Añadir albahaca, sal y pimienta. Mezclar la salsa con la pasta escurrida.",
      "Servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-119",
    name: "Salteado de Tofu y Verduras",
    description: "Cena vegetariana rápida y llena de sabor.",
    ingredients: [
      { name: "Tofu firme", quantity: "200g", supplier: "Tienda Saludable" },
      { name: "Brócoli", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Zanahoria (en juliana)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Pimiento rojo", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Salsa de soja", quantity: "3 cucharadas", supplier: "Supermercado B" },
      { name: "Jengibre rallado", quantity: "1 cucharadita", supplier: "Mercado Local" },
      { name: "Ajo picado", quantity: "2 dientes", supplier: "Mercado Local" },
      { name: "Aceite vegetal", quantity: "2 cucharadas", supplier: "Supermercado B" },
    ],
    instructions: [
      "Prensa el tofu para quitar el exceso de agua, luego córtalo en cubos. Saltear el tofu en aceite hasta que esté dorado. Retirar.",
      "En la misma sartén, saltear las verduras hasta que estén tiernas pero crujientes. Añadir jengibre y ajo.",
      "Regresar el tofu a la sartén. Añadir la salsa de soja y mezclar bien. Cocinar por unos minutos.",
      "Servir con arroz o quinoa."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-120",
    name: "Sopa de Verduras Mixtas",
    description: "Sopa ligera y nutritiva, perfecta para una cena reconfortante.",
    ingredients: [
      { name: "Caldo de verduras", quantity: "6 tazas", supplier: "Supermercado B" },
      { name: "Zanahorias (en rodajas)", quantity: "2 unidades", supplier: "Mercado Local" },
      { name: "Apio (en rodajas)", quantity: "2 tallos", supplier: "Mercado Local" },
      { name: "Papas (en cubos)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Guisantes (congelados)", quantity: "1/2 taza", supplier: "Supermercado B" },
      { name: "Judías verdes (troceadas)", quantity: "1/2 taza", supplier: "Mercado Local" },
      { name: "Cebolla (picada)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla grande, sofreír la cebolla en aceite. Añadir zanahorias, apio y papas. Cocinar por 5 minutos.",
      "Añadir el caldo y llevar a ebullición. Reducir el fuego y cocinar a fuego lento por 15 minutos.",
      "Incorporar guisantes y judías verdes. Cocinar por 5-7 minutos más hasta que las verduras estén tiernas.",
      "Sazonar y servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-121",
    name: "Arroz con Pollo y Champiñones",
    description: "Cena completa y sabrosa.",
    ingredients: [
      { name: "Arroz", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Pechuga de pollo (en cubos)", quantity: "200g", supplier: "Carnicería Local" },
      { name: "Champiñones (en rodajas)", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Cebolla (picada)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Caldo de pollo", quantity: "2 tazas", supplier: "Supermercado B" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla, calentar aceite y dorar el pollo. Retirar. Sofreír cebolla y champiñones.",
      "Añadir el arroz y cocinar por 1 minuto. Incorporar el caldo y el pollo. Llevar a ebullición, luego reducir el fuego y cocinar tapado por 18-20 minutos hasta que el arroz absorba el líquido.",
      "Servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-122",
    name: "Lentejas Estofadas con Verduras",
    description: "Cena vegetariana nutritiva y reconfortante.",
    ingredients: [
      { name: "Lentejas pardinas", quantity: "1 taza", supplier: "Supermercado B" },
      { name: "Zanahoria (en cubos)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Apio (en cubos)", quantity: "1 tallo", supplier: "Mercado Local" },
      { name: "Cebolla (picada)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Tomate triturado", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Caldo de verduras", quantity: "4 tazas", supplier: "Supermercado B" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Laurel", quantity: "1 hoja", supplier: "Tienda de Especias" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla, sofreír cebolla, zanahoria y apio en aceite. Añadir lentejas, tomate, caldo y laurel.",
      "Llevar a ebullición, luego reducir el fuego y cocinar a fuego lento por 25-30 minutos hasta que las lentejas estén tiernas.",
      "Sazonar y servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-123",
    name: "Pescado Blanco al Vapor con Limón y Perejil",
    description: "Cena ligera y saludable.",
    ingredients: [
      { name: "Filete de merluza o bacalao", quantity: "150g", supplier: "Pescadería Fresca" },
      { name: "Limón (en rodajas)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Perejil fresco (picado)", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "1 cucharadita", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Colocar el filete de pescado en una vaporera. Poner rodajas de limón y perejil encima. Rociar con aceite, sal y pimienta.",
      "Cocinar al vapor por 8-10 minutos, o hasta que el pescado esté cocido.",
      "Servir con verduras al vapor o ensalada."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-124",
    name: "Curry de Verduras con Arroz",
    description: "Curry vegetariano aromático y nutritivo.",
    ingredients: [
      { name: "Arroz", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Leche de coco", quantity: "400ml", supplier: "Supermercado A" },
      { name: "Pasta de curry rojo o verde", quantity: "2 cucharadas", supplier: "Supermercado B" },
      { name: "Verduras variadas (ej. brócoli, zanahoria, pimiento)", quantity: "3 tazas", supplier: "Mercado Local" },
      { name: "Cebolla (picada)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Aceite vegetal", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
    ],
    instructions: [
      "Cocinar el arroz. Mientras, en una olla, calentar aceite y sofreír la cebolla. Añadir la pasta de curry y cocinar por 1 minuto.",
      "Incorporar las verduras y la leche de coco. Llevar a ebullición, luego reducir el fuego y cocinar a fuego lento hasta que las verduras estén tiernas.",
      "Sazonar y servir el curry sobre el arroz."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-125",
    name: "Albóndigas en Salsa de Tomate con Puré de Patatas",
    description: "Cena reconfortante y clásica.",
    ingredients: [
      { name: "Carne picada (res o mixta)", quantity: "300g", supplier: "Carnicería Local" },
      { name: "Huevo", quantity: "1 unidad", supplier: "Granja Local" },
      { name: "Pan rallado", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Salsa de tomate", quantity: "400g", supplier: "Supermercado A" },
      { name: "Papas", quantity: "3 unidades", supplier: "Mercado Local" },
      { name: "Leche", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Mantequilla", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Aceite de oliva", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Para las albóndigas: Mezclar carne picada, huevo, pan rallado, sal y pimienta. Formar bolitas y dorar en una sartén con aceite. Añadir la salsa de tomate y cocinar a fuego lento por 15-20 minutos.",
      "Para el puré: Cocinar las papas hasta que estén tiernas. Machacar con leche, mantequilla, sal y pimienta.",
      "Servir las albóndigas con el puré."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-126",
    name: "Ensalada de Pasta con Pollo y Verduras",
    description: "Ensalada completa y fácil de preparar.",
    ingredients: [
      { name: "Pasta corta", quantity: "200g", supplier: "Supermercado A" },
      { name: "Pechuga de pollo cocida (en cubos)", quantity: "150g", supplier: "Carnicería Local" },
      { name: "Tomates cherry", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Pepino (en cubos)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Pimiento (en cubos)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Aderezo de yogur y hierbas", quantity: "4 cucharadas" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Cocinar la pasta. Escurrir y enfriar. Cortar el pollo y las verduras.",
      "En un bol grande, combinar la pasta, pollo y verduras. Añadir el aderezo, sal y pimienta. Mezclar bien.",
      "Servir fría."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-127",
    name: "Sopa de Pescado y Marisco (rápida)",
    description: "Sopa ligera y sabrosa con pescado y marisco.",
    ingredients: [
      { name: "Caldo de pescado", quantity: "4 tazas", supplier: "Supermercado B" },
      { name: "Filete de pescado blanco (en trozos)", quantity: "150g", supplier: "Pescadería Fresca" },
      { name: "Gambas peladas", quantity: "100g", supplier: "Pescadería Fresca" },
      { name: "Patata (en cubos pequeños)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Zanahoria (en rodajas)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Perejil fresco", quantity: "al gusto", supplier: "Mercado Local" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla, llevar el caldo a ebullición. Añadir la patata y la zanahoria. Cocinar por 10 minutos.",
      "Incorporar el pescado y las gambas. Cocinar por 5-7 minutos más hasta que estén cocidos.",
      "Sazonar con sal y pimienta. Servir con perejil fresco."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-128",
    name: "Tacos de Pescado con Salsa de Yogur",
    description: "Tacos frescos y ligeros con pescado blanco.",
    ingredients: [
      { name: "Filete de pescado blanco (ej. tilapia)", quantity: "200g", supplier: "Pescadería Fresca" },
      { name: "Tortillas de maíz", quantity: "4 unidades", supplier: "Tortillería Local" },
      { name: "Col (repollo) rallada", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Yogur natural", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Jugo de limón", quantity: "1 cucharada", supplier: "Mercado Local" },
      { name: "Cilantro fresco", quantity: "al gusto", supplier: "Mercado Local" },
      { name: "Aceite vegetal", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Sazonar el pescado con sal y pimienta. Cocinar a la plancha o al horno hasta que esté cocido. Desmenuzar.",
      "Para la salsa: Mezclar yogur, jugo de limón, cilantro picado, sal y pimienta.",
      "Calentar las tortillas. Rellenar con col, pescado desmenuzado y la salsa de yogur.",
      "Servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-129",
    name: "Pizza de Pollo BBQ Casera",
    description: "Pizza con pollo, salsa BBQ y queso.",
    ingredients: [
      { name: "Base de pizza", quantity: "1 unidad", supplier: "Panadería Local" },
      { name: "Pechuga de pollo cocida (desmenuzada)", quantity: "150g", supplier: "Carnicería Local" },
      { name: "Salsa BBQ", quantity: "1/4 taza", supplier: "Supermercado A" },
      { name: "Mozzarella rallada", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Cebolla roja (en rodajas finas)", quantity: "1/4 unidad", supplier: "Mercado Local" },
      { name: "Cilantro fresco (opcional)", quantity: "al gusto", supplier: "Mercado Local" },
    ],
    instructions: [
      "Precalentar el horno. Extender la salsa BBQ sobre la base de pizza.",
      "Distribuir el pollo desmenuzado, la cebolla roja y la mozzarella.",
      "Hornear hasta que la corteza esté dorada y el queso burbujeante.",
      "Espolvorear cilantro si se desea y servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-130",
    name: "Ensalada de Lentejas y Queso Feta",
    description: "Ensalada mediterránea con lentejas y queso feta.",
    ingredients: [
      { name: "Lentejas cocidas", quantity: "1.5 tazas", supplier: "Supermercado B" },
      { name: "Pepino (en cubos)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Tomates cherry", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Queso feta (desmenuzado)", quantity: "50g", supplier: "Quesería Artesanal" },
      { name: "Cebolla morada (picada)", quantity: "1/4 unidad", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Vinagre de vino tinto", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Orégano seco", quantity: "1/2 cucharadita", supplier: "Tienda de Especias" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol grande, combinar lentejas, pepino, tomates, queso feta y cebolla.",
      "En otro bol, mezclar aceite de oliva, vinagre, orégano, sal y pimienta.",
      "Verter el aderezo sobre la ensalada y mezclar bien. Servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-131",
    name: "Sopa de Cebolla Francesa (versión simplificada)",
    description: "Sopa clásica con cebolla caramelizada y caldo.",
    ingredients: [
      { name: "Cebollas (en rodajas finas)", quantity: "3 unidades", supplier: "Mercado Local" },
      { name: "Caldo de res o verduras", quantity: "4 tazas", supplier: "Supermercado B" },
      { name: "Mantequilla", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Harina", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Pan tostado o crutones", quantity: "para servir" },
      { name: "Queso Gruyere o Emmental (rallado)", quantity: "para servir", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla, derretir la mantequilla y cocinar las cebollas a fuego medio-bajo hasta que estén caramelizadas (unos 20-30 minutos).",
      "Espolvorear la harina y cocinar por 1 minuto. Añadir el caldo, sal y pimienta. Llevar a ebullición y cocinar a fuego lento por 15 minutos.",
      "Servir la sopa con pan tostado y queso rallado por encima."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-132",
    name: "Pollo al Limón con Patatas Asadas",
    description: "Cena sabrosa y fácil de preparar en el horno.",
    ingredients: [
      { name: "Muslos de pollo (sin piel)", quantity: "2 unidades", supplier: "Carnicería Local" },
      { name: "Patatas (en cubos)", quantity: "2 unidades", supplier: "Mercado Local" },
      { name: "Limón (en rodajas)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Romero fresco", quantity: "2 ramitas", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Precalentar el horno a 200°C. En una bandeja para horno, mezclar las patatas con 1 cucharada de aceite, sal, pimienta y romero.",
      "Colocar el pollo sobre las patatas. Rociar el pollo con la cucharada restante de aceite, sal, pimienta y rodajas de limón.",
      "Asar por 30-40 minutos, o hasta que el pollo esté cocido y las patatas tiernas y doradas.",
      "Servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-133",
    name: "Arroz Frito con Huevo y Verduras",
    description: "Cena rápida y versátil, ideal para aprovechar sobras de arroz.",
    ingredients: [
      { name: "Arroz cocido (frío)", quantity: "2 tazas", supplier: "Supermercado A" },
      { name: "Huevo", quantity: "1 unidad", supplier: "Granja Local" },
      { name: "Zanahoria (picada)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Guisantes (congelados)", quantity: "1/2 taza", supplier: "Supermercado B" },
      { name: "Salsa de soja", quantity: "2 cucharadas", supplier: "Supermercado B" },
      { name: "Aceite vegetal", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Cebollino (picado)", quantity: "al gusto", supplier: "Mercado Local" },
    ],
    instructions: [
      "Calentar el aceite en un wok o sartén grande. Añadir la zanahoria y cocinar por 2 minutos. Añadir los guisantes.",
      "Empujar las verduras a un lado. Verter el huevo batido y revolver para hacer huevos revueltos. Mezclar con las verduras.",
      "Añadir el arroz frío y la salsa de soja. Saltear por 3-5 minutos hasta que todo esté caliente y bien mezclado.",
      "Servir con cebollino."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-134",
    name: "Ensalada de Garbanzos con Atún",
    description: "Ensalada proteica y saciante.",
    ingredients: [
      { name: "Garbanzos cocidos", quantity: "1 lata", supplier: "Supermercado A" },
      { name: "Atún en lata (escurrido)", quantity: "1 lata", supplier: "Supermercado A" },
      { name: "Pepino (en cubos)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Tomate (en cubos)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Cebolla morada (picada)", quantity: "1/4 unidad", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Vinagre de manzana", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol grande, combinar garbanzos, atún, pepino, tomate y cebolla.",
      "En otro bol, mezclar aceite de oliva, vinagre, sal y pimienta.",
      "Verter el aderezo sobre la ensalada y mezclar bien. Servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-135",
    name: "Sopa de Brócoli y Queso (ligera)",
    description: "Sopa cremosa y reconfortante con brócoli y queso.",
    ingredients: [
      { name: "Brócoli (floretes)", quantity: "3 tazas", supplier: "Mercado Local" },
      { name: "Caldo de verduras", quantity: "3 tazas", supplier: "Supermercado B" },
      { name: "Leche", quantity: "1 taza", supplier: "Supermercado A" },
      { name: "Queso cheddar (rallado)", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Cebolla (picada)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla, sofreír la cebolla en aceite. Añadir el brócoli y el caldo. Cocinar hasta que el brócoli esté tierno.",
      "Licuar la sopa hasta que esté suave. Volver a la olla, añadir la leche y el queso. Calentar a fuego bajo, revolviendo, hasta que el queso se derrita.",
      "Sazonar y servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-136",
    name: "Tostadas de Champiñones al Ajillo",
    description: "Cena ligera y sabrosa con champiñones salteados.",
    ingredients: [
      { name: "Pan de pueblo", quantity: "2 rebanadas", supplier: "Panadería Local" },
      { name: "Champiñones (en rodajas)", quantity: "2 tazas", supplier: "Mercado Local" },
      { name: "Ajo (picado)", quantity: "3 dientes", supplier: "Mercado Local" },
      { name: "Perejil fresco (picado)", quantity: "2 cucharadas", supplier: "Mercado Local" },
      { name: "Aceite de oliva", quantity: "3 cucharadas", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Tostar el pan. En una sartén, calentar aceite y saltear los champiñones hasta que estén dorados. Añadir ajo y perejil, cocinar por 1 minuto.",
      "Sazonar con sal y pimienta. Servir los champiñones sobre las tostadas."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-137",
    name: "Ensalada de Pollo y Garbanzos",
    description: "Ensalada completa y proteica.",
    ingredients: [
      { name: "Pechuga de pollo cocida (en cubos)", quantity: "150g", supplier: "Carnicería Local" },
      { name: "Garbanzos cocidos", quantity: "1 lata", supplier: "Supermercado A" },
      { name: "Pepino (en cubos)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Tomates cherry", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Aderezo de limón y hierbas", quantity: "3 cucharadas" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En un bol grande, combinar pollo, garbanzos, pepino y tomates.",
      "Añadir el aderezo, sal y pimienta. Mezclar bien y servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-138",
    name: "Sopa de Patata y Puerro",
    description: "Sopa cremosa y reconfortante.",
    ingredients: [
      { name: "Patatas (en cubos)", quantity: "2 unidades", supplier: "Mercado Local" },
      { name: "Puerro (parte blanca, en rodajas)", quantity: "1 unidad", supplier: "Mercado Local" },
      { name: "Caldo de verduras", quantity: "4 tazas", supplier: "Supermercado B" },
      { name: "Nata para cocinar (ligera)", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Aceite de oliva", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "En una olla, sofreír el puerro en aceite hasta que esté tierno. Añadir las patatas y el caldo. Cocinar hasta que las patatas estén tiernas.",
      "Licuar la sopa hasta que esté suave. Volver a la olla, añadir la nata, sal y pimienta. Calentar sin hervir.",
      "Servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-139",
    name: "Burrito de Frijoles y Arroz",
    description: "Burrito vegetariano fácil y personalizable.",
    ingredients: [
      { name: "Tortilla de trigo grande", quantity: "1 unidad", supplier: "Supermercado A" },
      { name: "Frijoles negros (cocidos)", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Arroz cocido", quantity: "1/2 taza", supplier: "Supermercado A" },
      { name: "Queso rallado", quantity: "1/4 taza", supplier: "Supermercado A" },
      { name: "Salsa (opcional)", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Aguacate (en cubos)", quantity: "1/4 unidad", supplier: "Frutería" },
    ],
    instructions: [
      "Calentar la tortilla. En el centro, colocar los frijoles, arroz, queso, salsa y aguacate.",
      "Doblar los lados de la tortilla hacia adentro y luego enrollar firmemente.",
      "Servir."
    ],
    mealtype: "Cena",
  },
  {
    id: "pre-140",
    name: "Ensalada de Atún y Pasta Integral",
    description: "Ensalada completa y nutritiva.",
    ingredients: [
      { name: "Pasta integral (corta)", quantity: "150g", supplier: "Supermercado A" },
      { name: "Atún en lata (escurrido)", quantity: "1 lata", supplier: "Supermercado A" },
      { name: "Tomates cherry", quantity: "1 taza", supplier: "Mercado Local" },
      { name: "Pepino (en cubos)", quantity: "1/2 unidad", supplier: "Mercado Local" },
      { name: "Aceitunas negras (en rodajas)", quantity: "1/4 taza", supplier: "Supermercado A" },
      { name: "Aceite de oliva", quantity: "2 cucharadas", supplier: "Supermercado A" },
      { name: "Vinagre de vino blanco", quantity: "1 cucharada", supplier: "Supermercado A" },
      { name: "Sal", quantity: "al gusto" },
      { name: "Pimienta", quantity: "al gusto" },
    ],
    instructions: [
      "Cocinar la pasta integral. Escurrir y enfriar. En un bol grande, combinar la pasta, atún, tomates, pepino y aceitunas.",
      "En otro bol, mezclar aceite de oliva, vinagre, sal y pimienta.",
      "Verter el aderezo sobre la ensalada y mezclar bien. Servir."
    ],
    mealtype: "Cena",
  },
];

export const preloadedRecipes: Recipe[] = [
  ...breakfastRecipes,
  ...lunchRecipes,
  ...snackRecipes,
  ...dinnerRecipes,
];