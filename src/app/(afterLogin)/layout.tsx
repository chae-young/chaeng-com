import FollowRecommended from "./_component/FollowRecommended";
import NavMenu from "./_component/NavMenu";
import TrendSection from "./_component/TrendSection";


interface Props {
    children: React.ReactNode;
}

export default function AfterLoginLayout({ children }: Props) {
    return (
        <div className="grid grid-cols-afterloginLayout">
            <NavMenu/>
            <main>
                {children}
            </main>
            <aside>
                <TrendSection/>
                <section>
                    <h2>팔로우 추천</h2>
                    <ul>
                        <FollowRecommended />
                    </ul>
                </section>
            </aside>
        </div>
    )
}