import { NavLink } from 'react-router';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="eyebrow">NAVEGAÇÃO EXTRA</p>
      <NavLink to="/user/1">👤 Perfil 1</NavLink>
      <NavLink to="/user/2">👤 Perfil 2</NavLink>
      <NavLink to="/user/3">👤 Perfil 3</NavLink>
      <NavLink to="/pagina-inexistente">⚠ Testar página 404</NavLink>
      <div className="sidebar-tip">💡 Cada perfil usa a mesma rota, com um ID diferente.</div>
    </aside>
  );
}