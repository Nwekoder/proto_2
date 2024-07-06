import AppLayout from "../components/AppLayout"
import AuthenticatedWrapper from "../components/AuthenticatedWrapper"

export default function Home() {
	return (
		<AuthenticatedWrapper>
			<AppLayout>
				<div className="h-[300vh]">
					<p>Home</p>
				</div>
			</AppLayout>
		</AuthenticatedWrapper>
	)
}
