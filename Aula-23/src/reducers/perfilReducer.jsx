export const perfilReducer = (listaDePerfis, action) => {
  switch (action.type) {
    case 'ADICIONA_PERFIL': {
      const perfilExiste = listaDePerfis.filter(perfil => {
        perfil.id === action.payload.id
      });

      if (!perfilExiste.length) {
        return [...listaDePerfis, action.payload];
      }
      return listaDePerfis;
    }
    default:
      return listaDePerfis;
  }
}