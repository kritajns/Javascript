function addToDo() {
			var newToDo = (function () {
				var li = document.createElement("LI");
				var newInput = document.getElementById("input-form");
				li.innerHTML = newInput.value;

				if(newInput.value === "") {
					alert('You must write something!');
				}
				else {
					document.getElementById("new").appendChild(li);
				}
			})();
		}