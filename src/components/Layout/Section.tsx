type Props = {
  className?: string
  children: React.ReactNode
  id?: string
  icon?: string
  title?: string
}

const Section = ({ children, className, id, icon, title }: Props) => {
  return (
    <section
      id={id}
      className={`block ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
    >
      {title && (
        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white">
          {icon && <i className={icon}></i>}
          <span>{title}</span>
        </h2>
      )}
      {children}
    </section>
  )
}
export default Section
