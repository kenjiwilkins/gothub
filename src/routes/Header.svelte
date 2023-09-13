<script>
	import { page } from '$app/stores';
	import arrowDown from '$lib/images/arrow_down_fill.svg';
	import searchIcon from '$lib/images/search_line.svg';
	import kw from '$lib/images/kw.jpeg';
	import dropdownIcon from '$lib/images/work_line.svg';
	import { generateFakeHeadingWithSub, generateFakeHeadings } from '../utils';
	const titlesWithHeadings = generateFakeHeadingWithSub();
	const titlesWithoutHeadings = generateFakeHeadings();
	let isModalOpen = false;
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
							<img class="nav-icon" src={arrowDown} alt="arrow down" height="16px" width="16" />
						</button>
						<div class="dropdown">
							<ul class="dropdown-container">
								{#each titlesWithHeadings as title}
									<li class="dropdown-item">
										<div class="dropdown-icon">
											<img src={dropdownIcon} alt="dropdown icon" height="24" width="24" />
										</div>
										<div class="dropdown-content">
											<div class="dropdown-heading">{title.title}</div>
											<div class="dropdown-sub">{title.description}</div>
										</div>
									</li>
								{/each}
							</ul>
							<ul class="dropdown-container">
								{#each titlesWithoutHeadings as title}
									<li class="dropdown-item">
										{title.title}
									</li>
								{/each}
							</ul>
						</div>
					</li>
					<li>
						<button class="nav-button">
							<span>Solutions</span>
							<img class="nav-icon" src={arrowDown} alt="arrow down" height="16" width="16" />
						</button>
						<div class="dropdown">
							<ul class="dropdown-container">
								{#each titlesWithHeadings as title}
									<li class="dropdown-item">
										<div class="dropdown-icon">
											<img src={dropdownIcon} alt="dropdown icon" height="24" width="24" />
										</div>
										<div class="dropdown-content">
											<div class="dropdown-heading">{title.title}</div>
											<div class="dropdown-sub">{title.description}</div>
										</div>
									</li>
								{/each}
							</ul>
						</div>
					</li>
					<li>
						<button class="nav-button">
							<span>Open Source</span>
							<img class="nav-icon" src={arrowDown} alt="arrow down" height="8" width="8" />
						</button>
						<div class="dropdown">
							<ul class="dropdown-container">
								{#each titlesWithoutHeadings as title}
									<li class="dropdown-item">
										{title.title}
									</li>
								{/each}
							</ul>
						</div>
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
	{#if isModalOpen}
		<div class="modal">
			<div class="modal-content">
				<div class="form">
					<div class="input-area">
						<span class="input-icon">
							<img src={searchIcon} alt="search" height="21" width="16" />
						</span>
						<span class="input-suggestion-repo">repo:</span><span class="input-suggestion-repo-name"
							>kenjiwilkins/gothub</span
						>
						<input type="search" class="input-body" />
					</div>
					<ul>
						<li>repo:kenjiwilkins/gothub</li>
						<li>user:kenjiwilkins</li>
					</ul>
				</div>
				<a href="/">Search syntax tip</a>
			</div>
		</div>
	{/if}
</header>

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
					li {
						position: relative;
						.nav-button {
							position: relative;
							font-size: 16px;
							display: flex;
							align-items: center;
							gap: 4px;
							color: #fff;
							transition-duration: 0.2s;
							padding: 8px;
							padding-right: 20px;
							.nav-icon {
								width: 16px;
								height: 16px;
								position: absolute;
								right: 0;
								opacity: 0.75;
								transition-duration: 0.2s;
								&:hover {
									top: 0px;
								}
							}
							&:hover {
								opacity: 0.75;
								.nav-icon {
									top: 12px;
								}
							}
						}
						.dropdown {
							z-index: 1;
							position: absolute;
							top: 36px;
							opacity: 0;
							transition-duration: 0.2s;
							background-color: white;
							color: #000;
							padding: 24px 0;
							border: solid 1px #d0d7de;
							border-radius: 6px;
							display: flex;
							.dropdown-container {
								padding-left: 24px;
								padding-right: 48px;
								&:first-child {
									border-right: solid 1px #d0d7de;
								}
								&:last-child {
									border-right: none;
								}
								.dropdown-item {
									display: flex;
									align-items: center;
									gap: 16px;
									padding-top: 8px;
									padding-bottom: 16px;
									.dropdown-content {
										width: max-content;
										display: flex;
										flex-direction: column;
										gap: 4px;
										.dropdown-heading {
											font-weight: 600;
										}
										.dropdown-sub {
											color: #656d76;
										}
									}
								}
							}
						}
						&:hover {
							.dropdown {
								opacity: 1;
								top: 42px;
							}
						}
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
		.modal {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			z-index: 10000;
			// display: none;
			.modal-content {
				position: absolute;
				top: 10%;
				left: 50%;
				transform: translate(-50%, -50%);
				background-color: #fff;
				color: black;
				width: calc(100% - 16px);
				height: min-content;
				border-radius: 12px;
				padding-top: 12px;
				.form {
					display: flex;
					flex-direction: column;
					margin: 0 12px;
					.input-area {
						position: relative;
						height: 34px;
						display: flex;
						align-items: center;
						border-radius: 12px;
						border: solid 1px #d0d7de;
						.input-icon {
							margin: 4px 4px 4px 8px;
							display: flex;
							align-items: center;
						}
						.input-suggestion-repo {
							color: #1f2328;
						}
						.input-suggestion-repo-name {
							color: #0969da;
							background-color: #ddf4ff;
						}
						.input-body {
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							border-radius: 12px;
							color: inherit;
							padding-left: 210px;
							background-color: transparent;
							border: none;
							&::-webkit-search-cancel-button {
								right: 8px;
								position: relative;
								-webkit-appearance: none;
								height: 20px;
								width: 20px;
								border-radius: 10px;
								background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"%3E%3Cpath fill="%23d0d7de" d="M11.354 4.354a.5.5 0 0 1 0 .708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 .708-.708L8 7.293l2.646-2.647a.5.5 0 0 1 .708 0z"/%3E%3C/svg%3E');
							}
						}
					}
				}
			}
		}
	}
</style>
