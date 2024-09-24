interface Props {
    children: React.ReactNode;
    modal: React.ReactNode;
}
export default function beforeLoginLayout({ children, modal }: Props) {
    return <>{children} {modal}</>;
}