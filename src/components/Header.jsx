import { NavLink } from 'react-router';

export default function Header() {
  const estiloLink = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';
  return (
    <header className="header">
      <NavLink to="/" className="brand">◈ Rotas<span>naPrática</span></NavLink>
      <nav aria-label="Navegação principal">
        <NavLink to="/" end className={estiloLink}>Home</NavLink>
        <NavLink to="/about" className={estiloLink}>Sobre</NavLink>
        <NavLink to="/contact" className={estiloLink}>Contato</NavLink>
      </nav>
    </header>
  );
}