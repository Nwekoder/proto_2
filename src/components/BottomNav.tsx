import { NavLink } from "react-router-dom";

export default function BottomNav() {
	return (
		<nav className="fixed bottom-0 left-0 w-full h-16 bg-yellow-500">
			<div className="w-11/12 mx-auto flex items-center justify-between">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/camera">Camera</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </div>
		</nav>
	)
}
