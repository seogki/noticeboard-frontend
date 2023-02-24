import './MySider.scoped.scss'
interface Props {
  handleCollapseChange: Function
}
function MySider({ handleCollapseChange }: Props) {
  return (
    <div
      className="aside"
      onClick={(e) => {
        e.preventDefault()
        handleCollapseChange(true)
      }}
    >
      <aside onClick={(e) => e.stopPropagation()}></aside>
    </div>
  )
}

export default MySider
