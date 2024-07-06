import AuthenticatedWrapper from "../components/AuthenticatedWrapper";

export default function Profile() {
    return (
        <AuthenticatedWrapper>
            <p>Profile</p>
        </AuthenticatedWrapper>
    )
}