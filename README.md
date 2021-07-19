# abcddragdrop-game
Small game that allows kid to learn the order of the alphabet

1. Create a random array with elements A, B, C, D, E 

Handling the draggable div 
2. Create 5 div elements with draggable attribute
3. Add 5 elements from the array to span tag inside each div elements
4. Set the ondragstart attribute calls a function, drag(event), that specifies what data to be dragged

Handling the destination div
5. Destination div: Set the ondragover event specifies where the dragged data can be dropped.
5.1 By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element. This is done by calling the event.preventDefault() method for the ondragover event
6. Destination div:  When the dragged data is dropped, a drop event occurs.
- Call preventDefault() to prevent the browser default handling of the data (default is open as link on drop)
- Get the dragged data with the dataTransfer.getData() method. This method will return any data that was set to the same type in the setData() method
- The dragged data is the id of the dragged element (for example "dragDiv1")
- Append the dragged element into the drop element


Handling animation
7. Add style of draggable element with the event ondrag
8. Add style of droppable element with the event ondragover

Handling the game rule
9. User Interval function 1 to update the sorting alphabet array
10. User Interval function 2 to compare to array and stop the game when the player WIN by showling another animation span message

Handling touchable 
11. Handle touchable when the player use mobile device

Others
- Using relative lengths to support responsive https://www.w3schools.com/cssref/css_units.asp 


DRAG and DROP notes
There are many events that are used, and can occur, in the different stages of a drag and drop operation:
Events fired on the draggable target (the source element):
- dragstart - occurs when the user starts to drag an element
- drag - occurs when an element is being dragged
- dragend - occurs when the user has finished dragging the element

Events fired on the drop target:
- dragenter - occurs when the dragged element enters the drop target
- dragover - occurs when the dragged element is over the drop target
- dragleave - occurs when the dragged element leaves the drop target
- drop - occurs when the dragged element is dropped on the drop target

User element.addEventListener(event, function, useCapture) with notes
- Note: Do not use the "on" prefix. For example, use "click" instead of "onclick".
For a list of all HTML DOM events, look at our complete HTML DOM Event Object Reference.
https://www.w3schools.com/jsref/dom_obj_event.asp  
https://www.w3schools.com/jsref/met_element_addeventlistener.asp 
