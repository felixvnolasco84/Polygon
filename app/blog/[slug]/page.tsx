import Image, { StaticImageData } from "next/image";
import UXUI from "@/public/images/Customers/UX-UI-Blog.png";
import VIDEO from "@/public/images/Customers/Video_Blog.png";
import CONTENIDO from "@/public/images/Customers/Contenido_Blog.png";
import TipTapOnlyContent from "@/components/TipTapOnlyContent/TipTapOnlyContent";
import GridBlogsRecommendations from "@/components/Grid/GridBlogsRecommendations";

type Blog = {
  title: string;
  slug: string;
  image: StaticImageData;
  content: string;
};

const blogs: Blog[] = [
  {
    title: "Guía completa de SEO para principiantes",
    slug: "guia-completa-de-seo-para-principiantes",
    image: CONTENIDO,
    content:
      "<p>El SEO (Search Engine Optimization) es una herramienta fundamental para cualquier estrategia de marketing digital. Esta guía está diseñada para principiantes que buscan comprender los conceptos básicos del SEO y cómo implementarlos para mejorar la visibilidad en línea.</p><p></p><h3><strong>Conceptos Básicos del SEO:</strong></h3><p><strong>Palabras Clave:</strong> La base del SEO. Identifica y utiliza palabras clave relevantes para tu negocio. </p><p><strong>SEO On-Page:</strong> Optimización de elementos dentro de tu sitio web, como títulos, meta descripciones y contenido. </p><p><strong>SEO Off-Page:</strong> Factores externos como enlaces entrantes (backlinks) que afectan el ranking de tu sitio. </p><p> </p><h3><strong>Técnicas Avanzadas de SEO:</strong></h3><p><strong>Optimización de Imágenes:</strong> Utiliza nombres de archivos descriptivos y textos alternativos (alt text). </p><p><strong>SEO Técnico:</strong> Asegúrate de que tu sitio web sea fácil de rastrear por los motores de búsqueda. </p><p><strong>Contenido de Calidad:</strong> Crea contenido valioso y relevante que responda a las preguntas de tus usuarios. </p><p></p><h3><strong>Herramientas Útiles para el SEO:</strong></h3><p><strong>Google Analytics:</strong> Para monitorear el tráfico del sitio web.</p><p><strong>Google Search Console:</strong> Para rastrear el rendimiento de tu sitio en los resultados de búsqueda. </p><p><strong>Ahrefs:</strong> Para analizar enlaces entrantes y la competencia. </p><p></p><p>El SEO es una estrategia continua que requiere tiempo y esfuerzo. Sin embargo, los beneficios de una mejor visibilidad en los motores de búsqueda y un aumento en el tráfico orgánico hacen que valga la pena la inversión.</p>",
  },
  {
    title: "La importancia del UX/UI en la retención de usuarios",
    slug: "la-importancia-del-ux-ui-en-la-retencion-de-usuarios",
    image: UXUI,
    content:
      "<p>En el mundo digital actual, la experiencia del usuario (UX) y la interfaz de usuario (UI) juegan un papel crucial en la retención de usuarios. Un diseño eficiente no solo atrae a los usuarios, sino que también los mantiene comprometidos y satisfechos, lo que resulta en una mayor lealtad y conversiones.</p><p></p><h3><strong>El Impacto del UX/UI en la Retención de Usuarios:</strong></h3><p>Un buen diseño de UX/UI puede marcar la diferencia entre un usuario que abandona rápidamente tu sitio web y uno que se convierte en un cliente fiel. Las estadísticas muestran que el 88% de los usuarios son menos propensos a regresar a un sitio web después de una mala experiencia.</p><p></p><h3><strong>Elementos Clave de un Buen Diseño UX/UI:</strong></h3><p><strong>Facilidad de Navegación:</strong> Un sitio web debe ser intuitivo y fácil de navegar.</p><p><strong>Tiempo de Carga Rápido:</strong> Los usuarios esperan que las páginas se carguen en menos de 3 segundos.</p><p><strong>Diseño Atractivo y Coherente:</strong> Una apariencia visual atractiva y consistente mantiene a los usuarios interesados.</p><p><strong>Contenido Relevante y Claro:</strong> La información debe ser fácil de encontrar y comprender.</p><p></p><h3><strong>Estudios de Caso de Sitios Web con Excelente UX/UI:</strong></h3><p><strong>Apple:</strong> Con su diseño minimalista y navegación intuitiva, Apple proporciona una experiencia de usuario sin problemas.</p><p><strong>Airbnb:</strong> Con su interfaz limpia y procesos de reserva sencillos, Airbnb ofrece una experiencia de usuario satisfactoria.</p><p></p><p>Invertir en un buen diseño de UX/UI no solo mejora la experiencia del usuario, sino que también aumenta la retención y la lealtad de los clientes. A medida que el entorno digital continúa evolucionando, la importancia del UX/UI solo seguirá creciendo.</p>",
  },
  {
    title: "El Poder del Video Marketing en las Redes Sociales",
    slug: "el-poder-del-video-marketing-en-las-redes-sociales",
    image: VIDEO,
    content:
      "<p>El video marketing se ha convertido en una herramienta poderosa en el arsenal de cualquier especialista en marketing digital. Los videos no solo aumentan el engagement en las redes sociales, sino que también mejoran la retención de información y las conversiones.</p><p></p><h3><strong>Beneficios del Video Marketing:</strong></h3><p><strong>Mayor Engagement:</strong> Los videos tienden a recibir más likes, comentarios y compartidos que otros tipos de contenido.</p><p><strong>Mejor Retención de Información:</strong> Los usuarios retienen el 95% de un mensaje cuando lo ven en un video, en comparación con solo el 10% cuando lo leen en texto.</p><p><strong>Aumento de Conversiones: </strong>Las páginas de destino con videos pueden aumentar las conversiones en un 80% .</p><p></p><h3><strong>Estrategias para el Video Marketing en Redes Sociales:</strong></h3><p><strong>Videos Cortos y Concisos:</strong> Mantén los videos cortos para captar la atención rápidamente.</p><p><strong>Historias en Instagram y Facebook:</strong> Utiliza las historias para contenido detrás de escenas y promociones rápidas.</p><p><strong>Contenido en Vivo:</strong> Los videos en vivo pueden generar un alto nivel de interacción y participación en tiempo real.</p><p> </p><h3><strong>Ejemplos de Campañas Exitosas:</strong></h3><p><strong>GoPro: </strong>Con su contenido generado por usuarios, GoPro ha construido una comunidad sólida y comprometida.</p><p><strong>Tasty de BuzzFeed:</strong> Sus videos de recetas rápidas y fáciles han alcanzado millones de visualizaciones y compartidos.</p><p></p><p>El video marketing es una estrategia esencial para cualquier marca que busque aumentar su presencia y engagement en las redes sociales. Con la planificación y ejecución adecuadas, los videos pueden transformar la manera en que te conectas con tu audiencia.</p>",
  },
];

export default function page({ params }: { params: { slug: string } }) {
  const post = blogs.find((blog) => blog.slug == params.slug);
  return (
    <div className="mx-auto my-12 flex max-w-5xl flex-col gap-12 px-4">
      <div className="flex flex-col gap-2">
        <div className="relative aspect-square h-48 w-full overflow-hidden rounded-md shadow-sm lg:h-64">
          <Image
            src={post?.image as StaticImageData}
            layout="fill"
            objectFit="cover"
            alt="Blog Image"
          />
          <div className="absolute bottom-0 left-0 right-0 flex h-full w-full items-end bg-[#150C14] bg-opacity-10">
            <h1 className="p-4 text-2xl text-white lg:p-8">{post?.title}</h1>
          </div>
        </div>
        <TipTapOnlyContent content={post?.content as string} />
      </div>
      <GridBlogsRecommendations currentBlog={params.slug} />
    </div>
  );
}
