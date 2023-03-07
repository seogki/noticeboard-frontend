import './MySider.scoped.scss'
import { UnorderedListOutlined } from '@ant-design/icons'
interface Props {
  handleCollapseChange: Function
}
function MySider({ handleCollapseChange }: Props) {
  return (
    <div
      className="container"
      onClick={(e) => {
        e.preventDefault()
        handleCollapseChange(true)
      }}
    >
      <aside onClick={(e) => e.stopPropagation()}>
        <h3>쉐어</h3>

        <UnorderedListOutlined></UnorderedListOutlined>
        <label>게시판</label>
      </aside>
    </div>
  )
}

export default MySider
