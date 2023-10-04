import React from "react";

function CategoryFilter({ updateCategory, categories, selectedCategory }) {
  const renderCategories = categories.map((category) => {
    const className = category === selectedCategory ? 'selected' : null;
    return (
    <button
      key={category}
      className={className}
      onClick={() => updateCategory(category)}
    >
      {category}
    </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategories}
    </div>
  );
}

export default CategoryFilter;
