import FollowRecommended from "./_component/FollowRecommended";
import NavMenu from "./_component/NavMenu";
import RQProvider from "./_component/RQProvider";
import TrendSection from "./_component/TrendSection";


interface Props {
    children: React.ReactNode;
    modal: React.ReactNode;
}

export default function AfterLoginLayout({ children, modal }: Props) {
    return (
        <>
            <div className="grid grid-cols-afterloginLayout">
                <NavMenu/>

                <RQProvider>
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
                </RQProvider>
            </div>
            {modal}
        </>
    )
}