import Nav from '@admin/Nav'
import SectionTabs from '@admin/SectionTabs'


export default function Admin () {

	async function logout () {
		// TODO: Implement logic later once auth api logic is done
		console.log("Logged out!!")
	}
	

	return (
		<section id="admin-page">
			<Nav logout={ logout } />

			<main className="admin-page">
				<SectionTabs />
			</main>
		</section>
	)
}