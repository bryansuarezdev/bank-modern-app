import { Link } from 'react-router'

const Button = ({ styles = '', to = '/product', children = 'Explore product' }) => (
  <Link to={to} className={`inline-block rounded-[10px] bg-blue-gradient px-6 py-4 font-poppins text-[18px] font-medium text-primary transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-secondary ${styles}`}>
    {children}
  </Link>
)

export default Button
