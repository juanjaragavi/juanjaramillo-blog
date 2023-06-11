function Columna({ children, style }) {
  return (
    <div className="flex flex-col items-center justify-center my-2 sm:mx-2 sm:w-full sm:px-3 pb-2 sm:pt-3 border border-gray-900 dark:border-white rounded-3xl" style={style}>
        {children}
    </div>
  )
}
export default Columna;
