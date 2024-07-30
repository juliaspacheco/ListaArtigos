import React, { useState, useCallback } from 'react';
import ItemArtigo from './EdicaoLista';

const ListaArtigos = () => {
  const [artigos, setArtigos] = useState([]);
  const [novoArtigo, setNovoArtigo] = useState('');

  const adicionarArtigo = useCallback(() => {
    if (novoArtigo.trim()) {
      setArtigos((prevArtigos) => [...prevArtigos, novoArtigo]);
      setNovoArtigo('');
    }
  }, [novoArtigo]);

  const removerArtigo = useCallback((index) => {
    setArtigos((prevArtigos) => {
      const novaLista = [...prevArtigos];
      novaLista.splice(index, 1);
      return novaLista;
    });
  });

  const editarArtigo = useCallback((index, novoValor) => {
    setArtigos((prevArtigos) => {
      const novaLista = [...prevArtigos];
      novaLista[index] = novoValor;
      return novaLista;
    });
  });

  return (
    <div>
      <input
        type="text"
        value={novoArtigo}
        onChange={(e) => setNovoArtigo(e.target.value)}
        placeholder="Novo Artigo"
      />
      <button onClick={adicionarArtigo}>Adicionar</button>

      <ul>
        {artigos.map((artigo, index) => (
          <ItemArtigo
            key={index}
            artigo={artigo}
            index={index}
            onEditar={editarArtigo}
            onRemover={removerArtigo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListaArtigos;