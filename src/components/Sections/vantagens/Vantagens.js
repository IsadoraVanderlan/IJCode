import React from 'react'
import styles from './vantagens.module.css'
import Button from '@/components/UI/Button';

const Vantagens = () => {
  return (
    <div className={styles.vantagens}>
      <h2>Vantagens de Contratar a IJCode</h2>

      <p className={styles.pvantagens}>No mundo digital em constante evolução, ter uma presença online sólida tornou-se essencial para empresas de todos os tamanhos e setores. Para nós não é diferente. A criação de um site é uma etapa crucial para estabelecer sua presença na internet e alcançar um público mais amplo.</p>

      <div>
        <ul className={styles.ulvantagens}>
          <li className={styles.livantagens}>
            <img src="/img/icons/confiavel.svg" alt="" />
            <h3>Credibilidade</h3>
            <p>Ter um site bem projetado e profissional transmite credibilidade aos clientes. Um site bem elaborado reflete o compromisso, qualidade e a excelência em seus serviços.</p>
          </li>
          <li>
          <img src="/img/icons/publico.svg" alt="" />
            <h3>Público Mais Amplo</h3>
            <p>A presença online amplia o alcance, permitindo-lhe alcançar um público global. Isso pode abrir oportunidades para novos clientes e parcerias em regiões anteriormente inacessíveis.</p>
          </li>
          <li className={styles.livantagens}>
          <img src="/img/icons/online.svg" alt="" />
            <h3>Visibilidade Online</h3>
            <p>A criação de um site permite a presença online 24 horas por dia, 7 dias por semana. Isso significa que os clientes em potencial podem encontrar informações sobre a empresa, produtos e serviços a qualquer momento, independentemente da localização ou horário.</p>
          </li>
          <li>
          <img src="/img/icons/clientes.svg" alt="" />
            <h3>Interação com Clientes</h3>
            <p>Um site oferece a oportunidade de interagir diretamente com os clientes, isso permite um contato valioso e estabeleça relacionamentos mais próximos com os clientes.</p>
          </li>
          <li className={styles.livantagens}>
          <img src="/img/icons/competitivo.svg" alt="" />
            <h3>Competitividade</h3>
            <p>Na era digital, a maioria das empresas já possui sites. Para manter-se competitiva no mercado, sua empresa deve estar presente online. Um site bem elaborado pode destacar a empresa da concorrência.</p>
          </li>
        </ul>
      </div>

      <img className={styles.imgdivisor} src="/img/connector.webp" alt="" />
      
    </div>
  )
}

export default Vantagens
