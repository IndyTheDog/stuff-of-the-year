import DialogData from '../models/DialogData'

const Message = (props: { data: DialogData }) => {
  const { open, title, message, closeText, complete } = props.data
  const buttonClass =
    'bg-tertiary-bg text-tertiary-color border-tertiary-color hover:bg-tertiary-color hover:text-tertiary-bg hover:border-tertiary-bg'

  return (
    <dialog
      id="vote-result-dialog"
      open={open}
      className="bg-secondary-color rounded-sm fixed top-1/3 p-0.5"
    >
      <div className="bg-secondary-bg text-secondary-color rounded-sm py-3 px-10 flex flex-col items-center">
        <span className="font-semibold">{title}</span>
        <span className="py-5">{message}</span>
        <button className={`${buttonClass} py-1 px-5 rounded-md font-semibold`} onClick={complete}>
          {closeText}
        </button>
      </div>
    </dialog>
  )
}

export default Message
