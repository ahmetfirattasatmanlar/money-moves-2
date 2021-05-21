import AppWrapper from "components/_common/app-wrapper";
import Link from "next/link";
import ActivityCard from "components/_common/ActivityCard";

export default function Profile() {
  return (
    <AppWrapper withNav={true}>
      Dylan Robinson
      <Link href="/verify">
        <a>Verify now</a>
      </Link>
    </AppWrapper>
  );
}
