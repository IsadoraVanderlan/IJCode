import Banner from '@/components/Sections/banner/Banner';
import Beneficios from '@/components/Sections/beneficios/Beneficios';
import Depoimentos from '@/components/Sections/depoimentos/Depoimentos';
import Formulario from '@/components/Sections/formulario/Formulario';
import Footer from '@/components/Sections/footer/Footer';
import Header from '@/components/Sections/header/Header';
import Promocao from '@/components/Sections/promoção/Promocao';
import Vantagens from '@/components/Sections/vantagens/Vantagens';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Vantagens />
      <Promocao />
      <Beneficios />
      <Depoimentos />
      <Formulario />
      <Footer />
    </main>
  );
}
