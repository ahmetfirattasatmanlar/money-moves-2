import BackButton from 'components/_common/back-button'
import { useRouter } from 'next/router'

export default function TopBar({ logo = true, back, dark = false }) {

  const route = useRouter();
  console.log(route.pathname)

  return (
    <div className="py-3 px-4 mb-2" >
      {(back || route.pathname !== '/home') ? <BackButton /> : undefined}
      {logo ? (
        dark ? <img src="/logo-white.svg" /> : <img src="/logo-moneymoves.svg" />
      ) : undefined}
      {/* {icon && <img src={`/${icon}.svg`} />} */}
    </div>
  );
}
