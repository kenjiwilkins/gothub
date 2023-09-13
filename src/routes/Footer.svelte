<script>
	import kw from '$lib/images/kw.jpeg';
	const footerNavItems = [
		'Terms',
		'Privacy',
		'Security',
		'Status',
		'Docs',
		'Contact GotHub',
		'Pricing',
		'API',
		'Training',
		'Blog',
		'About'
	];
</script>

<footer class="footer">
	<div class="footer-container">
		<div class="org-info-area">
			<a class="logo" href="/">
				<img src={kw} alt="Kw" height="32" width="32" />
			</a>
			<div class="org-info">
				<div class="org-sub">© Kenji Wilkins.</div>
			</div>
		</div>
		<nav class="footer-nav">
			<ul class="footer-nav-ul">
				{#each footerNavItems as item}
					<li>
						<a href="/">{item}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</footer>

<style lang="scss">
	.footer {
		max-width: 100%;
		padding: 0 16px;
		.footer-container {
			width: 100%;
			display: flex;
			flex-wrap: nowrap;
			padding-top: 40px;
			padding-bottom: 8px;
			margin-top: 40px;
			border-top: 1px solid #e1e4e8;
			.org-info-area {
				min-width: 25%;
				display: flex;
				align-items: center;
				.logo {
					margin-right: 8px;
					img {
						border-radius: 50%;
					}
				}
				.org-info {
					margin-right: 8px;
					color: #6e7781;
					font-size: 12px;
				}
			}
			.footer-nav {
				min-width: 66.67%;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				.footer-nav-ul {
					display: flex;
					justify-content: space-between;
					list-style: none;
					font-size: 12px;
					a {
						color: #2f86ea;
						&:hover {
							text-decoration: underline;
						}
					}
				}
			}
		}
	}
</style>
