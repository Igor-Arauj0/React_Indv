import React from "react";
import Slideshow from "../../components/slideShow";
import Card from "../../components/cardsHome";

export default function HomeInd() {
  const imagens = [
    "https://i.pinimg.com/originals/aa/bf/fb/aabffbe251df89bfa1b3d4a03c71008b.jpg",
    "https://images.alphacoders.com/900/900419.jpg",
    "https://t.ctcdn.com.br/QeieDVZ7aKkpV72skFq7HOb8TPY=/1200x675/smart/i254261.jpeg",
    "https://i.glbimg.com/og/ig/infoglobo/f/original/2013/09/06/breaking-bad.jpg",
    "https://igormiranda.com.br/wp-content/uploads/2023/05/breaking-bad-serie-elenco.jpg",
    "https://c4.wallpaperflare.com/wallpaper/490/199/637/breaking-bad-for-desktop-background-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/582/58/501/breaking-bad-walter-white-jesse-pinkman-wallpaper-preview.jpg",
    "https://www.wallpaperup.com/uploads/wallpapers/2013/08/20/136473/89620c3fe3f6b393b90487b29c9b9925-700.jpg",
    "https://www.coliseugeek.com.br/wp-content/uploads/2023/01/f7db7-clickwallpapers-breakingbad-4k-img2-min-scaled-1.jpg",
    "https://images6.alphacoders.com/321/321927.jpg",
  ];

  return (
    <>
      <Slideshow imagens={imagens} />
      <br />
      <br />
      <br />

      <Card />
    </>
  );
}
