<script>
	import { page } from '$app/stores';
	import arrowDown from '$lib/images/arrow_down_fill.svg';
	import searchIcon from '$lib/images/search_line.svg';
	import kw from '$lib/images/kw.jpeg';
</script>

<header>
	<div class="header-container">
		<a class="logo" href="/">
			<img src={kw} alt="Kw" height="32" width="32" />
		</a>
		<div class="navigations">
			<nav>
				<ul class="nav-bar">
					<li>
						<button class="nav-button">
							<span>Product</span>
							<img class="nav-icon" src={arrowDown} alt="arrow down" height="16" width="16" />
						</button>
					</li>
					<li>
						<button class="nav-button">
							<span>Solutions</span>
							<img class="nav-icon" src={arrowDown} alt="arrow down" height="16" width="16" />
						</button>
					</li>
					<li>
						<button class="nav-button">
							<span>Open Source</span>
							<img class="nav-icon" src={arrowDown} alt="arrow down" height="16" width="16" />
						</button>
					</li>
					<li>
						<button class="nav-button">
							<span>Pricing</span>
						</button>
					</li>
				</ul>
			</nav>
			<div class="sub-nav">
				<div class="input-div">
					<!-- <input type="search" placeholder="Search or jump to..." /> -->
					<button class="search-button">
						<div class="search-icon">
							<img src={searchIcon} alt="search" height="16" width="16" />
						</div>
						<span class="placeholder">Search or jump to...</span>
						<div class="slash">/</div>
					</button>
				</div>
				<div class="signin-div">
					<a href="/" class="sign-in">Sign in</a>
					<a href="/" class="sign-up">Sign up</a>
				</div>
			</div>
		</div>
	</div>
</header>

<!-- <header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header> -->

<style lang="scss">
	header {
		background-color: #24292e;
		color: #fff;
		padding: 16px 0;
		.header-container {
			display: flex;
			padding: 0 16px;
			gap: 16px;
			align-items: center;
			.logo {
				img {
					border-radius: 50%;
				}
			}
			.navigations {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				.nav-bar {
					display: flex;
					align-items: center;
					.nav-button {
						font-size: 16px;
						display: flex;
						align-items: center;
						gap: 4px;
						color: #fff;
					}
				}
				.sub-nav {
					display: flex;
					align-items: center;
					gap: 24px;
					.search-button {
						width: 100%;
						color: #ffffffbf;
						border: solid 1px #57606a;
						border-radius: 6px;
						padding: 5px 12px;
						display: flex;
						align-items: center;
						gap: 8px;
						.placeholder {
							width: 200px;
							display: flex;
							align-items: center;
							justify-content: flex-start;
						}
						.slash {
							color: #ffffffbf;
							border: solid 1px #57606a;
							border-radius: 6px;
							width: 20px;
							height: 20px;
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
					.signin-div {
						font-size: 16px;
						display: flex;
						gap: 8px;
						.sign-in,
						.sign-up {
							border: solid 1px transparent;
							padding: 8px 16px;
							border-radius: 6px;
						}
						.sign-up {
							border-color: #fff;
						}
					}
				}
			}
		}
	}
</style>
