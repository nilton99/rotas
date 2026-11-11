import { Link, useParams } from 'react-router';

const usuarios = {
  '1': { nome: 'Ana Silva', cargo: 'Desenvolvedora Front-end', emoji: '👩🏽‍💻', bio: 'Adora React, interfaces e experiências acessíveis.' },
  '2': { nome: 'Bruno Costa', cargo: 'Designer de Interfaces', emoji: '👨🏻‍🎨', bio: 'Cria layouts bonitos e fáceis de usar.' },
  '3': { nome: 'Carla Souza', cargo: 'Estudante de Tecnologia', emoji: '👩🏾‍🎓', bio: 'Aprendendo rotas, componentes e estados em React.' }
};

export default function User() {
  const { id } = useParams(); // O valor vem do endereço /user/:id
  const usuario = usuarios[id];
  if (!usuario) return <section><p className="eyebrow">PERFIL NÃO ENCONTRADO</p><h1>Usuário <span>desconhecido.</span></h1><p className="lead">Não encontramos o ID {id} nos dados de exemplo.</p><Link className="button primary" to="/">Ir para Home</Link></section>;
  return <section><p className="eyebrow">ROTA DINÂMICA: /user/{id}</p><h1>Perfil de <span>usuário</span></h1><div className="profile"><div className="avatar">{usuario.emoji}</div><div><h2>{usuario.nome}</h2><p className="role">{usuario.cargo}</p><p>{usuario.bio}</p><p className="id-note">Parâmetro recebido por useParams(): <code>{id}</code></p></div></div><Link className="button ghost" to="/">← Voltar</Link></section>;
}