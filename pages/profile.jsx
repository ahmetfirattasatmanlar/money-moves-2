import AppWrapper from "components/_common/app-wrapper";
import ContentBody from "components/_common/ContentBody";
import Link from "next/link";
import LogoContainer from "components/_common/LogoContainer";
import Features from "components/_common/Features";
import ProfileCard from "components/_common/ProfileCard";

export default function Profile() {
  return (
    <AppWrapper withNav={true}>
      <LogoContainer />
      <ProfileCard />
      <ContentBody>
        <Features
          cards={["Saving Goals", "Budgets", "Subscriptions"]}
          title="More Features"
        />

        <Features cards={["Invite Friends", "Settings"]} />
        <Link href="/verify">
          <a>Verify now</a>
        </Link>
      </ContentBody>
    </AppWrapper>
  );
}
