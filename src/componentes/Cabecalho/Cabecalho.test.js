import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test('Deve renderizar o nome do usuário logado', () => {
  render(<Cabecalho />);
  const nomeUsuario = screen.getByText('Carlos Antônio Lima Júnior');
  expect(nomeUsuario).toBeInTheDocument();
});
