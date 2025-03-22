<!-- Title and brief of article -->
# Entity

A game object; a collection of Components.

---

<!-- Description of subject class -->
## Description

In an entity component system, Entities act as game objects. Each Entity can have up to one of each type of Component, gaining functionality with each. By default, every Entity has a Transform Component, giving it a position, rotation, and scale in space. Each Entity has a parent, and can have an unlimited amount of children. Each child Entity inherits the Transform of its parent.

<!-- Show an example of the class in use here -->
## Sample Usage

     Entity A, B;

     // B becomes a child of A
     B.setParent(&A);

     // because Transforms are inherited, the global positions of A & B are both {2, 2}
     A.transform.setPosition({2, 2});

     // a Component is added to B 
     B.addComponent<myComponent>();

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
          <td>[Transform](/)&
          </td>
          <td>[transform](/)
          </td>
          <td>The Transform component of the Entity
          </td>
     </tr>
     <tr>
          <td>bool
          </td>
          <td>[isEnabled](/)
          </td>
          <td>Flag to determine \if the Entity is active. A disabled Entity will \not be updated.
          </td>
     </tr>
     <tr>
          <td>Constructor(void)
          </td>
          <td>[Entity](/)
          </td>
          <td>Constructs a \default Entity.
          </td>
     </tr>
     <tr>
          <td>Constructor([Entity](/)\*)
          </td>
          <td>[Entity](/)
          </td>
          <td>Constructs an Entity, \and sets its parent.
          </td>
     </tr>
     <tr>
          <td>void([Entity](/)\*)
          </td>
          <td>[setParent](/)
          </td>
          <td>Sets the parent of the caller.
          </td>
     </tr>
     <tr>
          <td>[Entity](/)&(void)
          </td>
          <td>[getParent](/)
          </td>
          <td>Gets a reference to the parent of the caller.
          </td>
     </tr>
     <tr>
          <td>void(void)
          </td>
          <td>[divorceParent](/)
          </td>
          <td>Divorces the caller from its parent. The caller will no longer be a child of its parent.
          </td>
     </tr>
     <tr>
          <td>bool(void)
          </td>
          <td>[hasParent](/)
          </td>
          <td>Returns \true \if the caller has a parent, \false otherwise.
          </td>
     </tr>
     <tr>
          <td>[Entity](/)&(std::size_t i)
          </td>
          <td>[getChild](/)
          </td>
          <td>Gets a reference to the specific child Entity at the index.
          </td>
     </tr>
     <tr>
          <td>\<T\>&(void)
          </td>
          <td>[addComponent](/)
          </td>
          <td>Add a Component to the Entity.
          </td>
     </tr>
     <tr>
          <td>\<T\>&(void)
          </td>
          <td>[getComponent](/)
          </td>
          <td>Get a reference to the specified Component from the Entity.
          </td>
     </tr>
     <tr>
          <td>\<T\>&(void)
          </td>
          <td>[getComponentInParent](/)
          </td>
          <td>Get a reference to the specified Component from the parent of the Entity.
          </td>
     </tr>
     <tr>
          <td>\<T\>&(std::size_t i)
          </td>
          <td>[getComponentInChild](/)
          </td>
          <td>Get a reference to the specified Component from the specific child Entity at the index.
          </td>
     </tr>
     <tr>
          <td>\<T\>&(void)
          </td>
          <td>[removeComponent](/)
          </td>
          <td>Removes the specified Component from the Entity. 
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


