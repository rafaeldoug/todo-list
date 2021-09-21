import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoriesList({ categories, subtitle }) {

  const renderCategoryListItem = (categoryItem) => {
    return (
      <CategoryItem category={categoryItem} key={categoryItem.id} />
    );
  };

  return (
    <>
      <h4>{ subtitle }</h4>
      {categories.map(renderCategoryListItem)}
    </>
  )

}