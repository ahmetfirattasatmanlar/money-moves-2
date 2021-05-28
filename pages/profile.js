import AppWrapper from "components/_common/app-wrapper";
import Link from "next/link";
import Features from "components/_common/Features";
import ProfileCard from "components/_common/ProfileCard";

export default function Profile() {
  return (
    <AppWrapper nav>
      <ProfileCard />
        <Features
          cards={["Saving Goals", "Budgets", "Subscriptions"]}
          title="More Features"
        />

        <Features cards={["Invite Friends", "Settings"]} />
        <Link href="/verify">
          <a>Verify now</a>
        </Link>
    </AppWrapper>
  );
}
