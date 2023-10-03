export const perfilReducer = (state, action) => {
  switch (action.type) {
    case 'ADICIONA_PERFIL': {

      const perfilExiste = state.filter(user => (
        user.id === action.payload.id
      ));

      if (!perfilExiste.length) {
        return [...state, action.payload];
      }
      return state;
    }
    default:
      return state;
  }
}