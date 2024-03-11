type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  className?: string
}

const Button = ({ children, disabled, onClick, className }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${className} rounded border disabled:pointer-events-none disabled:bg-inherit disabled:text-font-primary text-font-primary px-3 py-2 font-medium cursor-pointer hover:bg-white hover:text-black transition ease-in-out duration-500`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
