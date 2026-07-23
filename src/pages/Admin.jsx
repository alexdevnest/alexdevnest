import Nav from '@admin/Nav'
import SectionTabs from '@admin/SectionTabs'


export default function Admin () {
	
	return (
		<section id="admin-page">
			<Nav />

			<main className="admin-page">
				<SectionTabs />
			</main>
		</section>
	)
}