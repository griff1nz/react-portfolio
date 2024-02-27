function Modal(props) {
    function confirm() {
        props.onClick();
    }
    return (
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded fixed top-1/2 left-1/2 p-5" onClick={confirm}>
            Are you sure?
        </button>
    )
}
export default Modal;