import BackButton from 'components/_common/back-button'
import { useRouter } from 'next/router'

export default function TopBar({ logo = true, back = true, dark = false, center = false }) {
  const route = useRouter();

  return (
    <div className={`py-3 px-3 mb-2`} >
      {(route.pathname === '/home' || !!!back) ? undefined : <span><BackButton {...(dark && { dark })} /></span>}
      {logo ? <div className={`${center ? 'text-center' : undefined}`}>
        {dark ? <img src="/logo-white.svg" /> : <img src="/logo-moneymoves.svg" />}
      </div> : undefined}
      {/* {icon && <img src={`/${icon}.svg`} />} */}
    </div>
  );
}
