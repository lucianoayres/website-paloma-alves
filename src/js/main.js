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

function main() {
	addCopyrightTextToFooter()
}

main()
