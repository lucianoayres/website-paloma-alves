function addCopyrightTextToFooter() {
	const CURRENT_YEAR = new Date().getFullYear()

	const pTag = document.createElement('p')
	const smallTag = document.createElement('small')
	const footerText = document.createTextNode(
		`© ${CURRENT_YEAR} Paloma Alves. Todos os direitos reservados.`
	)

	smallTag.appendChild(footerText)
	pTag.appendChild(smallTag)

	const footerElement = document.querySelector('footer')
	footerElement.appendChild(pTag)
}

function switchTheme(theme) {
	const currentSwitchThemeButton = getCurrentSwitchThemeButton()
	const newSwitchThemeButton = getThemeSwitchButton(theme)

	document.body.dataset.theme = theme

	newSwitchThemeButton.style.display = 'none'
	currentSwitchThemeButton.style.display = 'initial'
}

function getCurrentTheme() {
	return document.body.dataset.theme
}

function getCurrentSwitchThemeButton() {
	return getThemeSwitchButton(getCurrentTheme())
}

function getThemeSwitchButton(theme) {
	return document.body.querySelector(`#${theme}-theme-switch`)
}

function setElementDisplay(element, shouldDisplay) {
	shouldDisplay
		? (element.style.display = 'none')
		: (element.style.display = 'initial')
}

function initTheme() {
	const currentSwitchThemeButton = getCurrentSwitchThemeButton()
	currentSwitchThemeButton.style.display = 'none'
}

function main() {
	initTheme()
	addCopyrightTextToFooter()
}

main()
