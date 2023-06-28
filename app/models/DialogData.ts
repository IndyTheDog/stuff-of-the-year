
export default interface DialogData {
    title: string
    message: string
    closeText: string
    open: boolean
    complete: () => void
}