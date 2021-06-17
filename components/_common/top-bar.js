import BackButton from "components/_common/back-button";
import { useRouter } from "next/router";

export default function TopBar({ logo = true, back = true, dark = false, center = false }) {
    const route = useRouter();
    const home = route.pathname === "/home";
    const margin = !home ? "mr-auto" : "";

    return (
        <div className="py-3 px-3 mb-2 d-flex justify-content-center">
            {home || !!!back ? undefined : (
                <span className="mr-auto">
                    <BackButton {...(dark && { dark })} />
                </span>
            )}
            {logo ? dark ? <img className={margin} src="/logo-white.svg" /> : <img className={margin} src="/logo-moneymoves.svg" /> : undefined}
            {/* {icon && <img src={`/${icon}.svg`} />} */}
        </div>
    );
}
