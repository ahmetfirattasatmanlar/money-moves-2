import AppWrapper from 'components/_common/app-wrapper'
import Link from 'next/link'

export default function Profile() {
  return (
    <AppWrapper>
      Dylan Robinson

      <Link href="/verify">
        <a>Verify now</a>
      </Link>

    </AppWrapper>
  )
}
