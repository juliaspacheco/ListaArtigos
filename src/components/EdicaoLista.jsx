import React, { useState } from 'react';

const ItemArtigo = ({ artigo, index, onEditar, onRemover }) => {
  const [editando, setEditando] = useState(false);
  const [novoValor, setNovoValor] = useState(artigo);

  const handleEditar = () => {
    setEditando(true);
  };

  const handleSalvar = () => {
    onEditar(index, novoValor);
    setEditando(false);
  };

  const handleCancelar = () => {
    setNovoValor(artigo);
    setEditando(false);
  };

  const handleChange = (e) => {
    setNovoValor(e.target.value);
  };

  return (
    <li>
      {editando ? (
        <div class="botaoSalvarCancelar">
          <input type="text" value={novoValor} onChange={handleChange} />
          <button onClick={handleSalvar}>Salvar</button>
          <button class="cancelar"onClick={handleCancelar}>Cancelar</button>
        </div>
      ) : (
        <div>
          {artigo}
          <button onClick={handleEditar}>Editar</button>
          <button onClick={() => onRemover(index)}>Remover</button>
        </div>
      )}
    </li>
  );
};

export default ItemArtigo;