import { Link } from 'react-router';

export default function Home() {
  return (
    <section>
      <p className="eyebrow">PÁGINA INICIAL</p>
      <h1>Bem-vindo ao <span>Rotas</span></h1>
      <div className="actions"><Link className="button primary" to="/about">Conhecer o projeto →</Link><Link className="button ghost" to="/user/1">Ver perfil de exemplo</Link></div>
      <div className="feature-grid">
        <article className="feature"><div className="emoji">🧭</div><h3>React Router</h3><p>Navegação usando Routes, Route, Link e NavLink.</p></article>
        <article className="feature"><div className="emoji">⚡</div><h3>Lazy Loading</h3><p>Importação sob demanda com lazy e Suspense.</p></article>
        <article className="feature"><div className="emoji">🧩</div><h3>Layout comum</h3><p>Header, Sidebar e Footer compartilhados via Outlet.</p></article>
      </div>
    </section>
  );
}