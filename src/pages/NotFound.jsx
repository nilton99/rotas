import { Link } from 'react-router';

export default function NotFound() {
  return <section className="not-found"><div className="huge-404">404</div><h1>Ops! Página não encontrada.</h1><p className="lead">Esta URL não corresponde a nenhuma das páginas cadastradas.</p><Link className="button primary" to="/">Voltar para Home →</Link></section>;
}