import React from "react";

function Product() {
  const products = [
    {
      id: 1,
      name: "Whiskey Escocés",
      description:
        "Un delicioso whisky escocés de malta envejecido en barriles de roble.",
      price: 50.99,
      image: "https://example.com/whiskey.jpg",
      country: "Escocia",
    },
    {
      id: 2,
      name: "Vino Tinto Italiano",
      description:
        "Un vino tinto italiano de alta calidad con sabores ricos y aromas intensos.",
      price: 35.99,
      image: "https://example.com/vino.jpg",
      country: "Italia",
    },
    {
      id: 3,
      name: "Tequila Mexicano",
      description:
        "Un tequila mexicano de agave azul con un sabor distintivo y suave.",
      price: 49.99,
      image: "https://example.com/tequila.jpg",
      country: "México",
    },
    {
      id: 4,
      name: "Champán Francés",
      description:
        "Un exquisito champán francés con burbujas finas y elegantes.",
      price: 65.99,
      image: "https://example.com/champan.jpg",
      country: "Francia",
    },
    {
      id: 5,
      name: "Cerveza Alemana",
      description:
        "Una cerveza alemana tradicional con un sabor equilibrado y refrescante.",
      price: 24.99,
      image: "https://example.com/cerveza.jpg",
      country: "Alemania",
    },
    {
      id: 6,
      name: "Gin Inglés",
      description:
        "Un gin inglés destilado con una cuidadosa selección de botánicos.",
      price: 39.99,
      image: "https://example.com/gin.jpg",
      country: "Inglaterra",
    },
    {
      id: 7,
      name: "Vodka Ruso",
      description:
        "Un vodka ruso premium destilado y filtrado varias veces para obtener suavidad.",
      price: 32.99,
      image: "https://example.com/vodka.jpg",
      country: "Rusia",
    },
    {
      id: 8,
      name: "Ron Cubano",
      description:
        "Un ron cubano añejo con notas de especias y sabores tropicales.",
      price: 55.99,
      image: "https://example.com/ron.jpg",
      country: "Cuba",
    },
    {
      id: 9,
      name: "Whiskey Irlandés",
      description:
        "Un whiskey irlandés suave y aromático con toques de vainilla y frutas.",
      price: 42.99,
      image: "https://example.com/irish-whiskey.jpg",
      country: "Irlanda",
    },
    {
      id: 10,
      name: "Vino Malbec Argentino",
      description:
        "Un vino Malbec argentino de cuerpo completo con taninos suaves y notas frutales.",
      price: 29.99,
      image: "https://example.com/malbec.jpg",
      country: "Argentina",
    },
    {
      id: 11,
      name: "Sake Japonés",
      description:
        "Un sake japonés premium con un equilibrio perfecto de dulzura y acidez.",
      price: 38.99,
      image: "https://example.com/sake.jpg",
      country: "Japón",
    },
    {
      id: 12,
      name: "Brandy Español",
      description:
        "Un brandy español envejecido en barricas de roble para obtener una suavidad excepcional.",
      price: 47.99,
      image: "https://example.com/brandy.jpg",
      country: "España",
    },
    {
      id: 13,
      name: "Vodka Sueco",
      description:
        "Un vodka sueco destilado a partir de trigo de invierno y agua pura.",
      price: 36.99,
      image: "https://example.com/vodka.jpg",
      country: "Suecia",
    },
    {
      id: 14,
      name: "Whiskey Americano",
      description:
        "Un whiskey americano de estilo bourbon con notas de caramelo y especias.",
      price: 44.99,
      image: "https://example.com/bourbon.jpg",
      country: "Estados Unidos",
    },
    {
      id: 15,
      name: "Vino Sauvignon Blanc Neozelandés",
      description:
        "Un vino Sauvignon Blanc neozelandés con aromas intensos y refrescantes.",
      price: 27.99,
      image: "https://example.com/sauvignon-blanc.jpg",
      country: "Nueva Zelanda",
    },
    {
      id: 16,
      name: "Gin Holandés",
      description:
        "Un gin holandés destilado con hierbas y especias cuidadosamente seleccionadas.",
      price: 41.99,
      image: "https://example.com/gin.jpg",
      country: "Países Bajos",
    },
    {
      id: 17,
      name: "Cognac Francés",
      description:
        "Un cognac francés de prestigio envejecido en barricas de roble francés.",
      price: 59.99,
      image: "https://example.com/cognac.jpg",
      country: "Francia",
    },
    {
      id: 18,
      name: "Tequila Mexicano",
      description:
        "Un tequila mexicano reposado con sabores suaves y un toque de agave.",
      price: 37.99,
      image: "https://example.com/tequila.jpg",
      country: "México",
    },
    {
      id: 19,
      name: "Vino Chardonnay Australiano",
      description:
        "Un vino Chardonnay australiano con sabores a frutas tropicales y toques de roble.",
      price: 31.99,
      image: "https://example.com/chardonnay.jpg",
      country: "Australia",
    },
    {
      id: 20,
      name: "Absenta Suiza",
      description:
        "Una absenta suiza tradicional con una mezcla de hierbas y un alto contenido de alcohol.",
      price: 53.99,
      image: "https://example.com/absinthe.jpg",
      country: "Suiza",
    },
  ];

  return (
    <div>
      <h2>Productos</h2>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>País: {product.country}</p>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
