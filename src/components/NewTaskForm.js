import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
const [text, setText] = useState('')
const [category, setCategory] = useState('Code')

  const categoryList = categories.map((category) => {
    return (
      <option key={category}>{category}</option>
    )
  }) 

  function handleSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit({ text, category })
    setText('')
    setCategory('Code')
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category">
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
