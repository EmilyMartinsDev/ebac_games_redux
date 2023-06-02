import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}
const initialState: CarrinhoState = {
  itens: []
}
const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('item selecionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})
// payload sao as informaçoes sobre o objeto

export const { adicionar } = carrinhoSlice.actions //reducer
export default carrinhoSlice.reducer //estado do carrinho
