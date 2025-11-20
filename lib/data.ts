export const brand = {
    lime: "#aace52",
    green: "#76a029",
    dark: "#37560a",
    black: "#000000",
};

export const beers = [
    {
        id: "ipa",
        name: "Session IPA",
        style: "IPA",
        description:
            "Una cerveza ale, de amargor medio/alto, de aroma y sabor citrico y frutal aportado por la técnica de lupulado en frio típico de las Ipa. El balkance entre las maltas base y el lúpulo, le otorgan un cuerpo liviano que invita a tomar.",
        abv: "6.0%",
        ibu: "55",
        gradient: `from-[${brand.dark}] to-[${brand.black}]`,
        image: "/etiquetas/session_ipa.png",
    },
    {
        id: "golden",
        name: "Golden",
        style: "Golden",
        description:
            "Cerveza rubia fácil de beber, con orientación hacia la malta, balanceada y limpia. De color dorado brillante con buena retención de espuma. Suave dulzor de malta y aromas a cereal. Su amargor es bajo. El final es seco, ligeramente dulce.",
        abv: "5.6%",
        ibu: "35",
        gradient: `from-[${brand.green}] to-[${brand.black}]`,
        image: "/etiquetas/golden.png",
    },
    {
        id: "scottish",
        name: "Scottish",
        style: "Scottish",
        description:
            "Cerveza roja de fermentación alta, con aroma dulce y sabores a caramelo flan y bizcocho. De color rojizo y amargor bajo, se distingue por un pronunciado carácter maltoso y una terminación ligeramente dulce proveniente de maltas especiales.",
        abv: "4.8%",
        ibu: "18",
        gradient: `from-[${brand.green}] to-[${brand.black}]`,
        image: "/etiquetas/scottish.png",
    },
    {
        id: "ipa-de-cobre",
        name: "Ipa de Cobre",
        style: "IPA de cobre",
        description:
            `Es una Hazy IPA, de color cobre y amargos medio-alto. Debido a la maltosidad y turbidez caracteristica, resulta más compleja que las IPAs tradicionales. La etiqueta fue creada por la artista de San Andrés de las Sierras, Liliana Puliti, con una ilustración en acuarela y tinta china. Busca poner en valor a la IGUANA DE COBRE especiae que se encuentra en pelitro critico de extinción. Declarada Monumento Natural, habita únicamente en las Sierras de Ventana`,
        abv: "4.8%",
        ibu: "18",
        gradient: `from-[${brand.green}] to-[${brand.black}]`,
        image: "/etiquetas/ipa_de_cobre.png",
    },
    {
        id: "oro-de-abeja",
        name: "Oro de Abeja",
        style: "Oro de Abeja",
        description:
            `Una clásica honey, elaborada con miel de El Rancho de la Loma, de Sierra de la Ventana, lo que le aporta un perfil suave, aromático y dulce. De cuerop ligero a medio, presenta notas florales y maltosas, con un color dorado. Es refrescante, fácil de tomar y marida bien con platos suaves y postres. La botella está ilustrada por el artista de Villa Ventana Sergio Pérez. Refleja las colmenas, la abeja y de fondo el cerro Tres Picos - el más alto de la provincia de Buenos Aires -, paisaje típico de nuestra comarca.`,
        abv: "4.8%",
        ibu: "18",
        gradient: `from-[${brand.green}] to-[${brand.black}]`,
        image: "/etiquetas/oro_de_abeja.png",
    },
    {
        id: "diabolicus-porter",
        name: "Diabolicus Porter",
        style: "Diabolicus Porter",
        description:
            "Cerveza de color marrón oscuro con buena retención de espuma color canela. Las maltas especiales aportan cremosidad y sabores tostados con un perfil de chocolate y café. De nuestras variedades, es la de mayor graduación alcohólica. La etiqueta de este estilo, está intervenida por el artista Enzo Frattini de Saldungaray, inspirada en el Sapito de las Sierras, especie nativa de nuestro sistema de Ventania.",
        abv: "4.8%",
        ibu: "18",
        gradient: `from-[${brand.green}] to-[${brand.black}]`,
        image: "/etiquetas/diabolicus.png",
    },
];
