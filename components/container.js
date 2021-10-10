export default function Container({ className, children }) {
  return <div className={`${className} mx-3 sm:mx-5 lg:mx-10 mb-10 p-3 sm:p-5 lg:p-10 bg-black bg-opacity-75 boxGlow-black`}>{children}</div>
}
