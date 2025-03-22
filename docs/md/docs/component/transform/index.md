<!-- Title and brief of article -->
# Transform

Default Component of every Entity, defines global and local position, rotation, and scale for each.

---

<!-- Description of subject class -->
## Description

Every Entity by default is given one Component, the Transform Component. The mathematical Transform of each Entity is inherited. Meaning, if an Entity is moved, rotated, or scaled, all of its children will be as well. Position, rotation, and scale are split into two types: global and local. The local Transform of an Entity refers to its Transform relative to its parent. While the global refers to its Transform relative to the Scene. 

<!-- Show an example of the class in use here -->
## Sample Usage

	Entity A, B;
	B.setParent(&A);

	// The global position of A is set to {10, 10}
	A.transform.setPosition({10, 10});

	// The global scale of A is set to {2, 2} 
	A.transform.setScale({2, 2});

	// The local position of B is set to {4, 4}
	B.transform.setLocalPosition({4, 4});

	// The global position of B is {18, 18} because it is scaled and offset
	// by the transform of A (its parent)
	Debug::Log(B.transform.getPosition());

---

<!-- Display members of the class, only display protected members if the class
     is meant to be inherited -->
## Public Members

<br class="empty"><table class="code">
	<tr>
		<td>**Type**
		</td>
		<td>**Member**
		</td>
		<td>**Description**
		</td>
	</tr>
	<tr>
		<td>const [TransformMatrixf](/)(void)
		</td>
		<td>[localToWorldMatrix](/)
		</td>
		<td>Get the matrix which converts a local point to global space.
		</td>
	</tr>
	<tr>
		<td>const [TransformMatrixf](/)(void)
		</td>
		<td>[worldToLocalMatrix](/)
		</td>
		<td>Get the matrix which converts a world point to local space.
		</td>
	</tr>
	<tr>
		<td>const [Vector2f](/)(void)
		</td>
		<td>[forward](/)
		</td>
		<td>Get the vector facing local forward.
		</td>
	</tr>
	<tr>
		<td>const [Vector2f](/)(void)
		</td>
		<td>[right](/)
		</td>
		<td>Get the vector facing local right.
		</td>
	</tr>
	<tr>
		<td>void([Vector2f](/))
		</td>
		<td>[setLocalPosition](/)
		</td>
		<td>Set the local position of the Entity.
		</td>
	</tr>
	<tr>
		<td>void([Vector2f](/))
		</td>
		<td>[setLocalRotation](/)
		</td>
		<td>Set the local rotation of the Entity.
		</td>
	</tr>
	<tr>
		<td>void([Vector2f](/))
		</td>
		<td>[setLocalScale](/)
		</td>
		<td>Set the local scale of the Entity.
		</td>
	</tr>
	<tr>
		<td>void([Vector2f](/))
		</td>
		<td>[setPosition](/)
		</td>
		<td>Set the global position of the Entity.
		</td>
	</tr>
	<tr>
		<td>void([Vector2f](/))
		</td>
		<td>[setRotation](/)
		</td>
		<td>Set the global rotation of the Entity.
		</td>
	</tr>
	<tr>
		<td>void([Vector2f](/))
		</td>
		<td>[setScale](/)
		</td>
		<td>Set the global scale of the Entity.
		</td>
	</tr>
	<tr>
		<td>[Vector2f](/)(void)
		</td>
		<td>[getLocalPosition](/)
		</td>
		<td>Get the local position of the Entity.
		</td>
	</tr>
	<tr>
		<td>[Vector2f](/)(void)
		</td>
		<td>[getLocalRotation](/)
		</td>
		<td>Get the local rotation of the Entity.
		</td>
	</tr>
	<tr>
		<td>[Vector2f](/)(void)
		</td>
		<td>[getLocalScale](/)
		</td>
		<td>Get the local scale of the Entity.
		</td>
	</tr>
	<tr>
		<td>[Vector2f](/)(void)
		</td>
		<td>[getPosition](/)
		</td>
		<td>Get the global position of the Entity.
		</td>
	</tr>
	<tr>
		<td>[Vector2f](/)(void)
		</td>
		<td>[getRotation](/)
		</td>
		<td>Get the global rotation of the Entity.
		</td>
	</tr>
	<tr>
		<td>[Vector2f](/)(void)
		</td>
		<td>[getScale](/)
		</td>
		<td>Get the global scale of the Entity.
		</td>
	</tr>
	<tr>
		<td>void([Vector2f](/))
		</td>
		<td>[translate](/)
		</td>
		<td>Move the Entity by some offset. 
		</td>
	</tr>
	<tr>
		<td>void([Vector2f](/))
		</td>
		<td>[rotate](/)
		</td>
		<td>Rotate the Entity by some angle.
		</td>
	</tr>
	<tr>
		<td>void([Vector2f](/))
		</td>
		<td>[scale](/)
		</td>
		<td>Scale the Entity by some x-value \and some y-value.
		</td>
	</tr>
	<tr>
		<td>void([Vector2f](/))
		</td>
		<td>[lookAt](/)
		</td>
		<td>Rotate the Entity to face some global point.
		</td>
	</tr>
</table>

<!-- Copyright footer -->
<span id="copyright"></span>


<!-- Add the copyright footer: make sure to have a span tag with an id of "copyright" -->
<script src="/docs/assets/cake-copyright-maker.js" defer></script>
<!-- CPP Inline Syntax Highlighter Script: applies to all class="code", also
     insert a '\' before any keyword that should not be colored -->
<script src="/docs/assets/cpp-keyword-color.js" defer></script>


