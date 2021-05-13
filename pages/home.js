import Link from 'next/link'
import AppWrapper from 'components/_common/app-wrapper'

export default function Home() {
  return (
    <AppWrapper>
      Loan Balance
      $292,987.56

      Get a new loan now

      Available Credit $15,239.94



      <Link href="/transfer">
        <a>Transfer funds- `{'>'}`</a>
      </Link>
    </AppWrapper>



  )
}
