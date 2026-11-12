import { Rainbow } from './Decor'

export default function Logo() {
  return (
    <span className="logo">
      <Rainbow className="logo-mark" />
      <span className="logo-text">
        <span className="logo-name">Minnie <em>Kiddies</em></span>
        <span className="logo-sub">School essentials</span>
      </span>
    </span>
  )
}
