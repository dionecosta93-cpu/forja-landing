import styles from './PhoneFrame.module.css'

export default function PhoneFrame({ children, glow = true, className = '', width }) {
  return (
    <div
      className={`${styles.wrap} ${glow ? styles.glow : ''} ${className}`}
      style={width ? { '--phone-w': width } : undefined}
    >
      <div className={styles.frame}>
        <div className={styles.notch} aria-hidden="true" />
        <div className={styles.screen}>{children}</div>
      </div>
    </div>
  )
}
