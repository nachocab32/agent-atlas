import { Layers3, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router'

const capabilities = [
  { icon: Layers3, label: 'CencoFlow' },
  { icon: Sparkles, label: 'Aceleradores' },
  { icon: Layers3, label: 'Arquetipos' },
  { icon: ShieldCheck, label: 'Gobernanza' },
]

function GitHubMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="23" height="23" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.54 1.06 1.54 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.91c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.92-2.35 4.78-4.58 5.04.36.32.68.92.68 1.85 0 1.34-.01 2.41-.01 2.74 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export function LoginPage() {
  return (
    <main className="login-page">
      <video className="login-page__video" autoPlay loop muted playsInline aria-hidden="true">
        <source src="/video/video-login.mp4" type="video/mp4" />
      </video>
      <div className="login-page__wash" aria-hidden="true" />

      <header className="login-page__header">
        <Link className="login-brand" to="/" aria-label="ATLAS, ir al portal">
          <img src="/atlas-symbol-rounded.svg" alt="" />
          <span>
            <strong>ATLAS</strong>
            <small>DIGITAL PRODUCT ACCELERATOR</small>
          </span>
        </Link>
      </header>

      <section className="login-page__hero" aria-labelledby="login-hero-title">
        <p className="login-page__overline">Digital Product Accelerator · Cencosud Tech</p>
        <h1 id="login-hero-title">
          Diseña, construye y opera productos digitales con <em>CencoFlow.</em>
        </h1>
        <ul className="login-page__capabilities" aria-label="Áreas disponibles en Atlas">
          {capabilities.map(({ icon: Icon, label }) => (
            <li key={label}><Icon aria-hidden="true" size={18} strokeWidth={2} />{label}</li>
          ))}
        </ul>
      </section>

      <div className="login-page__access">
        <section className="login-card" aria-labelledby="login-card-title">
          <div className="login-card__heading">
            <h2 id="login-card-title">Te damos la bienvenida a ATLAS</h2>
            <p>Inicia sesión para acceder a tu espacio de trabajo.</p>
          </div>

          <div className="login-card__actions">
            <Link className="login-button login-button--cencosud" to="/">
              <span className="microsoft-mark" aria-hidden="true"><i /><i /><i /><i /></span>
              Continuar con Cencosud
            </Link>
            <p className="login-card__hint">Usa tu cuenta corporativa de Microsoft.</p>
            <Link className="login-button login-button--github" to="/">
              <GitHubMark />
              Continuar con GitHub
            </Link>
          </div>

          <div className="login-card__divider" aria-hidden="true"><span />o<span /></div>
          <div className="login-card__guest">
            <Link to="/">Continuar como invitado</Link>
            <p>Sin una identidad verificada, algunas funciones podrían no estar disponibles.</p>
          </div>
        </section>

        {/* <div className="login-page__support">
          ¿Problemas para ingresar? <br></br>ATLAS requiere conexión a la VPN corporativa. <a href="mailto:soporte@cencosud.cl">Contactar soporte</a>
        </div> */}
      </div>

    </main>
  )
}
