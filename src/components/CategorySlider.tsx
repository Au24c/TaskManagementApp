
import React from 'react';

interface CategorySliderProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = ['To Do', 'In Progress', 'Done', 'Timeout'];

const CategorySlider: React.FC<CategorySliderProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-slider">
      {categories.map(cat => (
        <button 
          key={cat} 
          onClick={() => onSelectCategory(cat)}
          className={cat === selectedCategory ? 'active' : ''}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategorySlider;
export {};
