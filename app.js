const addTodo = document.forms.addTodo,
	footer = document.querySelector('footer'),
	ul = document.querySelector('ul')

// ADD TODO TO TOP
addTodo.addEventListener('submit', e => {
	e.preventDefault()
	const newTodo = addTodo.todoContent.value

	if (newTodo === '') {
		addTodo.todoContent.placeholder = 'invalid todo';
	}
	else {
		const div = document.createElement('div'),
			li = document.createElement('li'),
			span = document.createElement('span'),
			p = document.createElement('p')

		/// add classes to elements
		div.setAttribute('class', 'list m-3')
		p.setAttribute('class', 'uncompleted-todo')
		span.setAttribute('class', 'close')

		/// set textcontent on new todo
		p.textContent = newTodo
		span.textContent = '-'

		// arrange the nodes accordingly
		li.appendChild(p)
		div.appendChild(li)
		div.appendChild(span)
		ul.prepend(div)

		// remove 'no todos' only if the div exists
		if (document.querySelector(".empty-list")) {
			document.querySelector(".empty-list").remove()
		}
		// reset the input box
		addTodo.todoContent.value = null;
	}
})

// STRIKE-THROUGH TODO
ul.addEventListener('click', e => {
	if (e.target.tagName === 'P') {
		if (e.target.className === 'completed-todo') {
			e.target.setAttribute('class', 'uncompleted-todo');
		}
		else if (e.target.className === 'uncompleted-todo') {
			e.target.setAttribute('class', 'completed-todo');
		}
	}
})

// DELETE TODO
ul.addEventListener('click', e => {
	if (e.target.className === 'close') {
		if (e.target.parentElement.className === 'list m-3') {
			e.target.parentElement.remove()
		}
	}

	/// show something if TODO is empty
	if (ul.childElementCount === 0) {
		let emptyDiv = document.createElement('div')
		emptyDiv.setAttribute('class', 'empty-list')
		emptyDiv.textContent = 'no TODOs available'
		ul.append(emptyDiv)
	}
})

/// to run the loading logo and then show the document.querySelector('main')
setTimeout(() => {
	document.querySelector('main').removeAttribute('class')
	document.querySelector('header').removeAttribute('class')
	footer.style.display = 'none'
}, 1050)

// PIN TODO TO TOP

/// ADD TIMESTAMP TO TODO WHEN ADDED

/// [i] FOR DETAILS ON TODO TASK --- created time, last modified time, completed or not,

/// try  to add animation to every transiion

/// animate different hints into the placeholder

/// EDIT TODO