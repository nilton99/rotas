import { Link } from 'react-router';

export default function Contact() {
  return <section><p className="eyebrow">CONTATO</p><h1>Vamos <span>conversar?</span></h1><p className="lead">Página de contato fictícia criada para demonstrar uma terceira rota no aplicativo.</p><div className="info-panel"><h2>Fale com a equipe</h2><p>📧 contato@exemplo.com</p><p>📍 Projeto didático — sem envio real de mensagens.</p></div><Link className="button primary" to="/">Voltar para Home →</Link></section>;
}