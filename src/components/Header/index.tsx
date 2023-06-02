import * as S from './styles'
import { RootReducer } from '../../store'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
const Header = () => {
  const items = useSelector((state: RootReducer) => state.carrinho.itens)

  const valorTotal = items.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} />
        <span>
          {items.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
