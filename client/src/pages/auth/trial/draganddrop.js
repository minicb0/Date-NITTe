/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import './draganddrop.css';

const finalSpaceCharacters = [
  {
    id: 'Entertainment',
    name: 'Entertainment',
  },
  {
    id: 'Foods and Travel',
    name: 'Foods and Travel',
  },
  {
    id: 'Books',
    name: 'Books',
  },
  {
    id: 'Sports',
    name: 'Sports',
  },
];

function draganddrop() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Choose your preferrence Order</h3>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
            <li style={{ listStyle: "none", border: "2px solid" }} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                { name }
            </li>
            )}
                    </Draggable>
                );
              })}
              {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default draganddrop;