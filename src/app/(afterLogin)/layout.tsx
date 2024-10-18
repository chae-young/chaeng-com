import FollowRecommended from "./_component/FollowRecommended";
import NavMenu from "./_component/NavMenu";
import RQProvider from "./_component/RQProvider";
import TrendSection from "./_component/TrendSection";
import RightSearhZone from "./search/_component/RightSearhZone";


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
                        <RightSearhZone />
                        <TrendSection/>
                        <section>
                            <h2>팔로우 추천</h2>
                            <ul>
                                <FollowRecommended />
                            </ul>
                        </section>
                    </aside>
                    {modal}
                </RQProvider>
            </div>
        </>
    )
}