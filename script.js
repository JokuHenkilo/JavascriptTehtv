
document.getElementById("inputForm").addEventListener("submit", onAddButton);

let noteCount = 0;

function onAddButton(event)
{
	event.preventDefault();
	noteCount += 1;
	let noteCounter = document.getElementById("notesCount");
	noteCounter.textContent = "Notes: " + noteCount;
	
	let formData = new FormData(event.currentTarget);
	// console.log(formData.get("Name"));
	
	let curDateTime = getcurrentDateTime();
	
	let listLocation = document.querySelector("noteC")
	let newNote = document.createElement("div");
	let newNoteName = document.createElement("ins");
	let newNoteDate = document.createElement("ins");
	let newNoteBreak = document.createElement("br");
	let newNoteBody = document.createElement("ins");
	newNoteName.textContent = formData.get("Name");
	newNoteName.classList.add("noteName");
	newNoteDate.textContent = curDateTime;
	newNoteDate.classList.add("noteTime");
	newNoteBody.textContent = formData.get("Note");
	newNoteBody.classList.add("noteBody");
	
	if(formData.get("impCheckbox"))
	{
		newNote.classList.add("importantItem");
		newNoteName.classList.add("importantText");
	}
	
	listLocation.parentNode.insertBefore(newNote, listLocation);
	newNote.appendChild(newNoteName);
	newNote.appendChild(newNoteDate);
	newNote.appendChild(newNoteBreak);
	newNote.appendChild(newNoteBody);
}

function getcurrentDateTime()
{
	let currentDateTime = new Date();
	let dateString = currentDateTime.getDate() + '.' + currentDateTime.getMonth() + '.' + currentDateTime.getFullYear() + ' ' + currentDateTime.getHours() + ':' + currentDateTime.getMinutes() + ':' + currentDateTime.getSeconds();
	// console.log(dateString);
	return dateString;
}