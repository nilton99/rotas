import { Link } from 'react-router';

export default function About() {
  return <section>
    <p className="eyebrow">SOBRE</p>
    <h1>Um projeto para <span>aprender fazendo.</span>
    </h1>
    <div className="info-panel">
      <h2>O que você aprendeu praticando?
      </h2>
      <ul>
        <li>Definir caminhos com Route e Routes.
        </li>
        <li>Navegar com Link e NavLink.
        </li>
        <li>Ler parâmetros usando useParams.</li>
        <li>Exibir uma tela de carregamento com Suspense.
        </li>
        <li>Tratar caminhos inválidos com a rota *.
        </li>
      </ul>
    </div>
    <Link className="button primary" to="/contact">Ir para Contato →
    </Link>
  </section>;
}