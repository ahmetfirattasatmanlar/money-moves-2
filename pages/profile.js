import AppWrapper from "components/_common/app-wrapper";
import Link from "next/link";
import TopBar from 'components/_common/top-bar'
import Features from "components/_common/Features";
import ProfileCard from "components/_common/profile-card";

export default function Profile() {
  return (
    <AppWrapper nav>
      <div className="bg-gradient-dark text-white pb-5">
        <TopBar dark />
        <div className="px-3 text-center">
          <ProfileCard />
        </div>
        <div className="px-5 pt-3 d-flex align-items-center">
          <span>Things to do</span>
          <span className="ml-auto bg-white text-muted rounded-lg px-2 ">1 of 3</span>
        </div>
      </div>

      <div className="bg-light px-3 shadow">
        <div className="card shadow-sm mt-neg-lg rounded-lg border-0 mb-4">
          <div className="card-body d-flex">
            <div className="mr-3">
              <img src="/icon-verify-identity.svg" alt="" />
            </div>
            <div>
              <strong>Verify your identity</strong>
              <p><small>Take a government ID & selfie photo to get verified</small></p>
              <Link href="/verify">
                <a className="btn btn-primary rounded-lg px-3 py-2">Verify now</a>
              </Link>
            </div>
          </div>
        </div>

        <Features
          cards={["Saving Goals", "Budgets", "Subscriptions"]}
          title="More Features"
        />

        <Features cards={["Invite Friends", "Settings"]} />

      </div>
    </AppWrapper>
  );
}
