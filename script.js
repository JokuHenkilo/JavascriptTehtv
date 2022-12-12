
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
	let newListItem = document.createElement("div");
	newListItem.textContent = formData.get("Name") + ' ' + curDateTime + '\n' + formData.get("Note");
	
	if(formData.get("impCheckbox"))
		newListItem.classList.add("importantItem");
	
	listLocation.parentNode.insertBefore(newListItem, listLocation);
}

function getcurrentDateTime()
{
	let currentDateTime = new Date();
	let dateString = currentDateTime.getDate() + '.' + currentDateTime.getMonth() + '.' + currentDateTime.getFullYear() + ' ' + currentDateTime.getHours() + ':' + currentDateTime.getMinutes() + ':' + currentDateTime.getSeconds();
	// console.log(dateString);
	return dateString;
}