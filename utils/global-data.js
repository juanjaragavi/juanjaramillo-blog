export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Juan Jaramillo';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : '¡Bienvenid@s al Blog!';
    const blogSubtitle = process.env.BLOG_SUBTITLE
    ? decodeURI(process.env.BLOG_SUBTITLE)
    : 'Aquí encontrarás todas las novedades en lo relacionado con Inteligencia Artificial, Machine y Deep Learning, Software y Hardware y en general, todo lo relacionado con noticias de Tecnología, además de algunos análisis, artículos y opiniones escritos por mi.';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  return {
    name,
    blogTitle,
    blogSubtitle,
    footerText,
  };
};
